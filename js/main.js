
jQuery(function($) { // DOM is now read and ready to be manipulated
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.eq-blocks');
});


$(window).resize(function(){
  equalheight('.eq-blocks');
});

});


function main() {

(function () {
   'use strict';

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 10;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });




/*====================================
    text center
    ======================================*/
       
       






	/*====================================
    top -menu
    ======================================*/

$('#top-menu.navbar-default li:has(ul)').addClass('menu-item-has-children');

/*====================================
    text center
    ======================================*/

$(window).resize(function(){

 $('#home-banner-block .carousel-caption').css({
	 //left: ($(window).width() - $('#home-banner-block .carousel-caption').outerWidth())/2,
        top: ($(window).height() - $('#home-banner-block .carousel-caption ').outerHeight())/3
    });

});



// To initially run the function:
$(window).resize();






/*creating click event*/
$(document).ready(function(){
  
   $("#realated-posts-").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
		  pagination : true ,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 3],
				        [1200, 3],
				        [1400, 3],
				        [1600, 3]
				      ],
  	  });
	  
	  
	  $(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});


  
});


}());


}
main();