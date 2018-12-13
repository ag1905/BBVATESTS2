(function () {

    'use strict';

    Polymer({

        is: 'salesforce-dm',

        properties: {
            test: String
        },

        ready: function(){
            let salesforceState =  window.localStorage.getItem('datalayer_bbvatest') ? window.localStorage.getItem('datalayer_bbvatest') : {"cardvisitcount":0};
            window.datalayer_bbvatest = salesforceState;
        },
        
        _registerActivity: function(activity) {
            let salesforceState = JSON.parse(window.localStorage.getItem('datalayer_bbvatest')) ? JSON.parse(window.localStorage.getItem('datalayer_bbvatest')) : {"cardvisitcount":0};
            salesforceState[activity.value.currentPage + 'visitcount'] = salesforceState[activity.value.currentPage + 'visitcount'] ? salesforceState[activity.value.currentPage + 'visitcount'] + 1 : 1;       
            window.localStorage.setItem('datalayer_bbvatest', JSON.stringify(salesforceState));
            window.datalayer_bbvatest = salesforceState;

            window.Krux||((window.Krux=function(){window.Krux.q.push(arguments);}).q=[]);
                (function(){
                    function retrieve(n){
                    var k= 'kx'+''+n, ls=(function(){
                        try {
                        return window.localStorage;
                        } catch(e) {
                        return null;
                        }
                    })();
                    if (ls) {
                        return ls[k] || '';
                    } else if (navigator.cookieEnabled) {
                        var m = document.cookie.match(k+'=([^;]*)');
                        return (m && unescape(m[1])) || '';
                    } else {
                        return '';
                    }
                    }
                    window.Krux.user = retrieve('user');
                    window.Krux.segments = retrieve('segs') ? retrieve('segs').split(',') : [];
                })();

        
            let segment = window.Krux && window.Krux.segments && window.Krux.segments.find(item=>{return item ==='su76i0yv9'}) ? {
                "type": "warning",
                "duration": 0,
                "message": "Salesforce Segment su76i0yv9"
            } : {
                "type": "info",
                "duration": 0,
                "message": "Salesforce Segment su75572db"
            };


            this.$.toast.clear();
            this.$.toast.showToast(segment);
            
            // Note: Requires JavaScript ControlTag to be deployed on the page
            // BEGIN Salesforce DMP AJAX ControlTag for "Krux SA Productions"
            window.Krux('page:load', function(err) {
                /* Optional, called just after the tags are finished loading.
                If err is not null, then something went wrong. (err will be an instanceof Error or null.)
                */
               if(error){
                console.log('error...',err);
               }
            }, {pageView: true /* Set to false if you don't want this counted as a page view. */});
            // END Salesforce DMP AJAX ControlTag



        }
    });
}());