class ApplicationController < ActionController::Base
  protect_from_forgery
include SimpleCaptcha::ControllerHelpers
def after_sign_out_path_for(resource_or_scope)
	static_logout_path
    end
end
