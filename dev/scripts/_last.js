/*
 * Custom scripts
 */
(function ($) {
   openMenu();
   initSlickSlider();
   initAnchor();
})(jQuery);


function openMenu () {
   var btnMenu = document.getElementById('btn-menu');
   var navMenu = document.getElementById('menu');

   btnMenu.addEventListener('click', function (e) {
      btnMenu.classList.toggle('btn-menu__close');
      navMenu.classList.toggle('nav-menu__show');
   })
};

function initSlickSlider() {
   const btnPrev = '<button class="slick-next slick-arrow --left" type="button"><i class="icon-arrow-left"></i></button>';
   const btnNext = '<button class="slick-prev slick-arrow --right" type="button"><i class="icon-arrow-right"></i></button>';

	$('.slick-slider').slick({
      arrows: true,
      nextArrow: btnNext,
      prevArrow: btnPrev,
      infinite: true,
		slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1
            }
         }
      ]
	});
}

function initAnchor() {
   $(document).ready(function () {
      $(".anchors-menu").on("click", ".link-anchor", function (event) {
          //cancels standard click-through processing
          event.preventDefault();
          
          //take the side identifier from the href attribute
          var id = $(this).attr('href'),
          
          //learn the height from the beginning of the page to the block that the anchor refers to
          top = $(id).offset().top;
          
          //animate the transition to the distance - top for 1500 ms
          $('body,html').animate({ scrollTop: top }, 1500);
      });
  });
}