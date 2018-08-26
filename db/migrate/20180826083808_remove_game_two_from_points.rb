class RemoveGameTwoFromPoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :points, :game_two, :string
  end
end
