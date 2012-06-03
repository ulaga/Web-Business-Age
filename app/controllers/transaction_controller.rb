class TransactionController < ApplicationController
before_filter :authenticate_user!
 def index
   @transaction=Transaction.all
 end

 def new
   @transaction=Transaction.new
 end
  
 def create
   p params[:id]
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
    :name     => "Nathan",
    :address1 => "No.7",
    :city     => "Tirunelveli",
    :state    => "Tamilnadu",
    :country  => "India",
    :zip      => "627006"
  } )   
   if response.success?
    @transaction.user_id=current_user.id
    @transaction.save
    puts "Transaction is complete!"
    flash[:notice] = "Thank you, Transaction is sucessfully completed"
    redirect_to home_advertiserhome_path
    end
  else
  flash[:notice] = "Error: Credit card is not valid."
  redirect_to home_advertiserhome_path
  end
 end
end
