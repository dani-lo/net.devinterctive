define [
    "models/akqa-contact",
    "ui/helpers/toggable",
    "util/validator"
    ], (ContactModel, ToggableHelper, ValidatorUtil)->

    AkqaView =  Backbone.View.extend

        el : "#akqa"

        initialize : (params) ->

            @toggable = ToggableHelper.init null

            @validator = ValidatorUtil.init
                model : ContactModel.init {validate : true}
                $form : $ ".form-validate"

            return @.render()

        render : ->

            return @

    returnObj =

        init : (params)-> new AkqaView(params)

    return returnObj