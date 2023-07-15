Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  get "pages/home"
  get "pages/contact"
  get "pages/about"

  resources :listings

  get "user/dashboard"
  get "user/listing"

  authenticated(:user) do
    root to: "user#dashboard", as: :authenticated_root
  end
  root "pages#home"
end
