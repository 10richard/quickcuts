class Listing < ApplicationRecord

    belongs_to :barber, class_name: 'User'
    has_many :services, dependent: :destroy
    accepts_nested_attributes_for :services, allow_destroy: true

    validate :user_is_barber?
    validates :title, :barber_id, :services, presence: true

    def user_is_barber?
        #check if user is a barber
        #if not then user cannot create a listing
    end
end
