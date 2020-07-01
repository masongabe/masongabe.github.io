(function($){

    $("#done").on('click', function(){

        var option1 = $("input[name=option1]:checked").val();

            var right = 0;
            var wrong = 0;
            var total = 4;
            if(option1 == 'false'){
                $("#Q1").addClass("wrong").removeClass("right");
            }else if(option1 == 'true'){
                $("#Q1").addClass("right").removeClass("wrong");
                right++
            }
        var option2 = $("input[name=option2]:checked").val();


            if(option2 == 'false'){
                $("#Q2").addClass("wrong").removeClass("right");
            }else if(option2 == 'true'){
                $("#Q2").addClass("right").removeClass("wrong");
                right++
            }

            var option3 = $("input[name=option3]:checked").val();

            if(option3 == 'false'){
                $("#Q3").addClass("wrong").removeClass("right");
            }else if(option3 == 'true'){
                $("#Q3").addClass("right").removeClass("wrong");
                right++
            }

            var option4 = $("input[name=option4]:checked").val();

            if(option4 == 'false'){
                $("#Q4").addClass("wrong").removeClass("right");
            }else if(option4 == 'true'){
                $("#Q4").addClass("right").removeClass("wrong");
                right++
            }

            $('#score').val(right + "/" + total);

            


        })


})(jQuery);

