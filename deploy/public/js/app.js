(function() {
  var requireSettings;

  requireSettings = {
    baseUrl: "/js",
    paths: {
      hgn: "lib/hgn",
      text: "lib/text",
      hogan: "lib/hogan",
      async: "lib/async"
    }
  };

  require.config(requireSettings);

  require(["util/loader"], _.bind(function(Loader) {
    var loader;
    return loader = Loader.init({});
  }, this));

}).call(this);
