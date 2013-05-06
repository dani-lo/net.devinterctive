define [], ->

    validationRegex =
        txt : /[^\s]/
        email : /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/

    validationErrors =
        name : "Please enter your name"
        email : "Please enter a valid email"

    ContactModel = Backbone.Model.extend

        initalize: (params) ->

            @aErrors = []

        validate: (attrs, options) ->

            contactname = attrs.contactname
            contactemail = attrs.contactemail
            contactnumber = attrs.contactnumber
            notvalid = "not valid"

            @aErrors = []
            
            @aErrors.push validationErrors.name unless contactname.match validationRegex.txt

            @aErrors.push validationErrors.email unless contactemail.match validationRegex.email 

            if @aErrors.length then return notvalid

    returnObj =

        init : (params)-> new ContactModel(params)

    return returnObj