(function() {

  define(["models/job"], function(JobModel) {
    var Cv, returnObj;
    Cv = Backbone.Collection.extend({
      url: '/services/jobs',
      model: JobModel.init({})
    });
    returnObj = {
      init: function(params) {
        return new Cv(params);
      }
    };
    return returnObj;
  });

}).call(this);
