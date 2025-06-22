
(function($) {
    "use strict";


		//**================= PRELOADER JS=====================**//
			
			$('#atf-loader').delay(1500).fadeOut(500);
			/*END PRELOADER JS*/
		

		//**================= Active Slick Nav =====================**//  
			$('.atf-main-menu').slicknav({
				label: '',
				duration: 1000,
				easingOpen: "easeOutBounce", //available with jQuery UI
				prependTo:'#mobile_menu',
				closeOnClick: true,
			});
		
		//**================= START ONEPAGE NAV JS =====================**//
		
			$('.atf-main-menu').onePageNav({
				currentClass: 'current',
				changeHash: false,
				scrollSpeed: 750,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'swing',
				begin: function() {
					//I get fired when the animation is starting
				},
				end: function() {
					//I get fired when the animation is ending
				},
				scrollChange: function($currentListItem) {
					//I get fired when you enter a section and I pass the list item of the section
				}
			});	
			
		/*END ONEPAGE NAV JS*/
		
		
		//**================= Sticky Header Js =====================**//
			$(window).on('scroll', function () {
				var scroll = $(window).scrollTop();
				if (scroll < 400) {
					$("#atf-sticky-active").removeClass("atf-sticky-active");
				} else {
					$("#atf-sticky-active").addClass("atf-sticky-active");
				}
			});
	

		//**================= Sticky =====================**//

			 $(window).on('scroll', function() {
				if ($(window).scrollTop() > 50) {
					$('.atf-header-area').addClass('sticky-active');
					$('.atf-scroll-top').addClass('open');
				} else {
					$('.atf-header-area').removeClass('sticky-active');
					$('.atf-scroll-top').removeClass('open');
				}
			});


		//**===================Scroll UP ===================**//

			if ($('.atf-scroll-top').length) {
			  $(".atf-scroll-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}
		//**===================Toogle Search ===================**//
		
			// Handle click on toggle search button
			$('.header-search-icon').on('click', function() {
				$('.header-search-icon, .search_popup').toggleClass('search-open');
				return false;
			});

		//**===================START HOME SLIDER JS===================**//	
			$('.atf-qabid-slider').slick({
				arrows: true,
				autoplay:true,
				dots: false,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true,
				slidesToScroll: 1,
				prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
				nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
			});
		//**===================END HOME SLIDER JS===================**//
		
		//**===================Counter===================**//
		
			$('.counter-value').counterUp({
				delay: 10,
				time: 1000
			});
		
		//**===================Start Service JS===================**//
		
			$('#service-slider').owlCarousel({
				margin:3,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					992:{
						items:3
					}
				}
			})

			/*END Service JS*/

		//**===================Start Gallery JS===================**//
		
			$('#gallery-slider').owlCarousel({
				margin:5,
				autoplay:true,
				items: 4,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					992:{
						items:3
					}
				}
			})

		/*END Gallery Design*/


		//**===================Start Testimonials JS===================**// 
		
			$('#atf-testimonial-slider').owlCarousel({
				margin:5,
				autoplay:false,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					992:{
						items:2
					}
				}
			})

		/*END Testimonials LOGO*/

		//**===================Start Blog JS===================**// 
		
			$('#news-slider').owlCarousel({
				margin:3,
				autoplay:false,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					992:{
						items:2
					}
				}
			})

		/*END Blog Design*/

		//**===================Start PARTNER JS===================**//
		
			$('.atf-brand-active').owlCarousel({
				margin:5,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			})
			/*END PARTNER LOGO*/


		//**=================== LightCase jQuery Active===================**// 
		
			$('a[data-rel^=lightcase]').lightcase({
				transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
				swipe: true,
				maxWidth: 1170,
				maxHeight: 600,
			});

		
			$('select').niceSelect();

		//**===================  ANIMATION jQuery Active===================**//
			
			AOS.init();
			  
		/*END ANIMATION JS*/


})(jQuery);