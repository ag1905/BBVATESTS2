(function() {

  'use strict';

  Polymer({

    is: 'segment-navigation-dm',
    properties: {
      navigations: {
        type: Object,
        value: function() {
          return {
            'default': 'navigate-login-to-dashboard',
            'card': 'navigate-login-to-card'
          };
        }
      }
    },

    getNextPage: function() {
      
      let segment = window.Krux && window.Krux.segments && window.Krux.segments.find(item=>{return item ==='su76i0yv9'}) ? this.navigations.card : this.navigations.default;
      
      this.dispatchEvent(new CustomEvent(segment, {
        bubbles: true,
        composed: true
      }));
      
    }

  });

}());