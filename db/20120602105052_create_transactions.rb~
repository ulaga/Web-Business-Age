class CreateTransactions < ActiveRecord::Migration
  def self.up
    create_table :transactions do |t|
	    t.string:card_type
	    t.string:card_number
	    t.date:card_date
	    t.string:card_verification
	    t.integer:user_id
	    t.integer:monitorsignage_id
	    t.integer:amount
	    t.string:first_name
	    t.string:last_name
	    t.integer:year
	    t.integer:order_id

      t.timestamps
    end
  end

  def self.down
    drop_table :transactions
  end
end
