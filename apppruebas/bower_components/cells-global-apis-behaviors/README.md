# cells-global-apis-behaviors

Cells Global Apis Behaviors
## Url to Canonical Data Model (CDM) used for cells-global-apis-behaviors

### Manage service pagination responses
Example:

```js

    getDeposits: function() {
      var service = this._serviceDeposits({
        host: this.host,
        requiresTsec: true
      });

      // Get genrate response
      return service.generateRequest().then(
        function() {
          var response = this._parseResponse(service.getLastResponse());
          this.set('deposits', response);
          this.fire('set-deposits', response);
        }.bind(this),
        function(error) {
          this.fire('error-on-get-deposits');
        }.bind(this)
      );
    }

     /**
     * Parse response
     */
    _parseResponse: function(response) {
      if (response) {
        this.set('apiInfo', response.apiInfo);

        if (response.pagination) {
          this._generatePagination(response.pagination);
        }

        return response.data;
      }

      return this._errorHandler(response);
    }

    /**
     * Generate pagination
     */
    _generatePagination: function(pagination) {
      this.page = pagination.page;
      this.totalPages = pagination.totalPages;
      this.totalElements = pagination.totalElements;
      this.pageSize = pagination.pageSize;

      if (pagination.links) {
        this.nextKey = this._getPaginationKey(pagination.links.next);
        this.previousKey = this._getPaginationKey(pagination.links.previous);
        this.firstKey = this._getPaginationKey(pagination.links.first);
        this.lastKey = this._getPaginationKey(pagination.links.last);
      }

      this.set('pagination', pagination);
    }

```

https://descinet.bbva.es/stash/projects/CAT/repos/cells-models-catalog/browse/lib/models/
