const DEFAULT_MAIN_NODE = 'app__content';

/**
 * Function wrapper checks for compatibility for event constructor.
 *
 * @method createEvent
 * @param  {String} eventName Event name.
 * @return {Event}
 */
const createEvent = (eventName) => {
  if (typeof(Event) === 'function') {
    return new Event(eventName);
  }

  const event = document.createEvent('Event');

  event.initEvent(eventName, true, true);
  return event;
};

/**
 * Class defining base Analytics Collector functionality.
 */
export default class BaseAnalyticsCollector {
  mainNode = null;
  node = null;
  provider = null;

  /**
   * Creates a Base Analytics Collector.
   *
   * @param  {Object} provider                    Analytics Provider to collect data.
   * @param  {String} [{mainNode=DEFAULT_MAIN_NODE}= {}] Id for HTML target node to listen events from.
   */
  constructor({ provider, mainNode = DEFAULT_MAIN_NODE } = {}) {
    Object.assign(this, {
      provider,
      mainNode
    });

    this.provider.init(this.startTracking.bind(this));
  }

  /**
   * Sends an event to the implemented provider out of the automatic system.
   *
   * @method sendEvent
   * @param  {String} action Action to be sent to the analytics tracker.
   * @param  {Object} data Data to be sent to the analytics tracker.
   */
  sendEvent(action, data) {
    this.provider.sendEvent(action, data);
  }

  /**
   * Starts listening to bridge events on main node and delegates to corresponding
   * provider methods implementation.
   *
   * @method startTracking
   */
  startTracking() {
    this.node = document.querySelector(`#${this.mainNode}`);

    if (this.node) {
      this.listenerTrackEvent = this.provider._trackEvent.bind(this.provider);
      this.listenerTemplateTransitionEnd = this.provider._setFootPrint.bind(this.provider);

      window.onerror = this.provider._trackError.bind(this.provider);
      this.node.addEventListener('track-event', this.listenerTrackEvent);
      this.node.addEventListener('template-transition-end', this.listenerTemplateTransitionEnd);

      const event = createEvent('analytics-collector-ready');

      this.node.dispatchEvent(event);
    }
  }

  /**
   * Stop listening to bridge events.
   *
   * @method stopTracking
   */
  stopTracking() {
    if (this.node) {
      this.node.removeEventListener('track-event', this.listenerTrackEvent);
      this.node.removeEventListener('template-transition-end', this.listenerTemplateTransitionEnd);
    }
  }
}
