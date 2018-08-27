class AddAllPointsToPoints < ActiveRecord::Migration[5.2]
  def change
    add_column :points, :all_points, :string, array: true
    serialize :bands, Array
  end
end
