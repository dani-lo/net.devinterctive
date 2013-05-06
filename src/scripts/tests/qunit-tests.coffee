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

test "AKQA model validates - wrong data", ->

    require ["models/akqa-contact"], (ContactModel) ->

    	testData =
    		contactname : "foo"
    		contactemail : "bar"
    	model = ContactModel.init {validate : true}
    	
    	model.set testData

    	ok !model.isValid(), "Passed .."

test "AKQA model validates - correct data", ->

    require ["models/akqa-contact"], (ContactModel) ->

    	testData =
    		contactname : "foo"
    		contactemail : "bar@baz.com"
    	model = ContactModel.init {validate : true}
    	
    	model.set testData

    	ok model.isValid(), "Passed .."

test "AKQA toggler works", ->

	$toggleBtn = $ "#btn-toggle-test"

	$toggleBtn.trigger "click"

	$toggleTarget = $toggleBtn.parent()
                              .parent()
                              .find ".toggable-container"
	
	result = $toggleTarget.hasClass "off"
	
	ok result, "Passed .."