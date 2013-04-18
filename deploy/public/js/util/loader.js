(function() {

  define([], function() {
    var Loader, returnObj;
    Loader = (function() {

      function Loader(params) {
        this.name = params.name;
      }

      return Loader;

    })();
    returnObj = {
      init: function(params) {
        return new Loader(params);
      }
    };
    return returnObj;
  });

}).call(this);
