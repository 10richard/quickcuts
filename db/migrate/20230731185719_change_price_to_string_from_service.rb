class ChangePriceToStringFromService < ActiveRecord::Migration[7.0]
  def change
    change_table :services do |table|
      table.change :price, :string
    end
  end
end
