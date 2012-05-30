class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
#relationship for user and adv sponsored listing	
	has_many :advsponsoredlistings

#relationship with blog
	has_many :blog

#relationship with mysavedblog
	has_many :blogs, :through => :savedblogs 
	has_many :savedblogs
#relatioship with mysavedlisting
	has_many :advsponsoredlistings, :through => :savedlistings
	has_many :savedlistings

apply_simple_captcha

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :firstname, :lastname, :g_location, :level_in_business, :area_of_interest, :linkedin_url, :twitter_url, :social_url, :contribution, :alternate_email, :company, :address, :city, :state, :country, :phone, :fax, :company_site

end
