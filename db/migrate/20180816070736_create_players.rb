class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :baseline_player
      t.string :net_player
      t.string :baseline_player_opponent
      t.string :net_player_opponent

      t.timestamps
    end
  end
end
