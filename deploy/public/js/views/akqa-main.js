(function() {

  define(["ui/helpers/toggable", "utils/validator"], function(Toggable, Validator) {
    var AkqaView, ContactModel, returnObj;
    AkqaView = Backbone.View.extend({
      el: "#akqa-test",
      initialize: function(params) {
        this.toggable = Toggable.init;
        this.validator = Validator.init({
          model: ContactModel,
          $form: $(".form-validate")
        });
        return this.render;
      },
      render: function() {
        return this;
      }
    });
    ContactModel = Backbone.Model.extend({
      validate: function(attrs, options) {
        var contactemail, contactname, contactnumber, error;
        contactname = attrs.contactname;
        contactemail = attrs.contactemail;
        contactnumber = attrs.contactnumber;
        error = "";
        /[^\s]/.test(contactname || (error += "Please enter your name"));
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(contactname || (error += "Please enter a valid email"));
        if (error === "") {
          return error;
        }
        return true;
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
