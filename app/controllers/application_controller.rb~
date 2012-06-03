class ApplicationController < ActionController::Base
  protect_from_forgery
include SimpleCaptcha::ControllerHelpers
def after_sign_out_path_for(resource_or_scope)
	static_logout_path
    end
def after_sign_in_path_for(resource_or_scope)
	if user_signed_in? and current_user.role=="user"
		home_userhome_path
	else
		home_advertiserhome_path
	end
	
end
end
