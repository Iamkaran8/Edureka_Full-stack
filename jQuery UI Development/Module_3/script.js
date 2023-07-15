$(document).ready(function () {
    $('#submitBtn').on('click',function(){
        if ($('#name').val() == ""){
            $('#helpIdFirstName').html("Enter Your Name ").css('color', 'red');
        }


        if(($('#pass').val() || $('#cnpass').val()) == "" ){
            $('#passHint').html("Plese Enter Any Password").css('color', 'orange');
        }else if($('#pass').val() == $('#cnpass').val() ) {
            $('#passHint').html("You Entered correct Password").css('color', 'green');
        }else{
            $('#passHint').html("You Entered worng Password").css('color', 'red');
        }
    });

    $('#reset').on('click',function(){
        console.log("hai")
    });
});