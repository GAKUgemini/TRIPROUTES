class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    
    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end
    
    def logged_in?
        !current_user.nil?
    end
end
