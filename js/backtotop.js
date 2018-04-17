/*Old JS commented out for future reference*/

/*$(document).ready(function(){
    var btn = $('.back-to-top'); /*identify class, same as on HTML file*/

/*    btn.on('click', function(e){ /*scrolling animation*/
      /*  $('html, body').animate({
            scrollTop: 0
        }, 1000);
        e.preventDefault(); /*Keeps button from blinking when funtion is activated*/
 /*  });/*

    $(window).on('scroll', function(){ /*set height*/
  /*      var self = $(this), 
        height = self.height(), 
        top = self.scrollTop();

        if(top > height) { /*CSS makes button invisible by default, this IF statement allows it to appear after a certain height mark on HTML file*/
  /*          if(!btn.is(':visible')){
                btn.addClass('is-hidden');
            }
        } else{
            btn.removeClass('is-hidden');
        }
    });
});*/

if ($('#back-to-top').length) {
  var scrollTrigger = 100, // px
    backToTop = function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
  backToTop();
  $(window).on('scroll', function() {
    backToTop();
  });
  $('#back-to-top').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
}