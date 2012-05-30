class CreateBlogs < ActiveRecord::Migration
  def self.up
    create_table :blogs do |t|
	t.string :title
	t.string :short_description
	t.text :description
	t.string :author
	t.integer :user_id
	t.date :date
      t.timestamps
    end
  end

  def self.down
    drop_table :blogs
  end
end
