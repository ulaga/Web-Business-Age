class SavedblogController < ApplicationController
	def new
	 current_user.savedblogs.create(:blog_id=>params[:id])
         redirect_to home_userhome_path
	end

	def show
		@s=Savedblog.find(params[:id])
	end
	def index
		@b=Savedblog.find_all_by_user_id(current_user.id)
		@b.each do |t|
		@blog=Blog.find_all_by_id(t.blog_id)
		end
	end
		
end

