class Transaction < ActiveRecord::Base
#relationship with
TYPE ={
    :visa=>"VISA",
    :mastercard=>"MASTER CARD",
    :americanexpress=>"AMERICAN EXPRESS"
    }
end
