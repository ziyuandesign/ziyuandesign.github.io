
	$(function() {

    $('html').addClass('active'); /* [1] */

    $('a').each(function() { /* [2] */
         if ( location.hostname === this.hostname || !this.hostname.length ) { /* [2] */

            var link = $(this).attr("href"); /* [3] */

            if ( link.match("^#") ) { /* [4] */

                $(this).click(function() {
                    var target = $(link); /* [5] */ 
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); /* [5] */ 
                    if (target.length) {
                        $('html,body').animate({ /* [6] */ 
                            scrollTop: target.offset().top - 70 /* [6] */ 
                        }, 1000); return false; /* [6] */ 
                    }
                });

            } else if ( link.match("^mailto") ) { /* [7] */ 
                // Act as normal  /* [7] */ 
            } else {

                $(this).click(function(e) {
                    e.preventDefault(); /* [8] */ 
                    $('html').removeClass('active'); /* [9] */ 
                    setTimeout(function() { /* [10] */
                        window.location = link; /* [10] */
                    }, 500); /* [10] */
                });

            }

        }
    });
  
});



    $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }



    
});


$(document).ready(function(){

    // index.html
     
   $(".bp1-hello-im, .bp2-hello-im, .bp3-hello-im, .bp4-hello-im, .bp5-hello-im, .bp6-hello-im").addClass("animated").css({
        'animation-name':'fadeInUp',
        'animation-duration':'1000ms',
        'animation-delay':'0s',
   });


     $(".bp1-zi-yuan, .bp2-zi-yuan, .bp3-zi-yuan, .bp4-zi-yuan, .bp5-zi-yuan, .bp6-zi-yuan").addClass("animated").css({
        'animation-name':'fadeInUp',
        'animation-duration':'1000ms',
        'animation-delay':'0.6s',
   });

     $(".bp1-im-a-ux-designer, .bp2-im-a-ux-designer, .bp3-im-a-ux-designer, .bp4-im-a-ux-designer, .bp5-im-a-ux-designer, .bp6-im-a-ux-designer").addClass("animated").css({
        'animation-name':'fadeInUp',
        'animation-duration':'1000ms',
        'animation-delay':'1.2s',
   });


   $(".bp1-btn-view, .bp2-btn-view, .bp3-btn-view, .bp4-btn-view, .bp5-btn-view, .bp6-btn-view").addClass("animated").css({
        'animation-name':'fadeInUp',
        'animation-duration':'1000ms',
        'animation-delay':'1.2s',
   });
      

  $(".bp1-nav, .bp2-nav, .bp3-nav, .bp4-nav, .bp5-nav, .bp6-nav").addClass("animated").css({
        'animation-name':'fadeInDown',
        'animation-duration':'1000ms',
        'animation-delay':'2.6s',
   });

   $(".bp1-hand, .bp2-hand, .bp3-hand, .bp4-hand, .bp5-hand, .bp6-hand").addClass("animated").css({
        'animation-name':'fadeInUp',
        'animation-duration':'1000ms',
        'animation-delay':'2.8s',
   });
      




      // taskdaily.html

      $(".readingoniphone6sspacegray ").addClass("animated").css({
        'animation-name':'fadeInUp',
        'animation-duration':'1000ms',
        'animation-delay':'0.5s',
   });
      
       $(".must-do, .scheduling-only3-th,  .group ").addClass("animated").css({
        'animation-name':'fadeInUp',
        'animation-duration':'1000ms',
        'animation-delay':'1s',
   });

        $(".line, .case-study, .designing-a-daily-ta").addClass("animated").css({
        'animation-name':'fadeInUp',
        'animation-duration':'1000ms',
        'animation-delay':'1.5s',
   });

});





