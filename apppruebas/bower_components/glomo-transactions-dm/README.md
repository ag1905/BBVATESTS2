# glomo-cards-dm

Transactions product Dm

Example:
```html
<glomo-transactions-dm id="dm"
  host="https://urlToApi/example"
  product-type="[[productType]]"
  product-id="[[productId]]"
  transactions="{{response}}"></glomo-transactions-dm>
```
With fetch set to true, the elements performs a request to fetch transactions.

You can trigger a request explicitly by calling doRequest on the element.
