(function() {

  define([], function() {
    var JobModel, returnObj, validationErrors, validationRegex;
    validationRegex = {
      txt: /[^\s]/,
      email: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
    };
    validationErrors = {
      name: "Please enter your name",
      email: "Please enter a valid email"
    };
    JobModel = Backbone.Model.extend({
      url: '/services/jobs/' + this.id,
      initalize: function(params) {},
      validate: function(attrs, options) {}
    });
    returnObj = {
      init: function(params) {
        return new JobModel(params);
      }
    };
    return returnObj;
  });

}).call(this);
