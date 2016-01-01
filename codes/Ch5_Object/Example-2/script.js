(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MyObject = Marionette.Object.extend({

    initialize: function(options) {
      console.log("LOG: Object got initialize");
      console.log("LOG: (options) object - ", options);

      this.fetchObjOpt();
    },

    fetchObjOpt: function() {
      console.log("LOG: (this.options) object - ", this.options);
    }

  });

  new MyObject({
    "name": "Ashwin Hegde",
    "job": "Software Engineer"
  });

  app.start();

})();
