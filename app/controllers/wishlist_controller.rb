class WishlistController < ApplicationController
	
#To list the Wishlist of the particular user	
def list
	#~ @w=Wishlist.new
	#~ @w=Wishlist.find_all_by_user_id(current_user.id)
	#~ @wish=Vendor.new
	#~ @w.each do |x|
	#~ @wish=Vendor.find_all_by_id(x.vendor_id)
	e=current_user.id
	w= Wishlist.where("user_id = #{e}").map(&:vendor_id)
	@wish=Vendor.find(w)

  
end
#User can create the new wishlist
def new
	  @all=Wishlist.new
	  @all.vendor_id=params[:id]
	  @all.user_id=current_user.id
	  if @all.save
		  redirect_to wishlist_list_path
	  end
  end 
  #User can destroy the wishlist
 def destroy
    @w = Wishlist.find_by_vendor_id(params[:id])
    if @w.destroy
	    redirect_to  wishlist_list_path
   end
    
  end
end


  
 

