  
  $(document).ready(function() {
    $("h2").text("稼働中");
    var gameset = "off";
    var flg = "off"; 
    var game_count_cel = [1,2,3,4,5,6,7];
    var point_count_cel = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    var points = 0;
    var opponent_points = 0;
    var i = 0;
    var j = 0;
    var first_click = "off";
    var opponent_first_click = "off";
    var button_flg = "off";
    $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', 'rgba(150, 246, 253, 0.993)');
    $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ff84d0'); 
    $(".next-button").click(function(){
        $(".keep-button").show();
        var j_increment = 1;
        j = j+j_increment;
        button_flg = "off";
        $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', 'rgba(150, 246, 253, 0.993)');
        $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ff84d0');
    });
    $(".save-button").click(function(){
        if(points == 4 && opponent_points == 0 || points == 0 && opponent_points == 4 ){
            var i_increment = 1;
            i = i+i_increment;
            j = 0;
        }
        else if(points == 4 && opponent_points == 1 || points == 1 && opponent_points == 4){
            var i_increment = 1;
            i = i+i_increment;
            j = 0;
        }
        else if(points == 2 && opponent_points == 4 || points == 4 && opponent_points == 2){
            var i_increment = 1;
            i = i+i_increment;
            j = 0;
        }
        else if(points >= 3 && opponent_points >= 3 && (points - opponent_points == 2 || opponent_points - points == 2)){
            var i_increment = 1;
            i = i+i_increment;
            j = 0;
        }
        $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ffffff');
        $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ffffff');
        first_click = "off";
        opponent_first_click = "off";
        button_flg = "on";
        console.log(button_flg);
        $(".next-button").show();
        $(".back-button").show();
        $(".keep-button").hide();
        $(".save-button").hide();
    });

    $(".keep-button").click(function(){
        $(".next-button").hide();
        $(".back-button").hide();
        $(".save-button").show();
        if(flg == "off"){
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).text("○");
            flg = "on";
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).addClass("circle");
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).text("×");
            points = $(".circle").length;
            if(first_click == "off"){
                $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("opponent_circle");
                opponent_points = $(".opponent_circle").length;
                $(".points").text(points);
                $(".opponent_points").text(opponent_points);
                first_click = "on";
            }
            else{
                $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("opponent_circle");
                opponent_points = $(".opponent_circle").length;
                $(".points").text(points);
                $(".opponent_points").text(opponent_points);
            }
        }else{
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).text("×");
            flg = "off";
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).text("○");
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).addClass("opponent_circle");
            opponent_points = $(".opponent_circle").length;
            if(opponent_first_click == "off"){
                $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("circle");
                points = $(".circle").length;
                $(".points").text(points);
                $(".opponent_points").text(opponent_points);
                opponent_first_click = "on";
            }
            else{
                $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("circle");
                points = $(".circle").length;
                $(".points").text(points);
                $(".opponent_points").text(opponent_points);
            }
        }
    });
    
    $(".select_service").click(function(){
        $(".select_recive").hide();
        $(".opponent_select_service").hide();
    });

    $(".next-button").hide();
    $(".back-button").hide();
    $(".save-button").hide();
  });