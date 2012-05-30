class CreateSavedlistings < ActiveRecord::Migration
  def self.up
    create_table :savedlistings do |t|
	t.integer :user_id
	t.integer :advsponsoredlistings_id

      t.timestamps
    end
  end

  def self.down
    drop_table :savedlistings
  end
end
