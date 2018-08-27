class RemoveGameFinalOpponentFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_final_opponent, :string
  end
end
