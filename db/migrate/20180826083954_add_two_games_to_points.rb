class AddTwoGamesToPoints < ActiveRecord::Migration[5.2]
  def change
    add_column :points, :two_game, :string, array: true
    serialize :bands, Array
  end
end
