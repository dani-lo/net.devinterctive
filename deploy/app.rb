# encoding: UTF-8
require "rubygems"
require "bundler/setup"

# gems required for this project
require "sinatra"
require "haml"

use Rack::Session::Pool, :expire_after => 259200

set :haml, {
            #:format => :html5,
            :ugly => false,
            :attr_wrapper => "\""
        }

class Devinteractive < Sinatra::Application

    @app_paths = {
      :routes => "/home/dani/dev/devinteractive.net/www/deploy/routes/"
    }

    class << self
      attr_accessor :app_paths
    end

    configure do


        #use Rack::Session::Cookie, :key => "rack.session",
        #                           :path => "/",
        #                           :expire_after => 2592000,
        #                           :secret => "a32vdswe87653aax"


    end
end

require_relative "routes/init"
require_relative "models/init"
require_relative "helpers/init"