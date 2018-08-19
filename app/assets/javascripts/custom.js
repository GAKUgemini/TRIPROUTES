  $(document).ready(function() {
    $("h2").text("jQuery稼働テスト(稼働中)");

    var flg = "off"; 
    $(".cell").click(function(){
        if(flg == "off"){
            $(this).text("○");
            flg = "on";
            $(".opponent_cell").text("×");
        }else{
            $(this).text("×");
            flg = "off";
            $(".opponent_cell").text("○");
        }
    });

    $(".select_service").click(function(){
        $(".select_recive").hide();
        $(".opponent_select_service").hide();
    });

  });
