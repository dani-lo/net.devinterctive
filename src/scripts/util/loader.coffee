define [], ->

    settings =

        loadables : []

    class Loader

        constructor: (params)->


        loadClass : ($selector, classPath, params) ->

            $selector.length and require [classPath], _.bind (module) ->

                params and module.init(params)

            , @

        addClass : ($selector, classPath, params) ->

            settings.loadables.push
                $selector : $selector
                classPath : classPath
                params : params or null

        batchLoad : (flag) ->

            for loadable in settings.loadables

                @loadClass loadable.$selector, loadable.classPath, loadable.params


    returnObj =

        init : (params)-> new Loader(params)

    return returnObj