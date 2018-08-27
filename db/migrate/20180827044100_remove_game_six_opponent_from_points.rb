class RemoveGameSixOpponentFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_six_opponent, :string
  end
end
