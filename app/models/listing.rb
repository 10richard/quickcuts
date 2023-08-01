class Listing < ApplicationRecord

    belongs_to :barber, class_name: 'User'
    has_many :services, dependent: :destroy
    accepts_nested_attributes_for :services

    validate :user_is_barber?
    validates :title, :barber_id, :services, presence: true

    def user_is_barber?
        #check if user is a barber
        #if not then user cannot create a listing
    end

    def services_attributes=(services_attributes)
        services_attributes.each do |i, s_attributes|
            if !s_attributes[:name].blank? && !s_attributes[:price].blank?
                self.services.build(s_attributes)
            end
        end
    end
end
