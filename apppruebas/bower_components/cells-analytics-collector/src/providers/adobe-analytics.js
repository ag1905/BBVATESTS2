import BaseProvider from './base';
import { ADOBE_PROVIDER_SCRIPT_SKELETON } from '../constants';

/**
 * Class implementing custom behaviour for Adobe Analytics provider.
 *
 * @extends BaseProvider
 */
export default class AdobeAnalyticsProvider extends BaseProvider {
  helperScript = null;

  /**
   * Create a Adobe Analytics Provider.
   *
   * @param  {Object} config Configuration needed to init Adobe Analytics Provider
   */
  constructor(config) {
    super(config);
  }

  /**
   * Check for adobe analytics tag script on header document.
   *
   * @method init
   * @param  {Function} cb Callback to be executed when checkForAdobeAnalyticsScript function has finished.
   */
  init(cb) {
    this.checkForAdobeAnalyticsScript(cb);
  }

  /**
   * Check for adobe analytics tag script on header document.
   *
   * @method checkForAdobeAnalyticsScript
   * @param  {Function} cb Callback to be executed, if present, when function has finished.
   */
  checkForAdobeAnalyticsScript(cb) {
    const tag = document.querySelector(`[src*="${ADOBE_PROVIDER_SCRIPT_SKELETON}"]`);

    if (!tag) {
      throw new Error('Adobe Analytics script tag must be present on header.');
      return;
    }

    if (this.helperScript) {
      this.loadScript(this.helperScript, cb);
    } else if (cb) {
      cb();
    }
  }

  /**
   * Loads asynchronously ADB_Helper script and append it to document header.
   * When it finish, will execute given callback.
   *
   * @method loadScript
   * @param  {Function} cb Callback to be executed when ga script has finished loading.
   */
  loadScript(helperScript, cb) {
    const script = document.createElement('script');

    script.onload = cb || null;
    script.src = helperScript;
    script.async = 1;
    document.head.appendChild(script);
  }

  /**
   * Send given action and updatedData to be tracked by Adobe Analytics provider.
   *
   * @method sendEvent
   * @param  {String} action Action to be sent to the tracker.
   * @param  {String} updatedData Data to be sent to the tracker.
   */
  sendEvent(action, updatedData) {
    window[this.dataLayerName] = updatedData;
    window._satellite.track(action);
  }
}
