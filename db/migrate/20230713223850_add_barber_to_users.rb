class AddBarberToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :is_barber, :boolean
  end
end
