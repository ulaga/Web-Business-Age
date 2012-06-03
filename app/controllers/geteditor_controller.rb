class GeteditorController < ApplicationController
def new
	@e=Editor.new
end
def create
	@e=Editor.new(params[:editor])
puts "============================================================================="
puts @e.inspect
puts "============================================================================="
	@e.user_id=current_user.id
	if @e.save
	 redirect_to cont_path
	end
		
end
def cont
end

end
