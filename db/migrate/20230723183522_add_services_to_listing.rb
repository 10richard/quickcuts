class AddServicesToListing < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :services, :string, array: true
  end
end
