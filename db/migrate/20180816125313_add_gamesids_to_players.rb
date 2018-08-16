class AddGamesidsToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :Games_id, :integer
  end
end
