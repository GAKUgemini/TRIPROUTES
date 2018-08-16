class ScoresController < ApplicationController
    def new
        @player =Player.new 
    end
    def create
    end
end
