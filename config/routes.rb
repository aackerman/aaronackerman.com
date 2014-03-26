AaronackermanCom::Application.routes.draw do

  resources :posts, only: [:show]
  root to: 'home#index'
end
