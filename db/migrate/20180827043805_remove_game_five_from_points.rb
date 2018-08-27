class RemoveGameFiveFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_five, :string
  end
end
