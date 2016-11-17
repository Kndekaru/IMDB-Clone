Rails.application.routes.draw do
  root 'imdb#index'
  get '/imdb/search/:text', to: 'imdb#search', as: 'something'
  get '/imdb/search/details/:text', to: 'imdb#search_details', as: 'somethingelse'
end
