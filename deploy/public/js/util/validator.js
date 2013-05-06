(function() {

  define([], function() {
    var Validator, returnObj;
    Validator = (function() {

      function Validator(params) {
        this.$form = params.$form || null;
        this.model = params.model || null;
        this.$form.on("submit", _.bind(function(ev) {
          var $dataInputs, formData;
          formData = {};
          $dataInputs = this.$form.find("input.data-input");
          _.each($dataInputs, _.bind(function(elInput) {
            var key;
            key = $(elInput).attr("name").replace("-", "");
            return formData[key] = $(elInput).val();
          }, this));
          this.validate(formData);
          return false;
        }, this));
      }

      Validator.prototype.validate = function(formData) {
        this.model.set(formData);
        if (this.model.isValid()) {
          return true;
        }
        console.log(this.model.validationError);
        return false;
      };

      return Validator;

    })();
    returnObj = {
      init: function(params) {
        return new Validator(params);
      }
    };
    return returnObj;
  });

}).call(this);
