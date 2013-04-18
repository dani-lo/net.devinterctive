define [], ->

    class Loader

        constructor: (params)->
            @name = params.name


    returnObj =

        init : (params)-> new Loader(params)

    return returnObj