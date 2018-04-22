$(document).ready(function(){ 
    $(window).scroll(function(){ /*set height*/
        if ($(this).scrollTop() > 100) { /*identify class, same as on HTML file*/
            $('#backtotop').fadeIn(); 
        } else { 
            $('#backtotop').fadeOut(); 
        } 
    }); 
    $('#backtotop').click(function(e){ /*scrolling animation*/
        $("html, body").animate({ scrollTop: 0 }, 1000); 
		e.preventDefault(); /*Keeps button from blinking when funtion is activated*/
        return false; 
    }); 
});