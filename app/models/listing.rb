class Listing < ApplicationRecord

    belongs_to :barber, class_name: 'User'
    
    has_many :services, dependent: :destroy
    accepts_nested_attributes_for :services, allow_destroy: true,
    reject_if: :reject_service

    validate :user_is_barber?
    validates :title, :barber_id, :services, presence: true

    def user_is_barber?
        #check if user is a barber
        #if not then user cannot create a listing
    end

    def reject_service(attributes)
        if attributes[:name].blank? || attributes[:price].blank?
            if attributes[:id].present?
                attributes.merge!({:_destroy => 1})
                false
            else
                true
            end
        end
    end
end
