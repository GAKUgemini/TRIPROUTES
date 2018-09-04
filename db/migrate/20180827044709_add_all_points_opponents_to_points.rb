class AddAllPointsOpponentsToPoints < ActiveRecord::Migration[5.2]
  def change
    add_column :points, :all_points_opponent, :string, array: true
  end
end
