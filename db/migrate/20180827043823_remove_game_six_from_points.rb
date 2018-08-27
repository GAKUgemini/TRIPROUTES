class RemoveGameSixFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_six, :string
  end
end
