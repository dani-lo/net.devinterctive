(function() {

  define([], function() {
    var Toggable, returnObj;
    Toggable = Backbone.View.extend({
      el: ".btn-toggle",
      initialize: function(params) {
        return this.render;
      },
      render: function() {
        this.el.on("click", _.bind(function(ev) {
          var $clicked, $toggleTarget;
          $clicked = $(ev.currentTarget);
          $toggleTarget = $clicked.parent().parent().find("toggable-container");
          switch ($toggleTarget.hasClass("off")) {
            case true:
              return $toggleTarget.removeClass("off").addClass("on");
            case false:
              return $toggleTarget.removeClass("on").addClass("off");
          }
        }, this));
        return this;
      }
    });
    returnObj = {
      init: function(params) {
        return new AkqaView(params);
      }
    };
    return returnObj;
  });

}).call(this);
