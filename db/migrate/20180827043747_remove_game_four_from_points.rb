class RemoveGameFourFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_four, :string
  end
end
