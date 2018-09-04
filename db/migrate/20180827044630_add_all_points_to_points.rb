class AddAllPointsToPoints < ActiveRecord::Migration[5.2]
  def change
    add_column :points, :all_points, :string, array: true
  end
end
