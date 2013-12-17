(function() {

  define(["hgn!tpl/akqa/contact-error"], function(ContactErrorTpl) {
    var Validator, returnObj;
    Validator = (function() {

      function Validator(params) {
        this.$form = params.$form || null;
        this.model = params.model || null;
        this.$errorTpl = null;
        this.$form.on("submit", _.bind(function(ev) {
          var $dataInputs, formData;
          formData = {};
          $dataInputs = this.$form.find("input.data-input");
          if (this.$errorTpl) {
            this.$errorTpl.remove();
          }
          this.$errorTpl = null;
          _.each($dataInputs, _.bind(function(elInput) {
            var key;
            key = $(elInput).attr("name").replace("-", "");
            return formData[key] = $(elInput).val();
          }, this));
          return this.validate(formData);
        }, this));
      }

      Validator.prototype.validate = function(formData) {
        this.model.set(formData);
        if (this.model.isValid()) {
          return true;
        }
        this.display(this.model.aErrors);
        return false;
      };

      Validator.prototype.display = function(aErrors) {
        this.$errorTpl = $(ContactErrorTpl({
          aErrors: aErrors
        }));
        this.$form.prepend(this.$errorTpl);
        return this;
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
