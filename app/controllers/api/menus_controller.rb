class Api::MenusController < ApplicationController
  def index 
    render json: Menu.all
  end

  def create
    menu = Menu.new(item_params)
    if menu.save
      render json: menu
    else
      render json: {errors}
    end
  end
end
