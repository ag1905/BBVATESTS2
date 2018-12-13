import DataLayer from '../data-layer';
import dotProp from 'dot-prop';
import { DEFAULT_DATA_LAYER_NAME, FULL_CHANNEL_VALUE_PATH } from '../constants';

const { get, has } = dotProp;

/**
 * Class defining base Analytics Provider functionality.
 */
export default class BaseProvider {
  dataLayer = null;
  dataLayerName = null;
  helperScript = null;
  onAnalyticReceived = null;

  /**
   * Create a BaseProvider.
   *
   * @param  {Object} [config={}] Configuration needed to init Base Provider (dataLayer, dataLayerName)
   */
  constructor(config = {}) {
    const dataLayer = new DataLayer(config);
    const { dataLayerName = DEFAULT_DATA_LAYER_NAME, helperScript = '', onAnalyticReceived = null } = config;

    Object.assign(this, {
      dataLayer,
      dataLayerName,
      helperScript,
      onAnalyticReceived
    });
  }

  /**
   *  Initialization method for providers. Entry point for loadScript calls.
   *  Must execute cb to continues the Analytics collection.
   *
   * @method init
   * @param  {Function} cb Callback to continues Analytics collection process.
   * @interface
   */
  init(cb) {
    throw new Error('init method must be implemented on each analytics provider.');
  }

  /**
   * Lady loading corresponding analytics script.
   *
   * @method loadScript
   * @param  {Function} cb Callback to continues Analytics collection process.
   * @interface
   */
  loadScript(cb) {
    throw new Error('loadScript method must be implemented on each analytics provider.');
  }

  /**
   * Send given event to corresponding analytics provider.
   *
   * @method sendEvent
   * @interface
   */
  sendEvent() {
    throw new Error('sendEvent method must be implemented on each analytics provider.');
  }

  /**
   * Send analytics event data to implemented provider.
   *
   * @private
   * @method _trackEvent
   * @param  {BridgeEvent} e Bridge event that contains detail, event and action data.
   */
  _trackEvent(e) {
    const {
      analytics: { action, data },
      channel: { name, value }
    } = this._getMetricsFromEvent(e);

    // TODO: revisar destructuring...no me termina de convencer cuando existen casos no controlados
    if (!action || !data) {
      return;
    }

    this.dataLayer.update(data, value).then((updatedData) => {
      this.sendEvent(action, updatedData);

      if (this.onAnalyticReceived) {
        this.onAnalyticReceived({type: action, detail: data});
      }
    });
  }

  /**
   * Send page view event data to implemented provider.
   *
   * @private
   * @method _setFootPrint
   * @param  {BridgeEvent} e Bridge event that contains page, action and data.
   */
  _setFootPrint(e) {
    const {
      analytics: { action, data },
      page: { name }
    } = this._getMetricsFromFootprint(e);

    // TODO: revisar destructuring...no me termina de convencer cuando existen casos no controlados
    if (!action || !data) {
      return;
    }

    this.dataLayer.update(data).then((updatedData) => {
      this.sendEvent(action, updatedData);

      if (this.onAnalyticReceived) {
        this.onAnalyticReceived({type: action, detail: data});
      }
    });
  }

  /**
   * Send window error event data to implemented provider.
   *
   * @private
   * @method _trackError
   * @param  {Event} e Error event.
   */
  _trackError(e) {

  }

  /**
   * Extract metrics from given event and normalices them in a friendly-format object.
   *
   * @private
   * @method _getMetricsFromEvent
   * @param  {BridgeEvent} e Bridge event that contains detail, event and action data.
   * @return {Object} Object that contains channel name, current channel state, analytics action and analytics data.
   */
  _getMetricsFromEvent(e) {
    const detail = e.detail || {};
    const event = detail.event || {}; // get(e, 'detail.event');
    const analytics = detail.detail || {}; // get(e, 'detail.detail');
    const channelName = get(event, 'type');
    const channelValue = event && ( event.detail && event.detail.value ) || event.detail;
    const analyticsData = get(analytics, this.dataLayerName);

    let analyticsAction = get(analytics, 'action');

    if (analyticsAction instanceof Object) {
      const isBindFromChannel = has(analyticsAction, 'bind');

      if (isBindFromChannel) {
        // we get path from binding value from analytics...
        const channelObjectPath = analyticsAction.bind;
        let value;

        if (channelValue) {
          if (channelObjectPath !== FULL_CHANNEL_VALUE_PATH) {
            // we recover real value from channel object path...
            analyticsAction = get(channelValue, channelObjectPath);
          } else {
            // we recover FULL channel value...
            analyticsAction = channelValue;
          }
        } else {
          // show warn
          console.warn(`${analyticsAction} property value could not be resolved - empty channel data - IGNORED.`);
        }
      } else {
        // show warn
        console.warn(`${analyticsAction} property is not following convention for analytics channel binding - IGNORED.`);
      }
    }

    return {
      channel: {
        name: channelName,
        value: channelValue,
      },
      analytics: {
        action: analyticsAction,
        data: analyticsData
      }
    };
  }

  /**
   * Extract metrics from given event and normalices them in a friendly-format object.
   *
   * @private
   * @method _getMetricsFromFootprint
   * @param  {BridgeEvent} e Bridge event that contains page, action and data.
   * @return {Object} Object that contains page name, analytics action and analytics data.
   */
  _getMetricsFromFootprint(e) {
    const detail = e.detail || {};
    const pageName = detail.name || {}; // get(e, 'detail.name');
    const analytics = detail.node && detail.node.analytics || {}; // get(e, 'detail.node.analytics');

    const analyticsAction = get(analytics, 'action');
    const analyticsData = get(analytics, this.dataLayerName);

    return {
      page: {
        name: pageName
      },
      analytics: {
        action: analyticsAction,
        data: analyticsData
      }
    };
  }
}
