(function($){

    $("#done").on('click', function(){
        var option = $("input[name=option]:checked").val();
            var right = 0;
            var wrong = 0;
            var total = 1;
            if(option == 'wrong'){
                wrong++
            }else if(option == 'true'){
                right++
            }

            $('#score').val(right + "/" + total);

            


        })


})(jQuery);