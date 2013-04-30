=begin
%w{
    header
}.each do |helper| require_relative helper end


Devinteractive.helpers (
    Header
)
=end

module FooUtils

    def determine_body_class

        clz = []

        clz.push "homepage"
        clz.push "homepage test"

        return "cust"
    end

    def determine_header

        haml :"partials/headers/default"
    end
end

module BarUtils
    def bar
        "barbar"
    end
end

helpers FooUtils, BarUtils