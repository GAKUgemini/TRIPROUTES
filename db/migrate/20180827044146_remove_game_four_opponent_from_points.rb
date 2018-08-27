class RemoveGameFourOpponentFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_four_opponent, :string
  end
end
