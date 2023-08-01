Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  devise_scope :user do  
    get '/users/sign_out' => 'devise/sessions#destroy'     
  end

  get "pages/home"
  get "pages/contact"
  get "pages/about"

  resources :listings

  get "user/dashboard"

  authenticated(:user) do
    root to: "user#dashboard", as: :authenticated_root
  end
  root "pages#home"
end
