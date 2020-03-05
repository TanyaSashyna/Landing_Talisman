/*
 * Custom scripts
 */
(function ($) {
   openMenu();
   initSlickSlider();
   initAnchor();
   showStones();
   showWorks();
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
   var btnPrev = '<button class="slick-next slick-arrow --left" type="button"><i class="icon-arrow-left"></i></button>';
   var btnNext = '<button class="slick-prev slick-arrow --right" type="button"><i class="icon-arrow-right"></i></button>';

	$('.slick-slider').slick({
      arrows: true,
      nextArrow: btnNext,
      prevArrow: btnPrev,
      infinite: true,
		slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
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
         var btnMenu = document.getElementById('btn-menu');
         var navMenu = document.getElementById('menu');
          
         //take the side identifier from the href attribute
         var id = $(this).attr('href'),
         
         //learn the height from the beginning of the page to the block that the anchor refers to
         top = $(id).offset().top;
          
         //animate the transition to the distance - top for 1500 ms
         $('body,html').animate({ scrollTop: top - 100 }, 1500);
         btnMenu.classList.remove('btn-menu__close');
         navMenu.classList.remove('nav-menu__show');
      });
  });
}

function showStones() {
   var btnShowStones = document.getElementById('btn-show-stones');
   var btnHiddenStones = document.getElementById('btn-hidden-stones');
   var typesStone = document.getElementsByClassName('types-stone__item');

   var handleShowStones = (e) => {
      btnShowStones.style.display = "none";
      btnHiddenStones.style.display = "block";

      Array.prototype.forEach.call(typesStone, (type, ind) => {
         if (ind > 7 ) {
            type.classList.remove('d-none');
         }
      });
   }

   var handleHiddenStones = (e) => {
      setTimeout(() => {
         btnShowStones.style.display = "block";
         btnHiddenStones.style.display = "none";

         Array.prototype.forEach.call(typesStone, (type, ind) => {
            if (ind > 7 ) {
               type.classList.add('d-none');
            }
         });
      }, 1000);
      
   }

   btnShowStones.addEventListener('click', handleShowStones);
   btnHiddenStones.addEventListener('click', handleHiddenStones);
}

function showWorks() {
   var btnShowWorks = document.getElementById('btn-show-works');
   var btnHiddenWorks = document.getElementById('btn-hidden-works');
   var works = document.getElementsByClassName('works__wrap');

   var handleShowWorks = (e) => {
      btnShowWorks.style.display = "none";
      btnHiddenWorks.style.display = "block";

      Array.prototype.forEach.call(works, (type, ind) => {
         if (ind > 1 ) {
            type.classList.remove('d-none');
         }
      });
   }

   var handleHiddenWorks = (e) => {
      setTimeout(() => {
         btnShowWorks.style.display = "block";
         btnHiddenWorks.style.display = "none";

         Array.prototype.forEach.call(works, (type, ind) => {
            if (ind > 1 ) {
               type.classList.add('d-none');
            }
         });
      }, 1000);
      
   }

   btnShowWorks.addEventListener('click', handleShowWorks);
   btnHiddenWorks.addEventListener('click', handleHiddenWorks);
}