import BaseAnalyticsCollector from './base';
import GoogleAnalyticsProvider from '../providers/google-analytics';

/**
 * Class implementing custom behaviour for Google Analytics collector.
 *
 * @extends BaseAnalyticsCollector
 */
export default class GoogleAnalyticsCollector extends BaseAnalyticsCollector {

  /**
   * Create an analytics collector implementing Google Analytics Provider.
   *
   * @param  {Object} config Configuration needed to init Google Analytics Collector (trackingId).
   */
  constructor(config) {
    if (!config.trackingId) {
        throw new Error('GoogleAnalyticsCollector must be initialized with \'trackingId\'.');
    }

    config = Object.assign(
      config,
      {
        provider: new GoogleAnalyticsProvider(config)
      }
    );

    super(config);
  }
}
