(function($){

    $("#calc").on('click', function(){
       
        var op = $("input[name=operator]:checked").val();
        var a = Number.parseInt($("#a").val());
        var b = Number.parseInt($("#b").val());
        var answer;
        if(op == 'plus'){
            answer = a + b
        }else if(op == 'minus'){
            answer = a - b
        }else if(op == 'times'){
            answer = a * b
        }else if(op == 'divide'){
            answer = a / b
        } 
$('#ans').val(answer);
    })


})(jQuery);