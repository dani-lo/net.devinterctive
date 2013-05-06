(function() {

  define([], function() {
    var Loader, returnObj, settings;
    settings = {
      loadables: []
    };
    Loader = (function() {

      function Loader(params) {}

      Loader.prototype.loadClass = function($selector, classPath, params) {
        return $selector.length && require([classPath], _.bind(function(module) {
          return params && module.init(params);
        }, this));
      };

      Loader.prototype.addClass = function($selector, classPath, params) {
        return settings.loadables.push({
          $selector: $selector,
          classPath: classPath,
          params: params || null
        });
      };

      Loader.prototype.batchLoad = function(flag) {
        var loadable, _i, _len, _ref, _results;
        _ref = settings.loadables;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          loadable = _ref[_i];
          _results.push(this.loadClass(loadable.$selector, loadable.classPath, loadable.params));
        }
        return _results;
      };

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
