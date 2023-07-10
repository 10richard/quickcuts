class PagesController < ApplicationController
    before_action :authenticate_user!, only: [:user_dashboard]

    def home
    end

    def user_dashboard
        @user = User.find(current_user.id)
    end
end
