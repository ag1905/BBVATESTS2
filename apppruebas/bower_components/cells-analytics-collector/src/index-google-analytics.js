import GoogleAnalyticsCollector from './collectors/google-analytics';
// @TODO: Revisar esta exportación ya que webpack la puede hacer.
window.GoogleAnalyticsCollector = GoogleAnalyticsCollector;
module.exports = GoogleAnalyticsCollector;
