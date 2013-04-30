test "Setup qunit test", ->

    ok 1 is 1, "Passed .."

test "Loader module loads", ->

    require ["util/loader"], (Loader) ->

        loader = Loader.init {}

        loader.addClass $("body"), "tests/require-test-module"

        ok loader.batchLoad(), "Passed .."

test "Loader module loads with parameters", ->

    require ["util/loader"], (Loader) ->

        loader = Loader.init {}

        loader.addClass $("body"), "tests/require-test-module", {foo : "bar"}

        ok loader.batchLoad(), "Passed .."