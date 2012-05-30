class CreateAdvsponsoredlistings < ActiveRecord::Migration
  def self.up
    create_table :advsponsoredlistings do |t|
	t.string :title
	t.string :shortdescription
	t.text :description
	t.string :activatedform
	t.string :listingtypes
	t.string :georelevance
	t.string :userlevel
	t.string :sponsored_item1
	t.string :sponsored_item2
	t.string :category
	t.string :conten_type

      t.timestamps
    end
  end

  def self.down
    drop_table :advsponsoredlistings
  end
end
