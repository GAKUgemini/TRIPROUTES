  
  $(document).ready(function() {
    $("h2").text("稼働中");
    var gameset = "off";
    var flg = "off"; 
    var game_count_cel = [1,2,3,4,5,6,7];
    var point_count_cel = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    var points = 0;
    var opponent_points = 0;
    var one_click = "off";
    var i = 0;
    var j = 0;
    $(".next-button").click(function(){
        var j_increment = 1;
        j = j+j_increment;
    });
    $(".save-button").click(function(){
        one_click = "off";
    });

    $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).click(function(){
        if(flg == "off"){
            $(".cell"+game_count_cel[i]+"-"+point_count_cel[j]).text("○");
            flg = "on";
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).text("×");
            if(one_click == "off"){
                var one_point = 1;
                one_click = "on";
                points = points+one_point;
            }
            $(".points").text(points)
            $(".opponent_points").text(opponent_points)
        }else{
            $(this).text("×");
            flg = "off";
            $(".opponent_cell"+game_count_cel[i]+"-"+point_count_cel[j]).text("○");
            $(".points").text("0")
            $(".opponent_points").text("1")
        }
    });
    
   
    
    $(".select_service").click(function(){
        $(".select_recive").hide();
        $(".opponent_select_service").hide();
    });

  });