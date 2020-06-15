class Api::MenusController < ApplicationController
  def index 
    render json: Menu.all
  end

  def create
    menu = Menu.new(item_params)
    if menu.save
      render json: menu
    else
      render json: {errors: menu.errors}, status: :unproccessable_entity
    end
  end

  private 
  def item_params
    params.require(:menu).permit(:name)
  end
end
