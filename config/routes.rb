Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  get 'pages/home'
  get 'pages/user_dashboard'

  root 'pages#home'
end
