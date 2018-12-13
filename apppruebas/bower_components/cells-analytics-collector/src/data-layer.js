import { FULL_CHANNEL_VALUE_PATH, DEFAULT_DATA_LAYER, ANALYTICS_WORDS, AUTO_CALCULATED_RESERVED_ANALYTICS_PROPERTIES } from './constants';
import { clone, extend } from './lib/index';
import dotProp from 'dot-prop';
import mobileDetect from 'mobile-detect';

const { set, get, has } = dotProp;

const SHOULD_PERSIST_DATA_LAYER = false;
const md = new mobileDetect(window.navigator.userAgent);

/**
 * DataLayer class.
 * Stores properties to be sent to Adobe.
 */
export default class DataLayer {
  data = null;
  autoCalculateReservedProperties = true;

  /**
   * Create a DataLayer with given configuration.
   *
   * @param  {Object} [config={}] DataLayer custom configuration object. Allows to override default DataLayer properties.
   */
  constructor(config = {}) {
    const { dataLayer = DEFAULT_DATA_LAYER, autoCalculateReservedProperties = true } = config;
    const data = this.init(dataLayer, autoCalculateReservedProperties);

    Object.assign(this, {
      data,
      autoCalculateReservedProperties
    });
  }

  /**
   * Initialize a new DataLayer based on given dataLayer and if it's a custom one or default one.
   *
   * @method init
   * @param  {Object}   dataLayer                         DataLayer structure.
   * @param  {Boolean}  autoCalculateReservedProperties   Determines if DataLayer should auto calculate reserved analytics properties.
   * @return {Object}   Initialized DataLayer.
   */
  init(dataLayer, autoCalculateReservedProperties) {
    const server = window.location.hostname || 'localhost';
    const data = clone(Object.assign({}, dataLayer), true);

    if (autoCalculateReservedProperties) {
      set(data, 'page.pageInfo.server', server);
      set(data, 'user.device.userAgent', window.navigator.userAgent);
      set(data, 'user.device.mobile', md.mobile() || md.phone() || md.tablet() ? ANALYTICS_WORDS.YES : ANALYTICS_WORDS.NO);
    }

    return data;
  }

  /**
   * Update and return new DataLayer with provided data and channel value (if data is binded to a channel).
   *
   * @method update
   * @param  {Object} data Data to update DataLayer.
   * @param  {Object} channelValue Datasource to update data properties binded to channel.
   * @return {Object} New DataLayer.
   */
  update(data, channelValue = null) {
      // we unflatten the data, without regard of reserved properties.
      return this.unflatten(data, channelValue).then((unflattenData) => {
        const initialDataLayer = clone(this.data, true); // we clone the initial data.
        const extendConfig = { deep: true, circular: true };
        const updatedDataLayer = extend(extendConfig, initialDataLayer, unflattenData); // we extend the initial data with unflatten data.

        if (this.autoCalculateReservedProperties) {
          const pageName = this.getPageName(updatedDataLayer);

          if (pageName) {
            set(updatedDataLayer, 'page.pageInfo.pageName', pageName);
          }
        }

        if (SHOULD_PERSIST_DATA_LAYER) {
          this.data = updatedDataLayer;
        }

        return updatedDataLayer;
      });
  }

  /**
   * Unflatten given data object structure to a flat object including deep properties
   * and retrieve binded values from channel value, cordova, etc...
   *
   * @method unflatten
   * @param  {Object} data Data to unflatten.
   * @param  {Object} channelValue Datasource to update data properties binded to channel.
   * @return {Object} Unflatted flat object with deep properties structure.
   */
  unflatten(data, channelValue) {
    const unflattenData = {};
    const promises = [];

    for (var key in data) {
      const isAutoCalculatedProperty = AUTO_CALCULATED_RESERVED_ANALYTICS_PROPERTIES.includes(key);

      if (data.hasOwnProperty(key) && (!isAutoCalculatedProperty || !this.autoCalculateReservedProperties)) {
        let value = data[key];

        if (value instanceof Object) {
          const isBindFromChannel = has(value, 'bind');
          const isCordovaFunction = has(value, 'cordova');

          // check for channel values & bind property of analytics object value...
          if (isBindFromChannel && channelValue) {
            promises.push(this.unflattenFromChannelValue(key, data[key], channelValue));
          } else if (isCordovaFunction) {
            promises.push(this.unflattenFromCordovaFunction(key, data[key]));
          } else {
            // empty channel data or required format not followed...we reset the value.
            value = null;

            if (isBindFromChannel) {
              if (!channelValue) {
                // show warn
                console.warn(`${key} property value could not be resolved - empty channel data - IGNORED.`);
              } else {
                // show warn
                console.warn(`${key} property is not following convention for analytics channel binding - IGNORED.`);
              }
            } else if (isCordovaFunction) {
              // show warn
              console.warn(`Cordova function could not be executed or an error has ocurred - IGNORED.`);
            }
          }
        } else {
          promises.push(new Promise((resolve, reject) => {
            resolve({ key, value });
          }));
        }
      }
    }

    return Promise.all(promises).then((result) => {
      result.forEach((item) => {
        const { key, value } = item;

        if (key && value) {
          set(unflattenData, key, value);
        }
      });

      return unflattenData;
    });
  }

  /**
   * Unflatten given data object structure to a flat object including deep properties
   * and retrieve binded values from channel value.
   *
   * @method unflattenFromChannelValue
   * @param  {Object} key Property key.
   * @param  {Object} object Object containing property to be unflatted.
   * @param  {Object} channelValue Datasource to update data properties binded to channel.
   * @return {Promise} Promise object that contains key and value of unflatted property binded to channel value.
   */
  unflattenFromChannelValue(key, object, channelValue) {
    return new Promise((resolve, reject) => {
      // we get path from binding value from analytics...
      const channelObjectPath = object.bind;
      let value;

      if (channelObjectPath !== FULL_CHANNEL_VALUE_PATH) {
        // we recover real value from channel object path...
        value = get(channelValue, channelObjectPath);
      } else {
        // we recover FULL channel value...
        value = channelValue;
      }

      resolve({ key, value });
    });
  }

  /**
   * Unflatten given data object structure to a flat object including deep properties
   * and retrieve binded values from cordova.
   *
   * @method unflattenFromCordovaFunction
   * @param  {Object} key Property key.
   * @param  {Object} object Object containing property to be unflatted.
   * @return {Promise} Promise object that contains key and value of unflatted property binded to cordova function.
   */
  unflattenFromCordovaFunction(key, object) {
    return new Promise((resolve, reject) => {
      const cordovaFunctionName = object.cordova;
      const cordovaFunction = window.ADB[cordovaFunctionName];

      const cordovaFunctionSuccess = (value) => { resolve({ key, value }); };
      const cordovaFunctionError = (error) => value = null;

      cordovaFunction(cordovaFunctionSuccess, cordovaFunctionError);
    });
  }

  /**
   * Builds pageName based on area, pageSegment, and pageLevels taken from given DataLayer data.
   *
   * @method getPageName
   * @param  {Object} data DataLayer data.
   * @return {String} Page name.
   */
  getPageName(data) {
    const pages = [];

    const area = get(data, 'page.pageInfo.area');
    const segment = get(data, 'page.pageInfo.pageSegment');

    if (area) {
      pages.push(area);
    }

    if (segment) {
      pages.push(segment);
    }

    for (var i = 1; i <= 10; i++) {
      const level = get(data, `page.pageInfo.level${i}`);

      if (level) {
        pages.push(level);
      } else {
        break;
      }
    }

    if (pages.length > 0) {
      const pageName = pages.join(':');
      return pageName;
    }

    return null;
  }
};
