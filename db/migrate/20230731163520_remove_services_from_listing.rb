class RemoveServicesFromListing < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :services, :string
  end
end
