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
        gon.score_display_number = []
    end

    def update
        @point = Point.new
        @point.all_points = (params[:my_all_opint])
        @point.all_points_opponent = (params[:opponent_all_point])
        @point.score_display_number = (params[:score_display_numbers])
        @point.game_count = (params[:game_count])
        @point.save
    end

    def result
        @point_last = Point.last
        @point = Point.last(@point_last.game_count)
        gon.game_count = @point_last.game_count
        gon.game_count_array = []
        gon.score_display_number = []
        gon.all_points = []
        gon.all_points_opponent = []
        point_index = 2
        point_flg = @point_last.all_points.length-1
        flg = @point[gon.game_count.to_i-1].game_count.to_i
        while @point_last.game_count.to_i >= 0  do
            gon.game_count_array.unshift(@point[@point_last.game_count.to_i])
            @point_last.game_count = @point_last.game_count.to_i - 1
        end
        while flg >= 1 do
            gon.score_display_number.push(@point[gon.game_count.to_i-1].score_display_number)
            flg = flg-1
        end
        while point_flg >= point_index do
            gon.all_points.push(@point_last.all_points[point_index])
            gon.all_points_opponent.push(@point_last.all_points_opponent[point_index])
            point_index = point_index+5
        end
        @player = Player.last
    end

    def index 
    end

    private
    def player_params
        params.require(:player).permit(:baseline_player, :net_player,:baseline_player_opponent,:net_player_opponent,:Group_opponent,:Group,:Games_id)
    end

end
