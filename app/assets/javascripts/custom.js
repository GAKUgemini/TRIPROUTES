  
  $(document).ready(function() {
    $("h2").text("稼働中");
    var gameset = "off";
    var flg = "off"; 
    var game_count = [1,2,3,4,5,6,7];
    var point_count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    var i = 0;
    var j = 0;
    $(".next-button").click(function(){
       var prejflag = 1;
       j = j + prejflag;
    });
    $(".cell"+game_count[i]+"-"+point_count[j]).click(function(){
        if(flg == "off"){
            $(this).text("○");
            flg = "on";
            $(".opponent_cell"+game_count[i]+"-"+point_count[j]).text("×");
            $(".points").text("1")
            $(".opponent_points").text("0")
        }else{
            $(this).text("×");
            flg = "off";
            $(".opponent_cell"+game_count[i]+"-"+point_count[j]).text("○");
            $(".points").text("0")
            $(".opponent_points").text("1")
        }
    });
    
   
    
    $(".select_service").click(function(){
        $(".select_recive").hide();
        $(".opponent_select_service").hide();
    });

  });