class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name
      t.decimal :price
      t.integer :listing_id

      t.timestamps
    end
  end
end
