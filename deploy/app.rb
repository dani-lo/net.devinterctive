# encoding: UTF-8
require "rubygems"
require "bundler/setup"

# gems required for this project
require "sinatra"
require "haml"

class Devinteractive < Sinatra::Application

    @app_paths = {
      :routes => "/home/dani/dev/devinteractive.net/www/deploy/routes/"
    }

    class << self
      attr_accessor :app_paths
    end

    configure do

        use Rack::Session::Cookie, :key => "rack.session",
                                   :path => "/",
                                   :expire_after => 2592000,
                                   :secret => "a32vdswe87653aax"

        set :haml, {
            :format => :html5,
            :ugly => false,
            :attr_wrapper => "\""
        }
    end
end

require "models/init"

# initialise routes
require "routes/init"
require "helpers/init"