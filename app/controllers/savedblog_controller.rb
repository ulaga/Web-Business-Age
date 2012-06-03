class SavedblogController < ApplicationController
	def new
	 current_user.savedblogs.create(:blog_id=>params[:id])
         redirect_to home_userhome_path
	end

	def show
		@s=Savedblog.find(params[:id])
	end
	def index
		c=current_user.id
		b_id= Savedblog.where("user_id = #{c}").map(&:blog_id)
		@blog=Blog.find(b_id)
	end
		
end

