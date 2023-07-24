Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  devise_scope :user do  
    get '/users/sign_out' => 'devise/sessions#destroy'     
  end

  resources :listings

  authenticated(:user) do
    root to: "user#dashboard", as: :authenticated_root
  end
  get "user/listings"

  get "pages/contact"
  get "pages/about"
  root "pages#home"
end
