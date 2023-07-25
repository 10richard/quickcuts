class Listing < ApplicationRecord

    belongs_to :barber, class_name: 'User'

    validates :user_is_barber?

    def user_is_barber?
        #check if user is a barber
        #if not then user cannot create a listing
    end
end
