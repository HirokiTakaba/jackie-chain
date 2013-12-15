require 'json'
require 'dictionary'
include Dictionary

class API < Grape::API

  prefix "api"
  version 'v1', :using => :path
  format :json

  resource "test" do
    # http://localhost:3000/api/v1/test
    desc "test"
    get do
      {hello:"world"}
    end
  end

  resource "next" do
    # http://localhost:3000/api/v1/next
    desc "next"
    get do
      data = Dictionary.get_random_en_word("next")
      JSON.generate(data)
    end
  end

end