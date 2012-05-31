class SavedlistingController < ApplicationController

	def new
	 current_user.savedlistings.create(:advsponsoredlistings_id=>params[:id])
         redirect_to home_userhome_path
	end

	def show
		@s=Savedlisting.find(params[:id])
	end
	def index
		@sa=Savedlisting.find_all_by_user_id(current_user.id)
		@sa.each do |t|
		#@temp=Advsponsoredlisting.find_all_by_id(t.advsponsoredlistings_id)
		@temp = Advsponsoredlisting.find_all_by_id(t.advsponsoredlistings_id)
		end

	end
end
