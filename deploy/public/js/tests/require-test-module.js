(function() {

  define([], function() {
    var RequireTestModule, returnObj;
    RequireTestModule = (function() {

      function RequireTestModule(params) {
        this.loaded = params.loaded || null;
      }

      RequireTestModule.prototype.isLoaded = function() {
        return this.loaded;
      };

      return RequireTestModule;

    })();
    returnObj = {
      init: function(params) {
        return new RequireTestModule(params);
      }
    };
    return returnObj;
  });

}).call(this);
