require 'rubygems'
require 'sinatra'

class Stream
  def each
    100.times { |i| yield "#{i}\n" }
  end
end

get('/') { Stream.new }

get '/stuff' do
    'hi stuff'
end

get "/entries" do
    arrEntries = Dir.entries("/home/dani")
    #'hi'
    arrEntries[0]
end