class TransactionController < ApplicationController
  before_filter :authenticate_user!
 def index
   @transaction=Transaction.all
 end

 def new
   @transaction=Transaction.new
 end
  
 def create
   $value
   p params[:id]
   $value= params[:id]
   @transaction = Transaction.new(params[:transaction])
   ActiveMerchant::Billing::Base.mode = :test
   gateway = ActiveMerchant::Billing::PaypalGateway.new(
        :login => "ulagan_1338626005_biz_api1.gmail.com",
        :password => "1338626040",
        :signature => "A0bMpIoSAT.bJRgWuGub.cv.O61tA1iCMTzjKKFVIR-k9pxD88u9h1gt"
   )
   credit_card = ActiveMerchant::Billing::CreditCard.new(
    :type                   => "#{params[:transaction][:card_type]}",
    :number                 => "#{params[:transaction][:card_number]}",
    :verification_value     => "#{params[:transaction][:card_verification]}",
    :month                   => "1",
    :year                   => "2017",
    :first_name             => "#{params[:transaction][:first_name]}",
    :last_name              => "#{params[:transaction][:last_name]}"
 
  )
  @amount="#{params[:transaction][:amount]}"
  if credit_card.valid?
  response = gateway.purchase(@amount.to_i,credit_card,:ip => "127.0.0.1", :billing_address => {
    :name     => "Bharani",
    :address1 => "No.11",
    :city     => "chennai",
    :state    => "Tamilnadu",
    :country  => "India",
    :zip      => "600059"
  } )   
   if response.success?
    @transaction.user_id=current_user.id
    @transaction.monitorsignage_id=$value
    @transaction.save
    puts "Transaction is complete!"
    @mycart=Mycart.find_by_monitorsignage_id($value)
    p @mycart
    @schedule=Schedule.new(params[:monitorsignage_id])
    @schedule.from_date=@mycart.from_date
    @schedule.to_date=@mycart.to_date
    @schedule.from_time=@mycart.from_time
    @schedule.to_time=@mycart.to_time
    @schedule.day=@mycart.day
    @schedule.monitorsignage_id=@mycart.monitorsignage_id
    @schedule.save
    @mycart.destroy
    flash[:notice] = "Thank you, Transaction is sucessfully completed"
    redirect_to '/home1/index'
    end
  else
    flash[:notice] = "Error: Credit card is not valid."
  redirect_to '/home1/index'
  end
 end
end
