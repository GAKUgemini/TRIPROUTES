class ScoresController < ApplicationController
    def new
        @player = Player.new 
    end

    def create
        @player = Player.new(player_params)
        if @player.save
            redirect_to root_path, notice: '登録が完了しました'
        else
            flash.now[:alert] = "登録に失敗しました"
            render :new
        end

    end

    private
    def player_params
        params.require(:player).permit(:baseline_player, :net_player,:baseline_player_opponent,:net_player_opponent)
    end
end
