/*
 * Custom scripts
 */
(function ($) {
   openMenu();
   initSlickSlider();
   initAnchor();
   showStones();
   showWorks();
   validationForm();
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
   var btnPrev = '<button class="slick-next slick-arrow --left" aria-label="arrow-left" type="button"><i class="icon-arrow-left"></i></button>';
   var btnNext = '<button class="slick-prev slick-arrow --right" aria-label="arrow-right" type="button"><i class="icon-arrow-right"></i></button>';

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

function validationForm() {
   let input = document.querySelectorAll('.form__group input'),
   btn = document.querySelectorAll('.btn-send');
   
   const regArr = [
      /^[a-zA-Za-яА-Я\s]+$/ ,
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ ,
      /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[a-z]+\w/ ,
      /[0-9]/
   ];

   function addkeyupInput(){
      for (var i = 0 ; i < input.length; i++) {
         input[i].addEventListener('keyup', function(e){
            checkInputs(e);
         });
      };
   };
   addkeyupInput();

   function changeInput(){
      for (var i = 0 ; i < input.length; i++) {
         input[i].addEventListener('change', function(e){
            checkInputs(e);
         });
      };
   };
   changeInput();

   function addClickBtn(){
      for (var i = 0 ; i < btn.length; i++) {
         btn[i].addEventListener('click', function(e){
            checkInputs(e);
         });
      };
   };
   addClickBtn();

   function checkInputs(event) {
      checkRes = true;
      var input = event.target.parentElement.parentElement.querySelectorAll('input');

      for (var i = 0 ; i < input.length; i++) {
         var item = input[i]
         var attrInput = item.getAttribute('name');

         switch(attrInput) {
            case 'name':
            var f = item.value.search(regArr[0]);
            checkValidation(f, item);
            break;
            
            case 'message':
            var l = item.value.search(regArr[0]);
            checkValidation(l, item);
            break;
            
         case 'phone':
            let p = item.value.search(regArr[1]);
            checkValidation(p, item);
         break;

            case 'email':
            var e = item.value.search(regArr[2]);
            checkValidation(e , item);
            break;
         };
      };
      addAttrBtn(event);
   };

   function checkValidation(val, item) {
      if (val !== 0) {
      checkRes = false;
      item.classList.add('input-error');
      item.nextElementSibling.style.display = 'block';
      
      } else if (val === 0) {
      item.classList.remove('input-error');
      item.nextElementSibling.style.display = 'none';
      }
   };

   function addAttrBtn (event) {
      var targetBtn = event.target.parentElement.parentElement.parentElement.querySelector('.btn-send');
      console.log('targetBtn',targetBtn);

      if (checkRes === false) {
         targetBtn.setAttribute('disabled' , 'disabled');

      } else {
         targetBtn.removeAttribute('disabled');
      };
   };
}