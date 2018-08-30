class RenameTwoGameColumnToPoints < ActiveRecord::Migration[5.2]
  def change
    rename_column :points, :two_game, :game_count
  end
end
