Rails.application.routes.draw do
   get 'scores/new'
   post 'scores/create'
   get 'scores/display'
   post 'scores/update'
   get 'favorites/index'
   get 'scores/index'
   get 'scores/result'
   
   get 'sessions/new'
   
   root 'pages#index'
   get 'pages/help'
   
   
   get '/login', to: 'sessions#new'
   post '/login', to: 'sessions#create'
   delete '/logout', to: 'sessions#destroy'
   
   resources 'users'
   resources 'topics'
   post '/favorites', to: 'favorites#create'
   
   get '/favorites', to: 'favorites#index'
  
  #For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
