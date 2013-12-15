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
    #params do
    #  requires :word, type: String
    #end
    get do
      word = params[:word]
      if word != nil
        data = Dictionary.get_random_en_word(word)
      else
        word = Dictionary.get_word_in_list()
        data = Dictionary.get_random_en_word(word)
      end
    end
  end

end