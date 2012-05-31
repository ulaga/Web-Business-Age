class Blog < ActiveRecord::Base
	belongs_to :user
	has_many :users, :through => :savedblogs
	has_many :savedblogs

end
