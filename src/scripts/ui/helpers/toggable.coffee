define [], ->

    Toggable =  Backbone.View.extend

        el : ".btn-toggle"

        initialize : (params) ->

            return @.render

        render : ->

            @el.on "click", _.bind (ev)->

                $clicked = $(ev.currentTarget)
                $toggleTarget = $clicked.parent()
                                        .parent()
                                        .find "toggable-container"

                switch $toggleTarget.hasClass "off"

                    when true

                        $toggleTarget.removeClass("off")
                                     .addClass("on")

                    when false

                        $toggleTarget.removeClass("on")
                                     .addClass("off")

            , @

            return @

    returnObj =

        init : (params)-> new AkqaView(params)

    return returnObj