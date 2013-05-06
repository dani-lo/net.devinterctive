define [], ->

    class Validator

        constructor: (params) ->

            @$form = params.$form || null
            @model = params.model || null

            @$form.on "submit", _.bind (ev) ->

                formData = {}
                $dataInputs = @$form.find "input.data-input"

                _.each $dataInputs, _.bind (elInput) ->

                    key = $(elInput).attr("name").replace "-", ""

                    formData[key] = $(elInput).val()

                , @

                @.validate formData

                return false

            , @

        validate: (formData) ->

            @model.set formData

            if @model.isValid() then return true

            console.log  @model.validationError

            return false

    returnObj =

        init : (params)-> new Validator(params)

    return returnObj
