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

  require(["app/loader"], _.bind(function(Loader) {
    return Loader.initialize;
  }, this));

}).call(this);

(function() {
  /(?:)/;



}).call(this);
