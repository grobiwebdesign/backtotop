$(document).ready(function(){
    var btt = $('.back-to-top'); /*identify class, same as on HTML file*/

    btt.on('click', function(e){ /*scrolling animation*/
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        e.preventDefault(); /*Keeps button from blinking when funtion is activated*/
    });

    $(window).on('scroll', function(){ /*set height*/
        var self = $(this), 
        height = self.height(), 
        top = self.scrollTop();

        if(top > height) { /*CSS makes button invisible by default, this IF statement allows it to appear after a certain height mark on HTML file*/
            if(!btt.is(':visible')){
                btt.show();
            }
        } else{
            btt.hide();
        }
    });
});