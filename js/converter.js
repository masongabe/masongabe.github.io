(function($){

    var f = $("#farenheit");
    var c = $("#centigrade");
    var k = $("#kelvin");
    var ra = $("#rankine");
    var re = $("#reaumur");
    f.on("keyup", function(ev){
        var temp = f.val();
         
       c.val((temp - 32) * (5 / 9));
       k.val((temp- 32) * (5/9) + 273.15)
       ra.val(temp + 459.67)
       re.val((temp - 32) * (4 / 9))

    });


})(jQuery);