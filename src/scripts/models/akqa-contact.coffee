define [], ->

    validationRegex =
        txt : /[^\s]/
        email : /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/

    validationErrors =
        name : "Please enter your name<br />"
        email : "Please enter a valid email<br />"

    ContactModel = Backbone.Model.extend

        initalize: (params) ->

            @validationError = ""

        validate: (attrs, options) ->

            contactname = attrs.contactname
            contactemail = attrs.contactemail
            contactnumber = attrs.contactnumber
            errorMsg = ""

            validationRegex.txt.test contactname or
                errorMsg += validationErrors.name

            validationRegex.email.test contactemail or
                errorMsg += validationErrors.email

            # BBone does not seem to be setting validationError
            # property of its own so lets 'override' this behaviour
            @validationError = errorMsg

            return errorMsg unless errorMsg is ""

    returnObj =

        init : (params)-> new ContactModel(params)

    return returnObj