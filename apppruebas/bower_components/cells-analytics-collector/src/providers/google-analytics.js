import BaseProvider from './base';
import { GOOGLE_PROVIDER_SCRIPT } from '../constants';

/**
 * Class implementing custom behaviour for Google Analytics provider.
 *
 * @extends BaseProvider
 */
export default class GoogleAnalyticsProvider extends BaseProvider {
  trackingId = null;

  /**
   * Create a Google Analytics Provider.
   *
   * @param  {Object} config Configuration needed to init Google Analytics Provider (trackingId)
   */
  constructor(config) {
    super(config);

    const { trackingId } = config;

    Object.assign(this, {
      trackingId
    });
  }

  /**
   * Initializes analytics.js command queue and starts asynchronously loading of
   * google analytics script.
   * When it finish, will execute given callback.
   *
   * @method init
   * @param  {Function} cb Callback to be executed when loadScript function has finished.
   */
  init(cb) {
    // Initializes the analytics.js command queue.
    window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)};window.ga.l=+new Date;

    window.ga('create', this.trackingId, {
      'cookieDomain': 'none'
    });

    this.loadScript(cb);
  }

  /**
   * Loads asynchronously google analytics script and append it to document header.
   * When it finish, will execute given callback.
   *
   * @method loadScript
   * @param  {Function} cb Callback to be executed when ga script has finished loading.
   */
  loadScript(cb) {
    const script = document.createElement('script');

    script.onload = cb || null;
    script.src = PROVIDER_SCRIPT;
    script.async = 1;
    document.head.appendChild(script);
  }

  /**
   * Send event with given action, category and label to Google Analytics provider.
   *
   * @method sendEvent
   * @param  {String} action Custom action to send on google analytics event.
   * @param  {String} category Category of the event.
   * @param  {String} label Label of the event (used as value field to store data info)
   */
  sendEvent(action, category, label) {
    ga('send', 'event', action, category, label);
  }
}
