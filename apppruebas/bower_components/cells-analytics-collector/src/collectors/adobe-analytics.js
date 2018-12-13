import BaseAnalyticsCollector from './base';
import AdobeAnalyticsProvider from '../providers/adobe-analytics';

/**
 * Class implementing custom behaviour for Adobe Analytics collector.
 *
 * @extends BaseAnalyticsCollector
 */
export default class AdobeAnalyticsCollector extends BaseAnalyticsCollector {

  /**
   * Create an analytics collector implementing Adobe Analytics Provider.
   *
   * @param  {Object} config Configuration needed to init Adobe Analytics Collector.
   */
  constructor(config) {
    config = Object.assign(
      config,
      {
        provider: new AdobeAnalyticsProvider(config)
      }
    );

    super(config);
  }
}
