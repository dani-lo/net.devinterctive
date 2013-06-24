(function() {

  define(["collections/cv"], function(CvCollection) {
    var CvView, returnObj;
    CvView = Backbone.View.extend({
      el: "#cv",
      initialize: function(params) {
        alert("oh nice");
        this.cv = CvCollection.init({});
        this.cv.fetch();
        return this.render();
      },
      render: function() {
        return this;
      }
    });
    returnObj = {
      init: function(params) {
        return new CvView(params);
      }
    };
    return returnObj;
  });

}).call(this);
