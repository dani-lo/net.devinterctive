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

  test("AKQA model validates - wrong data", function() {
    return require(["models/akqa-contact"], function(ContactModel) {
      var model, testData;
      testData = {
        contactname: "foo",
        contactemail: "bar"
      };
      model = ContactModel.init({
        validate: true
      });
      model.set(testData);
      return ok(!model.isValid(), "Passed ..");
    });
  });

  test("AKQA model validates - correct data", function() {
    return require(["models/akqa-contact"], function(ContactModel) {
      var model, testData;
      testData = {
        contactname: "foo",
        contactemail: "bar@baz.com"
      };
      model = ContactModel.init({
        validate: true
      });
      model.set(testData);
      return ok(model.isValid(), "Passed ..");
    });
  });

  test("AKQA toggler works", function() {
    var $toggleBtn, $toggleTarget, result;
    $toggleBtn = $("#btn-toggle-test");
    $toggleBtn.trigger("click");
    $toggleTarget = $toggleBtn.parent().parent().find(".toggable-container");
    result = $toggleTarget.hasClass("off");
    return ok(result, "Passed ..");
  });

}).call(this);
