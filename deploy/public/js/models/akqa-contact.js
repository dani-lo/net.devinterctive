(function() {

  define([], function() {
    var ContactModel, returnObj, validationErrors, validationRegex;
    validationRegex = {
      txt: /[^\s]/,
      email: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
    };
    validationErrors = {
      name: "Please enter your name",
      email: "Please enter a valid email"
    };
    ContactModel = Backbone.Model.extend({
      initalize: function(params) {
        return this.aErrors = [];
      },
      validate: function(attrs, options) {
        var contactemail, contactname, contactnumber, notvalid;
        contactname = attrs.contactname;
        contactemail = attrs.contactemail;
        contactnumber = attrs.contactnumber;
        notvalid = "not valid";
        this.aErrors = [];
        if (!contactname.match(validationRegex.txt)) {
          this.aErrors.push(validationErrors.name);
        }
        if (!contactemail.match(validationRegex.email)) {
          this.aErrors.push(validationErrors.email);
        }
        if (this.aErrors.length) {
          return notvalid;
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
