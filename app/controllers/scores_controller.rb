class ScoresController < ApplicationController
    def new
        @player = Player.new 
    end

    def create
        @player = Player.new(player_params)
        if @player.save
            redirect_to scores_display_path, notice: '登録が完了しました'
        else
            flash.now[:alert] = "登録に失敗しました"
            render :new
        end
    end

    def display
        @player = Player.last
        @point = Point.new
        gon.point_instance = Point.new
        gon.points = []
        gon.opponent_points = []
    end

    def update
        @point = Point.new
        @point.two_game = (params[:content])
        if @point.save
            render :action => "display"
        else
            render :root
        end
        
    end

    private
    def player_params
        params.require(:player).permit(:baseline_player, :net_player,:baseline_player_opponent,:net_player_opponent,:Group_opponent,:Group,:Games_id)
    end

end
