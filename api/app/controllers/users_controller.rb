class UsersController < ApplicationController
  before_action :authorized, only: [:show]

  def new; user = User.new

  def create
    @user = User.create(user_params)
    if user.valid?
      user.save
      redirect_to @user
    else  
      redirect :new
    end
  end

  def show; user = User.find(params[:id])

  def signup 
    user = Client.new(params[:client])
    if user.save; redirect_to client
    else
      # This line overrides the default rendering behavior, which
      # would have been to render the "create" view.
      render "signin#new"
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

end
