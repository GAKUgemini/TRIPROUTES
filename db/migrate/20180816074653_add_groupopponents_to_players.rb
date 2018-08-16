class AddGroupopponentsToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :Group_opponent, :string
  end
end
