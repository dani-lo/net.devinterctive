(function() {

  define(["models/akqa-contact", "ui/helpers/toggable", "util/validator"], function(ContactModel, ToggableHelper, ValidatorUtil) {
    var AkqaView, returnObj;
    AkqaView = Backbone.View.extend({
      el: "#akqa",
      initialize: function(params) {
        this.toggable = ToggableHelper.init(null);
        this.validator = ValidatorUtil.init({
          model: ContactModel.init({
            validate: true
          }),
          $form: $(".form-validate")
        });
        return this.render;
      },
      render: function() {
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
