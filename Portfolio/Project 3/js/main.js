
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var num1 = $('.validate-input input[name="num1"]');
    var num2 = $('.validate-input input[name="num2"]');
    var num3 = $('.validate-input input[name="num3"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(num1).val().trim() == ''){
            showValidate(num1);
            check=false;
        }

        if($(num3).val().trim() == ''){
            showValidate(num3);
            check=false;
        }


        if($(num2).val().trim() == ''){
            showValidate(num2);
            check=false;
        }

        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);