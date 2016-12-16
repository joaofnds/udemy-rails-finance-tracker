Rails.application.routes.draw do
  devise_for :users, :controller => {:registrations => "user/registrations"}
  resources :user_stocks, except: [:show, :edit, :update]
	resources :user, only: [:show]
	resources :friendships
	root 'welcome#index'
	get 'my_portfolio', to: 'users#my_portfolio'
	get 'search_stocks', to: 'stocks#search'
	get 'my_friends', to: 'users#my_friends'
	get 'search_friends', to: 'users#search'
	post 'add_friend', to: 'user#add_friend'
end
