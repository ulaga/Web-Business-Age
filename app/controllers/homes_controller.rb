class HomesController < ApplicationController
  
before_filter :authenticate_user!

  def home
	
  end
	
  def userhome
	
	@list = Advsponsoredlisting.all
	@list = Advsponsoredlisting.paginate :page => params[:page], :per_page => 3
	@blog =Blog.all
	@blog = Blog.paginate :page => params[:page], :per_page => 3
 end

  def advertiserhome
	@list=Advsponsoredlisting.all
	@list = Advsponsoredlisting.paginate :page => params[:page], :per_page => 3
	@blog=Blog.all
	@blog = Blog.paginate :page => params[:page], :per_page => 3
  end
  def advertiser

	@ad=User.find(params[:id])
	if @ad.update_attributes(@ad.role = "advertiser")
	flash[:alert]="Your account has been upgraded to advertiser account!.."
	redirect_to home_advertiserhome_path
	end
end

end
