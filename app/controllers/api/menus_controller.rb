class Api::MenusController < ApplicationController
  def index
    render json: Menu.all
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }, status: :unprocessable_entity
    end
  end

  # def update
  #   menu = Item.find(params[:id])
  #   item.update(complete: !item.complete)
  #   render json: item
  # end

  def destroy
    render json: Menu.find(params[:id]).destroy
  end

  private

  def menu_params
    params.require(:menu).permit(:name)
  end
end