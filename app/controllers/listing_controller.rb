class ListingController < ApplicationController
uses_tiny_mce :options => {
                            :theme => 'advanced',
                            :theme_advanced_resizing => true,
                            :theme_advanced_resize_horizontal => false,
                            :plugins => %w{ table fullscreen }
                          }
def index
  @list = Advsponsoredlisting.all
  @list = Advsponsoredlisting.paginate :page => params[:page], :per_page => 3
end

def new_listing
  @list = Advsponsoredlisting.new

end

def create_listing
  @list = Advsponsoredlisting.new(params[:advsponsoredlisting])
 	 if @list.save  
		redirect_to home_userhome_path
	end  
end
def show_listing
   @list = Advsponsoredlisting.find(params[:id])

end
end
