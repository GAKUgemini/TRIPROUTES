  $(document).ready(function() {
    $("h2").text("jQuery稼働テスト(稼働中)");

    var flg = "off"; 
    $(".cell1-1").click(function(){
        if(flg == "off"){
            $(this).text("○");
            flg = "on";
            $(".opponent_cell1-1").text("×");
            $(".points").text("1")
            $(".opponent_points").text("0")
        }else{
            $(this).text("×");
            flg = "off";
            $(".opponent_cell1-1").text("○");
            $(".points").text("0")
            $(".opponent_points").text("1")
        }
    });

    $(".cell1-2").click(function(){
        if(flg == "off"){
            $(this).text("○");
            flg = "on";
            $(".opponent_cell1-2").text("×");
        }else{
            $(this).text("×");
            flg = "off";
            $(".opponent_cell1-2").text("○");
        }
    });


    $(".select_service").click(function(){
        $(".select_recive").hide();
        $(".opponent_select_service").hide();
    });

  });
