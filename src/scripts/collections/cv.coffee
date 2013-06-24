define ["models/job"], (JobModel) ->

    Cv = Backbone.Collection.extend

        url : '/services/jobs'

        model : JobModel.init {}

    returnObj =

        init : (params)-> new Cv(params)

    return returnObj