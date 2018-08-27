class RemoveGameOneFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_one, :string
  end
end
