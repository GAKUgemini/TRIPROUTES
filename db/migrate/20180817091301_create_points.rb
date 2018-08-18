class CreatePoints < ActiveRecord::Migration[5.2]
  def change
    create_table :points do |t|
      t.text :game_one
      t.text :game_two
      t.text :game_three
      t.text :game_four
      t.text :game_five
      t.text :game_six
      t.text :game_final
      t.text :game_one_opponent
      t.text :game_two_opponent
      t.text :game_three_opponent
      t.text :game_four_opponent
      t.text :game_five_opponent
      t.text :game_six_opponent
      t.text :game_final_opponent

      t.timestamps
    end
  end
end
