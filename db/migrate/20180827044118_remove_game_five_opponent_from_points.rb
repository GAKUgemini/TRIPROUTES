class RemoveGameFiveOpponentFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_five_opponent, :string
  end
end
