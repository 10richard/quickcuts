class Listing < ApplicationRecord

    belongs_to :barber, class_name: 'User'
    
    has_many_attached :pictures

    has_many :services, dependent: :destroy
    accepts_nested_attributes_for :services, allow_destroy: true,
    reject_if: :reject_service

    validate :user_is_barber?
    validates :title, :barber_id, :services, :pictures, presence: true

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

    def pictures_as_thumbnails
        pictures.map do |p|
            p.variant(resize_to_limit: [750, 750]).processed
        end
    end
end
