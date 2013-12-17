define [], ->

    validationRegex =
        txt : /[^\s]/
        email : /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/

    validationErrors =
        name : "Please enter your name"
        email : "Please enter a valid email"

    JobModel = Backbone.Model.extend

        url : '/services/jobs/' + this.id

        initalize: (params) ->

        validate: (attrs, options) ->

    returnObj =

        init : (params)-> new JobModel(params)

    return returnObj