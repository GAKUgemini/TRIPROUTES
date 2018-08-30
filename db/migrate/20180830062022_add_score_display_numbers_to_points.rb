class AddScoreDisplayNumbersToPoints < ActiveRecord::Migration[5.2]
  def change
    add_column :points, :score_display_number, :integer, array: true
    serialize :points, Array
  end
end
