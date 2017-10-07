class MainController < ApplicationController
  def index
    @likes_count = Like.sum(:count)
  end
  def gallery
  end
  
  def like
    if @like = Like.find_by(:ip_adress => request.remote_ip)
      @like.count += 1
      @like.save
    else
      Like.create(:ip_adress => request.remote_ip,:count => 1)
    end
    respond_to do |format|
      format.js {render json: nil, status: :ok}
    end
  end
  
  
end
