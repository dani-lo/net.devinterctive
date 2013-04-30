(function() {

  test("Setup qunit test", function() {
    return ok(1 === 1, "Passed ..");
  });

  test("Loader module loads", function() {
    return require(["util/loader"], function(Loader) {
      var loader;
      loader = Loader.init({});
      loader.addClass($("body"), "tests/require-test-module");
      return ok(loader.batchLoad(), "Passed ..");
    });
  });

  test("Loader module loads with parameters", function() {
    return require(["util/loader"], function(Loader) {
      var loader;
      loader = Loader.init({});
      loader.addClass($("body"), "tests/require-test-module", {
        foo: "bar"
      });
      return ok(loader.batchLoad(), "Passed ..");
    });
  });

}).call(this);
