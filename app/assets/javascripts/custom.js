  
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
    var select_flg = "off";
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

    $(".game-button").click(function(){
        $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ffffff');
        $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ffffff');
        var i_increment = 1;
            i = i+i_increment;
            j = 0;
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', 'rgba(150, 246, 253, 0.993)');
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ff84d0');
            first_click = "off";
            opponent_first_click = "off";
            $(".game-button").hide();
            $(".keep-button").show();
    });

    $(".save-button").click(function(){
        if(points == 4 && opponent_points == 0 || points == 0 && opponent_points == 4 || points == 4 && opponent_points == 1 || points == 1 && opponent_points == 4 || points == 2 && opponent_points == 4 || points == 4 && opponent_points == 2 || points >= 3 && opponent_points >= 3 && (points - opponent_points == 2 || opponent_points - points == 2)){
            $(".game-button").show();
            $(".next-button").hide();
            $(".back-button").hide();
            $(".keep-button").hide();
            $(".save-button").hide();
        }
        else{
        $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ffffff');
        $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ffffff');
        first_click = "off";
        opponent_first_click = "off";
        $(".next-button").show();
        $(".back-button").show();
        $(".keep-button").hide();
        $(".save-button").hide();
        if(flg == "on"){
            gon.points.push("○")
            gon.opponent_points.push("×")
        }
        if(flg == "off"){
            gon.points.push("×")
            gon.opponent_points.push("○")
        }
        }
        console.log(gon.points);
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
        $(".select_service").css('background', '#7272729d');
        $(".opponent_select_recive").css('background', '#7272729d');
        $(".select_recive").css('background', '#ffffff');
        $(".opponent_select_service").css('background', '#ffffff');
        $(".select_recive2").css('background', '#7272729d');
        $(".select_service2").css('background', '#ffffff');
        $(".select_service3").css('background', '#7272729d');
        $(".select_recive3").css('background', '#ffffff');
        $(".select_recive4").css('background', '#7272729d');
        $(".select_service4").css('background', '#ffffff');
        $(".select_service5").css('background', '#7272729d');
        $(".select_recive5").css('background', '#ffffff');
        $(".select_recive6").css('background', '#7272729d');
        $(".select_service6").css('background', '#ffffff');
        $(".select_service7").css('background', '#7272729d');
        $(".select_recive7").css('background', '#ffffff');
        $(".opponent_select_service2").css('background', '#7272729d');
        $(".opponent_select_recive2").css('background', '#ffffff');
        $(".opponent_select_recive3").css('background', '#7272729d');
        $(".opponent_select_service3").css('background', '#ffffff');
        $(".opponent_select_service4").css('background', '#7272729d');
        $(".opponent_select_recive4").css('background', '#ffffff');
        $(".opponent_select_recive5").css('background', '#7272729d');
        $(".opponent_select_service5").css('background', '#ffffff');
        $(".opponent_select_service6").css('background', '#7272729d');
        $(".opponent_select_recive6").css('background', '#ffffff');
        $(".opponent_select_recive7").css('background', '#7272729d');
        $(".opponent_select_service7").css('background', '#ffffff');
    });

    $(".select_recive").click(function(){
        $(".select_recive").css('background', '#7272729d');
        $(".select_service").css('background', '#ffffff');
        $(".opponent_select_service").css('background', '#7272729d');
        $(".opponent_select_recive").css('background', '#ffffff');
        $(".select_recive2").css('background', '#ffffff');
        $(".select_service2").css('background', '#7272729d');
        $(".opponent_select_service2").css('background', '#ffffff');
        $(".opponent_select_recive2").css('background', '#7272729d');
        $(".select_recive3").css('background', '#7272729d');
        $(".select_service3").css('background', '#ffffff');
        $(".opponent_select_service3").css('background', '#7272729d');
        $(".opponent_select_recive3").css('background', '#ffffff');
        $(".select_recive4").css('background', '#ffffff');
        $(".select_service4").css('background', '#7272729d');
        $(".opponent_select_service4").css('background', '#ffffff');
        $(".opponent_select_recive4").css('background', '#7272729d');
        $(".select_recive5").css('background', '#7272729d');
        $(".select_service5").css('background', '#ffffff');
        $(".opponent_select_service5").css('background', '#7272729d');
        $(".opponent_select_recive5").css('background', '#ffffff');
        $(".select_recive6").css('background', '#ffffff');
        $(".select_service6").css('background', '#7272729d');
        $(".opponent_select_service6").css('background', '#ffffff');
        $(".opponent_select_recive6").css('background', '#7272729d');
        $(".select_recive7").css('background', '#7272729d');
        $(".select_service7").css('background', '#ffffff');
        $(".opponent_select_service7").css('background', '#7272729d');
        $(".opponent_select_recive7").css('background', '#ffffff');
    });



    $(".next-button").hide();
    $(".back-button").hide();
    $(".save-button").hide();
    $(".game-button").hide();
  });