class Transaction < ActiveRecord::Base
	belongs_to :user
	TYPE ={
    :visa=>"VISA",
    :mastercard=>"MASTER CARD",
    :americanexpress=>"AMERICAN EXPRESS"
    }
end
