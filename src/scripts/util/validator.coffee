define ["hgn!tpl/akqa/contact-error"], (ContactErrorTpl)->

    class Validator

        constructor: (params) ->

            @$form = params.$form or null
            @model = params.model or null

            @$errorTpl = null

            @$form.on "submit", _.bind (ev) ->

                formData = {}
                $dataInputs = @$form.find "input.data-input"

                if @$errorTpl then @$errorTpl.remove()

                @$errorTpl = null

                _.each $dataInputs, _.bind (elInput) ->

                    key = $(elInput).attr("name").replace "-", ""

                    formData[key] = $(elInput).val()

                , @

                return @.validate formData

            , @

        validate: (formData) ->

            @model.set formData

            if @model.isValid() then return true

            @display  @model.aErrors

            return false

        display:  (aErrors) ->

            @$errorTpl = $ ContactErrorTpl aErrors : aErrors

            @$form.prepend @$errorTpl

            return @

    returnObj =

        init : (params)-> new Validator(params)

    return returnObj
