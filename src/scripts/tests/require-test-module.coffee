define [], ->

    class RequireTestModule

        constructor: (params)->

            @loaded = params.loaded or null

        isLoaded : ->

            return @loaded


    returnObj =

        init : (params)-> new RequireTestModule(params)

    return returnObj