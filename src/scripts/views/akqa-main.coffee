define [
    "ui/helpers/toggable",
    "utils/validator"
    ], (Toggable, Validator)->

    AkqaView =  Backbone.View.extend

        el : "#akqa-test"

        initialize : (params) ->

            @toggable = Toggable.init

            @validator = Validator.init

                model : ContactModel
                $form : $ ".form-validate"

            return @.render

        render : ->

            return @

    ContactModel = Backbone.Model.extend

        validate: (attrs, options) ->

            contactname = attrs.contactname
            contactemail = attrs.contactemail
            contactnumber = attrs.contactnumber
            error = ""

            /[^\s]/.test contactname or error += "Please enter your name"

            /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test contactname or error += "Please enter a valid email"

            return error if error is ""

            return true

    returnObj =

        init : (params)-> new AkqaView(params)

    return returnObj