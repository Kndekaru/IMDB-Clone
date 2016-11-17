class ImdbController < ApplicationController

  def index

  end

  def movie_api(name)
      require 'json'
      base = "http://www.omdbapi.com/?s=" + name
      json_string_response = open(base).read
      ruby_hash_response = JSON.parse(json_string_response)
  end

  def search
      render json: movie_api(params[:text])["Search"]
  end

  def search_details
    require 'json'
    base = "http://www.omdbapi.com/?t=" + params[:text]
    json_string_response = open(base).read
    ruby_hash_response = JSON.parse(json_string_response)
    render json: ruby_hash_response
  end
end
