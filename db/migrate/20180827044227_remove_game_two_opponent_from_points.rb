class RemoveGameTwoOpponentFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_two_opponent, :string
  end
end
