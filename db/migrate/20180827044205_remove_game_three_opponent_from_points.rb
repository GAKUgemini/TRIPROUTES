class RemoveGameThreeOpponentFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_three_opponent, :string
  end
end
