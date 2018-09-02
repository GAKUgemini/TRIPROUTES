  
  $(document).ready(function() {
    $("h2").text("稼働中");
    var gameset = "off";
    var flg = "off"; 
    var game_count_cel = [1,2,3,4,5,6,7,8];
    var point_count_cel = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    var points = 0;
    var opponent_points = 0;
    var i = 0;
    var j = 0;
    var first_click = "off";
    var opponent_first_click = "off";
    var select_flg = "off";
    var game_points = [];
    var opponent_game_points = [];
    var game_count = 0;
    var opponent_game_count = 0;
    var display_index = 0;
    
    $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', 'rgba(150, 246, 253, 0.993)');
    $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ff84d0'); 
    $(".next-button").click(function(){
        $(".keep-button").show();
        var j_increment = 1;
        j = j+j_increment;
        button_flg = "off";
        $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', 'rgba(150, 246, 253, 0.993)');
        $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).css('background', '#ff84d0');
        $(".next-button").hide();
        $(".back-button").hide();
    });

    $(".game-button").click(function(){
        if(points == 4 && opponent_points == 0){
            game_count = game_count + 1;
            game_points.push(points);
            opponent_game_points.push(opponent_points);
            while(j > -1){
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("opponent_circle");
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("circle");
            var j_decrement = 1;
            j = j-j_decrement;
            }
            sum = points+opponent_points
            gon.score_display_number.push(sum);
            score_display_number = gon.score_display_number;
        }
        else if(points == 0 && opponent_points == 4){
            opponent_game_count = opponent_game_count + 1;
            game_points.push(points);
            opponent_game_points.push(opponent_points);
            while(j > -1){
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("opponent_circle");
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("circle");
            var j_decrement = 1;
            j = j-j_decrement;
            }
            sum = points+opponent_points
            gon.score_display_number.push(sum);
            score_display_number = gon.score_display_number;
        }
        else if(points == 4 && opponent_points == 1){
            game_count = game_count + 1;
            game_points.push(points);
            opponent_game_points.push(opponent_points);
            while(j > -1){
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("opponent_circle");
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("circle");
            var j_decrement = 1;
            j = j-j_decrement;
            }
            sum = points+opponent_points
            gon.score_display_number.push(sum);
            score_display_number = gon.score_display_number;
        }
        else if(points == 1 && opponent_points == 4){
            opponent_game_count = opponent_game_count + 1;
            game_points.push(points);
            opponent_game_points.push(opponent_points);
            while(j > -1){
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("opponent_circle");
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("circle");
            var j_decrement = 1;
            j = j-j_decrement;
            }
            sum = points+opponent_points
            gon.score_display_number.push(sum);
            score_display_number = gon.score_display_number;
        }
        else if(points == 2 && opponent_points == 4){
            opponent_game_count = opponent_game_count + 1;
            game_points.push(points);
            opponent_game_points.push(opponent_points);
            while(j > -1){
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("opponent_circle");
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("circle");
            var j_decrement = 1;
            j = j-j_decrement;
            }
            sum = points+opponent_points
            gon.score_display_number.push(sum);
            score_display_number = gon.score_display_number;
        }
        else if(points == 4 && opponent_points == 2){
            game_count = game_count + 1;
            game_points.push(points);
            opponent_game_points.push(opponent_points);
            while(j > -1){
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("opponent_circle");
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("circle");
            var j_decrement = 1;
            j = j-j_decrement;
            }
            sum = points+opponent_points
            gon.score_display_number.push(sum);
            score_display_number = gon.score_display_number;
        }
        else if(points >= 3 && opponent_points >= 3 && (points - opponent_points == 2 || opponent_points - points == 2)){
            if(points - opponent_points == 2){
                game_count = game_count + 1;
            }
            else if(opponent_points - points == 2){
                opponent_game_count = opponent_game_count + 1;
            }
            game_points.push(points);
            opponent_game_points.push(opponent_points);
            while(j > -1){
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("opponent_circle");
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("circle");
            var j_decrement = 1;
            j = j-j_decrement;
            }
            sum = points+opponent_points
            gon.score_display_number.push(sum);
            score_display_number = gon.score_display_number;
        }
        $.ajax({
            url: "/scores/update",
            type: "POST",
            data: {my_all_opint : all_point,
                opponent_all_point : all_point_opponent,
                score_display_numbers : score_display_number[display_index],
                game_count : game_count_cel[i]
            },
            datatype: "json",
            success: function(data){
              //成功時の処理
                display_index = display_index+1;
                console.log(score_display_number);
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
                var initialize = 0;
                points = initialize;
                opponent_points = initialize;
                if(game_count_cel[i] == 2){
                $('.points-1').html(game_points[0]);
                $('.opponent_points-1').html(opponent_game_points[0]);
                }
                else if(game_count_cel[i] == 3){
                    $('.points-2').html(game_points[1]);
                    $('.opponent_points-2').html(opponent_game_points[1]);
                }
                else if(game_count_cel[i] == 4){
                    $('.points-3').html(game_points[2]);
                    $('.opponent_points-3').html(opponent_game_points[2]);
                }
                else if(game_count_cel[i] == 5){
                    $('.points-4').html(game_points[3]);
                    $('.opponent_points-4').html(opponent_game_points[3]);
                }
                else if(game_count_cel[i] == 6){
                    $('.points-5').html(game_points[4]);
                    $('.opponent_points-5').html(opponent_game_points[4]);
                }
                else if(game_count_cel[i] == 7){
                    $('.points-6').html(game_points[5]);
                    $('.opponent_points-6').html(opponent_game_points[5]);
                }
                else if(game_count_cel[i] == 8){
                    $('.points-7').html(game_points[6]);
                    $('.opponent_points-7').html(opponent_game_points[6]);
                }
                if(game_count == 4 || opponent_game_count == 4){
                    $(".next-button").hide();
                    $(".back-button").hide();
                    $(".keep-button").hide();
                    $(".save-button").hide();
                    $(".result-link").show();
                }
            },
            error: function(data){
              //失敗時の処理
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
            }
        });
    });

    $(".save-button").click(function(){
        if(points == 4 && opponent_points == 0 || points == 0 && opponent_points == 4 || points == 4 && opponent_points == 1 || points == 1 && opponent_points == 4 || points == 2 && opponent_points == 4 || points == 4 && opponent_points == 2 || points >= 3 && opponent_points >= 3 && (points - opponent_points == 2 || opponent_points - points == 2)){
            gon.points.push("○")
            gon.opponent_points.push("×")
            all_point = gon.points;
            all_point_opponent = gon.opponent_points;
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
            all_point = gon.points;
            all_point_opponent = gon.opponent_points;
        }
        if(flg == "off"){
            gon.points.push("×")
            gon.opponent_points.push("○")
        }
        }
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
                $(".points"+"-"+game_count_cel[i]).text(points);
                $(".opponent_points"+"-"+game_count_cel[i]).text(opponent_points);
                first_click = "on";
            }
            else{
                $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("opponent_circle");
                opponent_points = $(".opponent_circle").length;
                $(".points"+"-"+game_count_cel[i]).text(points);
                $(".opponent_points"+"-"+game_count_cel[i]).text(opponent_points);
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
                $(".points"+"-"+game_count_cel[i]).text(points);
                $(".opponent_points"+"-"+game_count_cel[i]).text(opponent_points);
                opponent_first_click = "on";
            }
            else{
                $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).removeClass("circle");
                points = $(".circle").length;
                $(".points"+"-"+game_count_cel[i]).text(points);
                $(".opponent_points"+"-"+game_count_cel[i]).text(opponent_points);
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
    $(".result-link").hide();


    //result.html.erb専用
    var emergency_index = 0;
    var emergency_increment = 1;
    var x = 0;
    var xincrement = 1;
    var y = 0
    var yincrement = 1;
    var za = 0;
    var zaincrement = 1;
    $(".display-button").click(function(){
        if (gon.game_count_array[gon.game_count_array.length-2].game_count == 7){
            for (var z = 0; z != gon.all_points.length+1; z++ ) {
                if ( gon.score_display_number[emergency_index] == za){
                    emergency_index = emergency_index+emergency_increment;
                    x = x+xincrement;
                    y = 0;
                    za =0;
                }
                $(".cell"+gon.game_count_array[x].game_count+"-"+(y+1)).text(gon.all_points[z]);
                $(".opponent_cell"+gon.game_count_array[x].game_count+"-"+(y+1)).text(gon.all_points_opponent[z]);
                y = y+yincrement;
                za = za+zaincrement; 
            }
        }
        else if (gon.game_count_array[gon.game_count_array.length-2].game_count == 6){
            for (var z = 0; z != gon.all_points.length+1; z++ ) {
                if ( gon.score_display_number[emergency_index] == za){
                    emergency_index = emergency_index+emergency_increment;
                    x = x+xincrement;
                    y = 0;
                    za =0;
                }
                $(".cell"+gon.game_count_array[x].game_count+"-"+(y+1)).text(gon.all_points[z]);
                $(".opponent_cell"+gon.game_count_array[x].game_count+"-"+(y+1)).text(gon.all_points_opponent[z]);
                y = y+yincrement;
                za = za+zaincrement; 
            }
        }
        else if (gon.game_count_array[gon.game_count_array.length-2].game_count == 5){
            for (var z = 0; z != gon.all_points.length+1; z++ ) {
                if ( gon.score_display_number[emergency_index] == za){
                    emergency_index = emergency_index+emergency_increment;
                    x = x+xincrement;
                    y = 0;
                    za =0;
                }
                $(".cell"+gon.game_count_array[x].game_count+"-"+(y+1)).text(gon.all_points[z]);
                $(".opponent_cell"+gon.game_count_array[x].game_count+"-"+(y+1)).text(gon.all_points_opponent[z]);
                y = y+yincrement;
                za = za+zaincrement; 
            }
        }
        else if (gon.game_count_array[gon.game_count_array.length-2].game_count == 4){
            for (var z = 0; z != gon.all_points.length+1; z++ ) {
                if ( gon.score_display_number[emergency_index] == za){
                    emergency_index = emergency_index+emergency_increment;
                    x = x+xincrement;
                    y = 0;
                    za =0;
                }
                $(".cell"+gon.game_count_array[x].game_count+"-"+(y+1)).text(gon.all_points[z]);
                $(".opponent_cell"+gon.game_count_array[x].game_count+"-"+(y+1)).text(gon.all_points_opponent[z]);
                y = y+yincrement;
                za = za+zaincrement; 
            }
        }
    });
  });
