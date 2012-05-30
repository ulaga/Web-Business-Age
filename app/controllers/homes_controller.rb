class HomesController < ApplicationController
  def home
	
  end
	
  def userhome
	@list = Advsponsoredlisting.first(5)
	@blog =Blog.first(5)
	
  end

  def advertiserhome
  end

end
