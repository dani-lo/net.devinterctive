(function() {

  define([], function() {
    var ContactModel, returnObj, validationErrors, validationRegex;
    validationRegex = {
      txt: /[^\s]/,
      email: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
    };
    validationErrors = {
      name: "Please enter your name<br />",
      email: "Please enter a valid email<br />"
    };
    ContactModel = Backbone.Model.extend({
      initalize: function(params) {
        return this.validationError = "";
      },
      validate: function(attrs, options) {
        var contactemail, contactname, contactnumber, errorMsg;
        contactname = attrs.contactname;
        contactemail = attrs.contactemail;
        contactnumber = attrs.contactnumber;
        errorMsg = "";
        validationRegex.txt.test(contactname || (errorMsg += validationErrors.name));
        validationRegex.email.test(contactemail || (errorMsg += validationErrors.email));
        this.validationError = errorMsg;
        if (errorMsg !== "") {
          return errorMsg;
        }
      }
    });
    returnObj = {
      init: function(params) {
        return new ContactModel(params);
      }
    };
    return returnObj;
  });

}).call(this);
