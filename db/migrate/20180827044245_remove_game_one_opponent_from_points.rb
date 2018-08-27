class RemoveGameOneOpponentFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_one_opponent, :string
  end
end
