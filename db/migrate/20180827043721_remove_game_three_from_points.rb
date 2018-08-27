class RemoveGameThreeFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_three, :string
  end
end
