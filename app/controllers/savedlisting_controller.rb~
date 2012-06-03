class SavedlistingController < ApplicationController

	def new
	 current_user.savedlistings.create(:advsponsoredlistings_id=>params[:id])
         redirect_to home_userhome_path
	end

	def show
		@s=Savedlisting.find(params[:id])
	end
	def index
		c=current_user.id
		l_id= Savedlisting.where("user_id = #{c}").map(&:advsponsoredlistings_id)
		@list=Advsponsoredlisting.find(l_id)

	end
end
