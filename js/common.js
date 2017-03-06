$(function() {
	// open mobile menu
    $('.js-toggle-menu').click(function(e){
          e.preventDefault();
          $('.mobile-header-nav').slideToggle();
          $(this).toggleClass('open');
    });
    
    $('.play').click(function(e){
          e.preventDefault();
          $('.video-play').slideToggle();
          $(this).toggleClass('open');           
    });

	$('.video_close').click(function(e){
          e.preventDefault();
          $('.video-play').slideToggle();
          $(this).toggleClass('close');           
    });
	    
    $(window).scroll(function() {
        var top = $(document).scrollTop();

        if (top < 1) $(".main-header").css("box-shadow", "none");

        else $(".main-header").css("box-shadow", "0 0 10px rgba(0,0,0,0.5)");

    });

    $('.search-w .cover').on('click', function() {
        $(this).parent().toggleClass('active');
    });   

        
});
