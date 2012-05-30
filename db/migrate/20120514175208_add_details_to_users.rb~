class AddDetailsToUsers < ActiveRecord::Migration
  def self.up

	add_column :users, :firstname, :string
	add_column :users, :lastname, :string
	add_column :users, :g_location, :string
	add_column :users, :level_in_business, :string
	add_column :users, :area_of_interest, :string
	add_column :users, :linkedin_url, :string
	add_column :users, :twitter_url, :string
	add_column :users, :social_url, :string
	add_column :users, :contribution, :boolean
	add_column :users, :alternate_email, :string
	add_column :users, :company, :string
	add_column :users, :address, :string
	add_column :users, :city, :string
	add_column :users, :state, :string
	add_column :users, :country, :string
	add_column :users, :phone, :integer
	add_column :users, :fax, :integer
	add_column :users, :company_site, :string
  end

  def self.down

	remove_column :users, :firstname
	remove_column :users, :lastname
	remove_column :users, :g_location
	remove_column :users, :level_in_business
	remove_column :users, :area_of_interest
	remove_column :users, :linkedin_url
	remove_column :users, :twitter_url
	remove_column :users, :social_url
	remove_column :users, :contribution
	remove_column :users, :alternate_email
	remove_column :users, :company
	remove_column :users, :address
	remove_column :users, :city
	remove_column :users, :state
	remove_column :users, :country
	remove_column :users, :phone
	remove_column :users, :fax
	remove_column :users, :company_site
  end
end
