class Listing < ApplicationRecord

    belongs_to :barber, class_name: 'User'
    
    has_many :services, dependent: :destroy
    accepts_nested_attributes_for :services,
    reject_if: proc { |attributes| attributes[:name].blank? || attributes[:price].blank? }

    validate :user_is_barber?
    validates :title, :barber_id, :services, presence: true

    def user_is_barber?
        #check if user is a barber
        #if not then user cannot create a listing
    end
end
