WBA::Application.routes.draw do  


  
#blogs controller
  resources :blogs
  match 'blogs/index' => 'blogs#index'
  match 'blogs/show/:id' => 'blogs#show'
#static controller
  match 'static/logout' => 'static#logout'
  match 'static/about' => 'static#about'
  match 'static/contactus' => 'static#contactus'
  match 'static/advertise' => 'static#advertise'
#savedblogs
  match 'savedblog/new/:id' => 'savedblog#new',:as => :saved_blog

  match 'savedblog/index' => 'savedblog#index'
#savedlistings
    match 'savedlisting/new/:id' => 'savedlisting#new',:as => :saved_listing
    match 'savedlisting/index' => 'savedlisting#index'
 

#all devise controllers

  devise_for :users, :controllers => {:registrations => "registrations", :session => "session"}
  match '/users/edit' => 'registrations#edit'
#home controller
  match 'home/home' => 'homes#home'
  match 'home/userhome' => 'homes#userhome'
  match 'home/advertiserhome' => 'homes#advertiserhome'
#listing controller
  match 'listing/new' => 'listing#new_listing'
  match 'listing/create' => 'listing#create_listing'
  match 'listing/show_listing/:id' => 'listing#show_listing'
  match 'listing/index' => 'listing#index'
  
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
#   root :to => redirect("/users/sign_in")
 root :to => 'homes#userhome'



  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
