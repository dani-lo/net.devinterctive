(function() {

  define([], function() {
    var Toggable, returnObj;
    Toggable = Backbone.View.extend({
      el: ".btn-toggle",
      initialize: function(params) {
        return this.render();
      },
      render: function() {
        this.$el.on("click", _.bind(function(ev) {
          var $clicked, $toggleTarget;
          $clicked = $(ev.currentTarget);
          $toggleTarget = $clicked.parent().parent().find(".toggable-container");
          switch ($toggleTarget.hasClass("off")) {
            case true:
              $toggleTarget.removeClass("off").addClass("on");
              break;
            case false:
              $toggleTarget.removeClass("on").addClass("off");
          }
          return false;
        }, this));
        return this;
      }
    });
    returnObj = {
      init: function(params) {
        return new Toggable(params);
      }
    };
    return returnObj;
  });

}).call(this);
