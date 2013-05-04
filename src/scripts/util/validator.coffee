define [], ->

    class Validator

        constructor: (params) ->

            @$form = params.$form || null
            @model = params.model || null

            @$form.on "submit" _.bind (ev) ->

                #

            , @

            return @

        validate: ->

            return @

    returnObj =

        init : (params)-> new Validator(params)

    return returnObj