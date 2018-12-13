# cells-molecule-header

`<cells-molecule-header>` is a componente to display a custom header. It includes three parts.
Left part that could contain a toggle menu or a back arrow.
Central part that could contain a custom title with greetings, masked number or nothing else.
Right part that could contain a switch or a search button.

Example:

```html
<cells-molecule-header bankNameAsTitle="true"
                       title="Custom title">
  Application name
</cells-molecule-header>

<cells-molecule-header greetingAsTitle="true"
                       userInfo="{name='User name'}"
                       search="true">
</cells-molecule-header>

<cells-molecule-header product="{number: 23443234234, typeId: 'type', currencies: [{currency: 'USD', isMajor=true}, {currency: 'EUR', isMajor=true}]}"
                       userInfo="{name='User name'}"
                       showCurrencySwitch="true"
                       back="true"
                       backIcon="coronita:return-12">
</cells-molecule-header>

## Properties

| Name | Description | Default |
|:---------------|:------------|:--------------|
| title (String) | Name of the custom title | '' |
| product (Object) | Product data, It must contain 'number', 'typeId' and 'currencies' | {} |
| greetingAsTitle (Boolean) | Show greeting text by default | true/false |
| bankNameAsTitle (Boolean) | Show application name by default | true/false |
| userInfo (Object) | User data info, It must contain 'name'| {} |
| search (Boolean) | Show search button | true/false |
| back (Boolean) | Show back button | true/false |
| backIcon (String) | Back icon button | '' |
| backAction (String) | Back action dispatch | '' |
| backText (String) | Back text | '' |
| showCurrencySwitch (String) | Show switch currency button | true/false |

## Styling

The following custom properties and mixins are available for styling:

| Custom property                      | Description                         | Default        |
|:-------------------------------------|:------------------------------------| :--------------|
| --cells-molecule-header           | Empty mixin for your own styles     | {}             |
| --cells-molecule-header-title     | Empty mixin for the title           | {}             |
| --cells-molecule-header-menu-icon | Empty mixin for the menu icon       | {}             |
| --cells-molecule-header-back-icon | Empty mixin for the back icon       | {}             |
| --cells-molecule-header-search-icon | Empty mixin for the search icon       | {}             |
| --cells-molecule-header-dark      | Empty mixin for :host-context(.header--dark) | {}    |
