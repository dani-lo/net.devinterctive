define ["collections/cv"], (CvCollection)->

    CvView =  Backbone.View.extend

        el : "#cv"

        initialize : (params) ->

            alert "oh nice"

            this.cv = CvCollection.init {}

            this.cv.fetch();

            return @.render()

        render : ->

            return @

    returnObj =

        init : (params)-> new CvView(params)

    return returnObj