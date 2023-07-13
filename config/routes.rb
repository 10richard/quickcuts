Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  get "pages/home"
  get "pages/contact"
  get "pages/about"

  resources :listings

  get "dashboard/main"
  authenticated(:user) do
    root to: "dashboard#main", as: :authenticated_root
  end
  root "pages#home"
end
