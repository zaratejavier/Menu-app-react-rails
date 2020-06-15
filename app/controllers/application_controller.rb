class ApplicationController < ActionController::API
  def index 
    render json: Menu.all
  end
end
