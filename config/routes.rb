Rails.application.routes.draw do
  scope :api do 
    resources :birds
  end 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
