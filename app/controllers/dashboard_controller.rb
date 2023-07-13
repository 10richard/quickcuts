class DashboardController < 
    before_action :authenticate_user!

    def main
        @user = User.find(current_user.id)
    end
end
