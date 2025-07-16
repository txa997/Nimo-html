/*
	Template Name: Barsi - Architecture & Interior HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";


/* 
	lenis-smooth-scroll-activation
*/

const lenis = new Lenis({
	duration: .6,
	easing: (t) => 1 - Math.pow(1 - t, 4),
	direction: 'vertical', 
	smooth: true, 
	smoothTouch: false, 
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

$('a[href^="#"]').on('click', function (e) {
	e.preventDefault(); 

	const target = $(this.getAttribute('href')); 

	if (target.length) {
		lenis.scrollTo(target[0], {
			duration: 1.2, 
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		});
	}
});

gsap.config({
	nullTargetWarn: false,
});

/* 
	sticky-header-function
*/

function waStickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.wa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('wa_sticky');
      } else {
        $header.removeClass('wa_sticky');
        $header.removeClass('wa_sticky_show');
      }

      if ($header.hasClass('wa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('wa_sticky_show');
        } else {
          $header.removeClass('wa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

waStickyHeader();

/* 
	offcanvas-function
*/

$('.offcanvas_toggle').on('click', function() {
    $('.wa-overly, .offcanvas_box_active').addClass('active');
});

$('.wa-overly, .offcanvas_box_close').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.wa-overly').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.offcanvas_box_active').removeClass('active');
        $('.wa-overly').removeClass('active');
    }
});

$('.offcanvas_box_active a').on('click', function() {
    $('.offcanvas_box_active').removeClass('active'); 
    $('.wa-overly').removeClass('active'); 
});


/* 
	mobile-dropdown-function
*/

jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});


/* 
	search-popup-function
*/

$('.search_btn_toggle').on('click', function() {
    $('.wa-overly, .search_box_active').addClass('active');
});

$('.wa-overly, .search_box_close').on('click', function() {
    $('.search_box_active').removeClass('active');
    $('.wa-overly').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.search_box_active').removeClass('active');
        $('.wa-overly').removeClass('active');
    }
});


/* 
	windows-load-function
*/

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener('load', function(){

		CustomEase.create("ease1", "0.65, 0.05, 0.36, 1");

		/* 
			preloader-function
		*/
		let preloader = document.querySelector(".tn-preloader");
		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();
			}, 1000 ) ;

		}

		/* 
			wa-split-right
		*/	
		if ($(".wa_split_right").length) {
			var waSplitRight = $(".wa_split_right");
			if (waSplitRight.length == 0) return;

			gsap.registerPlugin(SplitText);

			waSplitRight.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});

				gsap.set(el, { perspective: 400 });

				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0; 

				if ($(el).hasClass("wa_split_right")) {
					gsap.set(el.split.chars, {
						x: 50,
						opacity: 0,
					});
				}

				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						toggleActions: 'play none none reverse',
					},
					x: 0,
					color: "inherit",
					opacity: 1,
					duration: 0.4,
					ease: "ease1",
					stagger: 0.02,
					delay: delayValue, 
				});
			});
		}
        
		/* 
			wa-split-y
		*/
		if($(".wa_split_bottom").length) {
			var split9 = $(".wa_split_bottom");
			if(split9.length == 0) return; gsap.registerPlugin(SplitText); split9.each(function(index, el) {
	
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
	
	
				if( $(el).hasClass('wa_split_bottom') ){
					gsap.set(el.split.chars, {
						yPercent: 150,
					});
				}
	
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
					},
					yPercent: 0,
					opacity: 1,
					duration: .3,
					ease: "ease1",
					stagger: 0.03,
				});
	
			});
		}



		// wa-clip-left-right
		gsap.utils.toArray(".wa_clip_left_right").forEach(element => {

			let delayValue = $(element).attr("data-split-duration") || "1s";
			delayValue = parseFloat(delayValue) || 0; 

			gsap.fromTo(
				element,
				{ clipPath: "polygon(0% 0%, 0% 0%, 0 100%, 0% 100%)"}, 
				{ 
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
					ease: "ease1",
					duration: delayValue,
					scrollTrigger: {
						trigger: element,
						start: "top 90%",
						toggleActions: 'play none none reverse',
						markers: false,     
					},
				}
			);
		});


		// wa_clip_right_left
		gsap.utils.toArray(".wa_clip_right_left").forEach(element => {

			let delayValue = $(element).attr("data-split-duration") || ".8s";
			delayValue = parseFloat(delayValue) || 0; 

			gsap.fromTo(
				element,
				{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"}, 
				{ 
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
					ease: "ease1",
					duration: delayValue,
					scrollTrigger: {
						trigger: element,
						start: "top 90%",
						toggleActions: 'play none none reverse',
						markers: false,     
					},
				}
			);
		});

		/* 
			add-active-class
		*/
		const waAddClass = gsap.utils.toArray('.wa_add_class');
		waAddClass.forEach(waAddClassItem => {
			gsap.to(waAddClassItem, {
				scrollTrigger: {
					trigger: waAddClassItem,
					start: "top 90%",
					end: "bottom bottom",
					toggleActions: "play none none reverse",
					toggleClass: "active",
					once: true,
					markers: false,
				}
			});
		});


		/* 
			wow-activation
		*/
        if($('.wow').length){
			var wow = new WOW({
				boxClass:     'wow',
				animateClass: 'animated',
				offset:       100,
				mobile:       true,
				live:         true
			});
			wow.init();
		};

		var hero1ins = gsap.timeline({})
		hero1ins.from(".kk-hero-1-img-shape-16", { x: 180, rotation: 180, opacity: 0, delay: 1, duration: .5, ease: "ease1",  });
		hero1ins.from(".kk-hero-1-img-shape-17", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-1", { x: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-12", { x: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-15", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-14 ", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-7 ", { x: 180,  opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-13 ", { x: 180,  opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-11 ", { x: 180,  opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img ", { x: 180,  opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape ", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-2 ", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-5 ", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-3", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-4", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-8", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-6", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-9", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-img-shape-10", { x: 180, rotation: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		hero1ins.from(".kk-hero-1-right-btn", { x: 180, opacity: 0,  duration: .5, ease: "ease1",  },"<20%");
		



		
		/* 
			hero-2-slider-active
		*/
		if($('.kk_h2_slider_active').length) {

			let kk_h2_preview_slider_active = new Swiper('.kk_h2_preview_slider_active', {
				loop: true,
				speed: 1000,
				spaceBetween: 35,




				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 2,
					},
					1400: {
						slidesPerView: 3,
					},


				},
			});



			let kk_h2_slider_active = new Swiper('.kk_h2_slider_active', {
				loop: true,
				speed: 800,
				effect: "fade",
				fadeEffect: {
					crossFade: true
				},

				autoplay: {
				    delay: 5000,
				},

				thumbs: {
					swiper: kk_h2_preview_slider_active,
				},


				on: {
					slideChangeTransitionStart: () => {
						h2_split_text();
					},
				},

			});


			function h2_split_text() {
				const currentSlide = document.querySelectorAll('.swiper-slide-active .h2_split_text');
			

				const split = new SplitText(currentSlide, { type: 'lines,chars' , linesClass: "split-line"  });
				gsap.set(split.chars, { 
					x: 50,
					opacity: 0,
				});
			
				gsap.to(split.chars, {
					x: 0,
					opacity: 1,
					duration: 0.4,
					ease: "ease1",
					stagger: 0.02,
					delay: .5,
				});

			}

			h2_split_text();


			

		}
		
		/* 
			hero-2-slider-active
		*/
		if($('.kk_h3_slider_active').length) {

			let kk_h3_slider_active = new Swiper('.kk_h3_slider_active', {
				loop: true,
				speed: 1000,

				effect: "fade",
				fadeEffect: {
					crossFade: true
				},

				autoplay: {
				    delay: 6000,
				},

				on: {
					slideChangeTransitionStart: () => {
						h3_split_text();
					},
				},

				pagination: {
					el: ".kk_h3_pagination",
					clickable: true,
					renderBullet: function (index, className) {
					  const number = (index + 1).toString().padStart(2, "0"); // adds leading zero
					  return '<span class="' + className + '">' + number + '</span>';
					},
				},


			});


			function h3_split_text() {
				const currentSlide = document.querySelectorAll('.swiper-slide-active .h3_split_text');
			

				const split = new SplitText(currentSlide, { type: 'lines,chars' , linesClass: "split-line"  });
				gsap.set(split.chars, { 
					x: 50,
					opacity: 0,
				});
			
				gsap.to(split.chars, {
					x: 0,
					opacity: 1,
					duration: 0.4,
					ease: "ease1",
					stagger: 0.02,
					delay: .7,
				});

			}

			h3_split_text();
			

		}


	})
});


/* 
	firefly-animation
*/
const paths = document.querySelectorAll('.nm-Firefly-ani-svg path');

	paths.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0, // 0 বা 1 randomly
				duration: Math.random() * 0.6 + 0.2, // 0.2s - 0.8s
				delay: Math.random() * 0.2, // 0 - 0.5s delay
				onComplete: animatePath, // আবার চালাবে
				ease: "power1.inOut"
			});
	}
  	animatePath(); // শুরু করাও
});


/* 
	services-1-scrollbar
*/
if($(".with-plugin").length) { 
	$(".with-plugin").mCustomScrollbar({
		theme: "dark-3",
		scrollButtons: { enable: false }
		// autoHideScrollbar: "true",
		// alwaysShowScrollbar : 0
	});
}

/* 
	portfolio-1-animation
*/
if (window.matchMedia("(min-width: 992px)").matches) {
	var portfolio1animation = gsap.timeline({
		scrollTrigger: {
			trigger: ".p1_ani_trigger",
			start: "top 40%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	})
	// portfolio1animation.from(".p1_ani_trigger_elm_1", { y: -500, });
}




/* 
	testimonial-1-slider-active
*/
if ($('.nm_t1_preview_slider_active').length) {

	const nm_t1_preview_slider_active = new Swiper('.nm_t1_preview_slider_active', {
	  speed: 500,
	  slidesPerView: "auto",
	  spaceBetween: 20,

	});
  
	const nm_t1_main_slider_active = new Swiper('.nm_t1_main_slider_active', {
	  speed: 500,
	  slidesPerView: "auto",
	  effect: "fade",
	  fadeEffect: { crossFade: true },
	  navigation: {
		nextEl: ".kk_t1_next",
		prevEl: ".kk_t1_prev",
	  },
	  thumbs: {
		swiper: nm_t1_preview_slider_active,
	  },
	});
  
	let rotateAngle = 0;
  
	nm_t1_main_slider_active.on('slideChange', function () {
	  rotateAngle += 10;
  
	  $('.nm-testimonial-1-preview-slider').css({
		transform: `rotate(${rotateAngle}deg)`,
		transition: 'transform 0.5s ease'
	  });
	});
  }
  

if($('.nm-testimonial-1-preview-slider').length) { 
	const slides = document.querySelectorAll(".nm-testimonial-1-preview-slider .swiper-slide");
	const wrapper = document.querySelector(".nm-testimonial-1-preview-slider .swiper-wrapper");
  
	const radius = 450; 
	const centerX = wrapper.clientWidth / 2;
	const centerY = wrapper.clientHeight / 2;
	const total = slides.length;
	const angleStep = (2 * Math.PI) / total;
  
	slides.forEach((slide, index) => {
	  const angle = index * angleStep;
	  const x = centerX + radius * Math.cos(angle) - slide.clientWidth / 2;
	  const y = centerY + radius * Math.sin(angle) - slide.clientHeight / 2;
  
	  slide.style.left = `${x}px`;
	  slide.style.top = `${y}px`;
	});

}

  

/* 
	steps-1-animation
*/

gsap.utils.toArray('.nm_steps1_ani_trigger').forEach(card => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,      
	  start: "top 80%",
	  end: () => "+=" + card.offsetHeight, 
      toggleActions: "play none none reverse",
      scrub: true,
      markers: false             
    }
  });

  tl.to(card.querySelector('.number'), {
    backgroundColor: 'var(--nm-clr-pr-1)',
    color: '#000',
    duration: .3
  })
  .to(card.querySelector('.number-line-fill'), {
    scaleY: 1,
    duration: 1
  }) 
  .to(card.querySelector('.nm-steps-1-card .content'), {
    rotateY: 0,
	duration: 1,
  },"<=");    
});


if ($('.nm_t1_preview_slider_active').length) { 
	$(document).on('click', '.nm-team-1-member .toggle-btn', function () {
		const parent = $(this).closest('.nm-team-1-member');
	  
		if (parent.hasClass('active')) {
		  parent.removeClass('active');
		} else {
		  $('.nm-team-1-member').removeClass('active');
		  parent.addClass('active');
		}
	});
}











/* 
	button-animation
*/
if ($(".btn_split_left").length) {
    var splitButton1 = $(".btn_split_left");
    gsap.registerPlugin(SplitText);

    splitButton1.each(function (index, el) {
        el.split = new SplitText(el, {
            type: "words,chars",
        });

        $(el).on("mouseenter", function () {
            gsap.fromTo(
                el.split.chars,
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: .3, stagger: -0.03, ease: "ease1", }
            );
        });
    });
}



// wa-parallax-img
gsap.utils.toArray(".wa-parallax-img").forEach(element => {
	gsap.fromTo(
		element,
		{ objectPosition: "50% 0%" }, 
		{ 
			objectPosition: "50% 100%", 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: 5,    
                delay: 1,
				markers: false,     
			},
		}
	);
});

// wa-bg-parallax
gsap.utils.toArray(".wa-parallax-bg").forEach(element => {
	gsap.fromTo(
		element,
		{ backgroundPosition: "50% 0%" }, 
		{ 
			backgroundPosition: "50% 100%", 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: 5,    
                delay: 1,
				markers: false,  
			},
		}
	);
});

// wa_rotated
gsap.utils.toArray(".wa_rotated").forEach(element => {
	gsap.fromTo(
		element,
		{ rotation: 0 }, 
		{ 
			rotation: 360, 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: 5,    
                delay: 1,
				markers: false,  
			},
		}
	);
});


/* 
	wa-parallax-item
*/
gsap.utils.toArray('.wa-parallax-item').forEach((item) => {
	gsap.from(item, {
	  yPercent: 30,
	  scrollTrigger: {
		trigger: item,
		end: "to 10%",
		toggleActions: 'play none none reverse',
        scrub: 5,    
        delay: 1,
        markers: false,  
	  },
	});
});



/* 
	wa-parallax-shape
*/
gsap.utils.toArray('.wa_parallax_shape').forEach((item) => {
	gsap.from(item, {
	  y: 100,
	  scrollTrigger: {
		trigger: item,
		end: "to 10%",
		toggleActions: 'play none none reverse',
        scrub: 2,    
        markers: false,  
	  },
	});
});
/* 
	wa-parallax-shape-2
*/
gsap.utils.toArray('.wa_parallax_shape_2').forEach((item) => {
	gsap.from(item, {
	  y: -100,
	  scrollTrigger: {
		trigger: item,
		end: "to 10%",
		toggleActions: 'play none none reverse',
        scrub: 2,    
        markers: false,  
	  },
	});
});


/* 
	kk-choose-1-title
*/
var about1content= gsap.timeline({
	scrollTrigger: {
		trigger: ".kk-choose-1-title",
        start: "top 80%",
        end: "top 20%",
		toggleActions: "play none none reverse",
        scrub: true,
		markers: false,
	},

})

about1content.from(".kk-choose-1-title ", { yPercent: -100,});

/* 
	process-1-animation
*/
gsap.to(".kk-process-1-div", {
	scrollTrigger: {
		trigger: ".kk-process-1-div",
		start: "top 80%",
		end: "bottom bottom",
		toggleActions: "play none none reverse",
		toggleClass: "active",
		once: true,
		markers: false,
	}
});
var about2shape = gsap.timeline({
	scrollTrigger: {
		trigger: ".kk-about-2-right",
        start: "top 80%",
        end: "top 0%",
		toggleActions: "play none none reverse",
        scrub: true,
		markers: false,
	},

})

about2shape.from(".kk-about-2-right-shape-1 ", { y: -400,});
about2shape.from(".kk-about-2-right-shape-2 ", { y: -400,},"<50%");

/* 
	features-2-animation
*/
if (window.matchMedia("(min-width: 992px)").matches) {

	var features2ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".kk-features-2-wrap",
			start: "top 90%",
			end: "top 20%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},

	})
	features2ani.from(".kk-features-2-left ", { rotate: 60, yPercent: -120, xPercent: 100,});
}
/* 
	gallery-2-animation
*/
if (window.matchMedia("(min-width: 992px)").matches) {

	var gallery2ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".kk-gallery-2-bg-img",
			start: "top 50%",
			toggleActions: "play none none reverse",
			markers: false,
		},

	})
	gallery2ani.from(".kk-gallery-2-bg-img-1 ", { transform: "translate(145%, 130%)", duration: 1, ease: "ease1" });
	gallery2ani.from(".kk-gallery-2-bg-img-2 ", { transform: "translate(-35%, 190%)", duration: 1, ease: "ease1" },"<10%");
	gallery2ani.from(".kk-gallery-2-bg-img-3 ", { transform: "translate(-215%, 70%)", duration: 1, ease: "ease1" },"<10%");
	gallery2ani.from(".kk-gallery-2-bg-img-4 ", { transform: "translate(325%, 30%)", duration: 1, ease: "ease1" },"<10%");
	gallery2ani.from(".kk-gallery-2-bg-img-5 ", { transform: "translate(195%, -80%)", duration: 1, ease: "ease1" },"<10%");
	gallery2ani.from(".kk-gallery-2-bg-img-6 ", { transform: "translate(100%, -175%)", duration: 1, ease: "ease1" },"<10%");
	gallery2ani.from(".kk-gallery-2-bg-img-7 ", { transform: "translate(-255%, -165%)", duration: 1, ease: "ease1" },"<10%");
	gallery2ani.from(".kk-gallery-2-content ", { scale: 0.8, opacity: 0, duration: 1, ease: "ease1" },"<10%");
}

/* 
	cta-2-animation	
*/
if (window.matchMedia("(min-width: 992px)").matches) {
	var cta2ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".kk-cta-2-area",
			start: "top 80%",
			end: "top 20%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	})
	cta2ani.from(".kk-cta-2-area", { scale: 0.8,  });
}


/* 
	about-3-animation	
*/
if (window.matchMedia("(min-width: 992px)").matches) {
	var about3ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".about3_ani_trigger",
			start: "top 30%",
			end: "top -30%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	})
	about3ani.from(".about3_ani_elm_1", { rotate: -50, transformOrigin:"right bottom",  });
	about3ani.from(".about3_ani_elm_2", { rotate: 50, transformOrigin:"left bottom",  },"<=");
	about3ani.from(".about3_ani_elm_3", { rotate: -50, transformOrigin:"right bottom",  },"<=");
	about3ani.from(".about3_ani_elm_4", { rotate: 50, transformOrigin:"left bottom",  },"<=");
}

/* 
	process-3-animation	
*/
if (window.matchMedia("(min-width: 992px)").matches) {
	var process3ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".process3_ani_trigger",
			start: "top 90%",
			toggleActions: "play none none reverse",
			// scrub: true,
			markers: false,
		},
	})
	process3ani.from(".process3_ani_elm_0", { x: -500, opacity: 0, duration: 1, ease: "ease1", stagger: -0.3 });
	process3ani.fromTo(".process3_ani_elm_1 .shape-1", { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, ease: "ease1" });
	process3ani.fromTo(".process3_ani_elm_1 .shape-2", { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, ease: "ease1" },"<");
}


/* 
	features-3-animation
*/
if (window.matchMedia("(min-width: 992px)").matches) {
	var features3ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".features3_ani_trigger",
			start: "top 90%",
			end: "top 20%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	})
	features3ani.from(".features3_ani_trigger", { scale: 0.8,  }, "<");
}


/* 
	contact-3-animation	
*/
if (window.matchMedia("(min-width: 992px)").matches) {
	var contact3ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".contact3_ani_trigger",
			start: "top 50%",
			end: "top 0%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	})
	contact3ani.from(".contact3_ani_elm_1", { rotate: -50, transformOrigin:"right bottom",  });
	contact3ani.from(".contact3_ani_elm_2", { rotate: 50, transformOrigin:"left bottom",  },"<=");
	contact3ani.from(".contact3_ani_elm_3", { rotate: -50, transformOrigin:"right bottom",  },"<=");
	contact3ani.from(".contact3_ani_elm_4", { rotate: 50, transformOrigin:"left bottom",  },"<=");
}


/* 
	cta-3-animation	
*/
if (window.matchMedia("(min-width: 992px)").matches) {
	var cta2ani = gsap.timeline({
		scrollTrigger: {
			trigger: ".contactCta_ani_trigger",
			start: "top bottom",
			end: "top 50%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	})
	cta2ani.from(".contactCta_ani_trigger", { scale: 0.6,  });
}

/* 
	stikcy-card-animation
*/
if (window.matchMedia("(min-width: 992px)").matches) { 

	if($(".wa_sticky_card_wrapper").length) {
		const waCardsWrappers = gsap.utils.toArray(".wa_sticky_card");
		const waCards = gsap.utils.toArray(".wa_sticky_card");
	
		waCardsWrappers.forEach((waWrapper, waIndex) => {
		const waCard = waCards[waIndex];
		let waScale = 1,
			waRotation = 0;
	
		if (waIndex !== waCards.length - 1) {
			waScale = 0.9 + 0.025 * waIndex;
			waRotation = -10;
		}
	
			gsap.to(waCard, {
				scale: waScale,
				rotationX: waRotation,
				transformOrigin: "top center",
				ease: "none",
				scrollTrigger: {
				trigger: waWrapper,
				start: "top " + (60 + 10 * waIndex),
				end: "bottom 550",
				endTrigger: ".wa_sticky_card_wrapper",
				scrub: true,
				pin: waWrapper,
				pinSpacing: false,
				markers: false,
				// id: waIndex + 1
				}
			});
		});
	}
	

}



/* 
	about-1-features-slider-active
*/
if ($('.kk_a1f_slider_active').length) {
	var kk_a1f_slider_active = new Swiper(".kk_a1f_slider_active", {
		grabCursor: true,
		effect: "creative",
		slidesPerView: "auto",
		creativeEffect: {
			// prev: {
			// 	shadow: false,
			// 	translate: ["0%", 0, -1],
			// },
			next: {
				shadow: false,
				translate: ["10%", 0, 0],
			},
			limitProgress: 3,
		},

	});
}




/* 
	testimonial-1-active
*/
if($('.kk_t1_preview_slider_active').length) {

	let kk_t1_preview_slider_active = new Swiper('.kk_t1_preview_slider_active', {
		// loop: true,
		speed: 1000,
		slidesPerView: "auto",
		spaceBetween: 10,
        // autoplay: {
        //     delay: 5000,
        // },


	});



	let kk_t1_main_slider_active = new Swiper('.kk_t1_main_slider_active', {
		// loop: true,
		speed: 1000,

		effect: "creative",
		creativeEffect: {
			prev: {
				shadow: false,
				translate: [0, 0, -400],
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},

		navigation: {
			nextEl: ".kk_t1_next",
			prevEl: ".kk_t1_prev",
		},

		thumbs: {
			swiper: kk_t1_preview_slider_active,
		},

	});


	

}

/* 
	blog-1-active
*/
if($('.kk_b1_slider_active').length) {

	let kk_b1_slider_active = new Swiper('.kk_b1_slider_active', {
		loop: true,
		speed: 1000,
		slidesPerView: "auto",
		spaceBetween: 30,

		navigation: {
			nextEl: ".kk_b1_next",
			prevEl: ".kk_b1_prev",
		},
	});
	

}

/* 
	services-2-slider-active
*/
if($('.kk_s2_slider_active').length) {

	let kk_s2_slider_active = new Swiper('.kk_s2_slider_active', {
		loop: true,
		speed: 600,
		spaceBetween: 30,
		// autoplay: {
		//     delay: 5000,
		// },

		navigation: {
			nextEl: ".kk_s2_next",
			prevEl: ".kk_s2_prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},


		},
	});

}
/* 
	testimonial-2-slider-active
*/
if($('.kk_t2_slider_active').length) {

	let kk_t2_slider_active = new Swiper('.kk_t2_slider_active', {
		loop: true,
		speed: 600,
		slidesPerView: "auto",
		spaceBetween: 40,

		navigation: {
			nextEl: ".kk_t2_next",
			prevEl: ".kk_t2_prev",
		},

	});

}


/* 
	testimonial-3-active
*/
if ($('.kk_t3_preview_slider_active').length) {

	let kk_t3_preview_slider_active = new Swiper('.kk_t3_preview_slider_active', {
		speed: 1000,
		slidesPerView: "auto",
		spaceBetween: 0,
	});

	let kk_t3_slider_active = new Swiper('.kk_t3_slider_active', {
		speed: 1000,
		navigation: {
			nextEl: ".kk_t3_next",
			prevEl: ".kk_t3_prev",
		},

		autoplay: {
			delay: 5000,
		},

		thumbs: {
			swiper: kk_t3_preview_slider_active,
		},
	});

	let rotateAngle = 0;
	let previousIndex = 0;

	kk_t3_slider_active.on('slideChange', function () {
		const currentIndex = kk_t3_slider_active.activeIndex;

		if (currentIndex > previousIndex) {
			rotateAngle += 90;
		} else if (currentIndex < previousIndex) {
			rotateAngle -= 90;
		}

		previousIndex = currentIndex;

		$('.kk-testimonial-3-fan-shape img').css({
			'transform': `rotate(${rotateAngle}deg)`,
			'transition': 'transform 0.5s ease'
		});
	});
}


/* 
	projects-3-active
*/
if ($('.kk_p3_preview_slider_active').length) {

	let kk_p3_preview_slider_active = new Swiper('.kk_p3_preview_slider_active', {
		speed: 1000,
		slidesPerView: "auto",
		spaceBetween: 20,
	});

	let kk_p3_main_slider_active = new Swiper('.kk_p3_main_slider_active', {
		speed: 1000,
		effect: "creative",
		creativeEffect: {
		  prev: {
			shadow: true,
			translate: [0, 0, -800],
			rotate: [180, 0, 0],
		  },
		  next: {
			shadow: true,
			translate: [0, 0, -800],
			rotate: [-180, 0, 0],
		  },
		},

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".kk_p3_next",
			prevEl: ".kk_p3_prev",
		},
		thumbs: {
			swiper: kk_p3_preview_slider_active,
		},
	});


}

/* 
	contact-form-1
*/
if($(".form_step_2_btn").length) {
    $(".form_step_2_btn").on("click", function (e) {
        e.preventDefault();
        $(".multi_form_1").removeClass("active").addClass("d-none");
        $(".multi_form_2").removeClass("d-none").addClass("active");

        $(".step_number_1").addClass("active");
    });

    $(".form_prev_btn").on("click", function (e) {
        e.preventDefault();
        $(".multi_form_2").removeClass("active").addClass("d-none");
        $(".multi_form_1").removeClass("d-none").addClass("active");

        $(".step_number_1").removeClass("active");

    });

    $(".form_submit_btn").on("click", function (e) {
        e.preventDefault();
        $(".multi_form_2").removeClass("active").addClass("d-none");
        $(".multi_form_3").removeClass("d-none").addClass("active");

        $(".step_number_1").addClass("active");
        $(".step_number_2").addClass("active");
        $(".step_number_3").addClass("active");
    });
};


/* 
	price-3-toggle-class
*/
if($(".kk-price-3-toggle").length) {
	$('.kk-price-3-toggle').on('click', function () {
		$(".kk-price-3-toggle-btn").toggleClass('is-active');
		$('.price-wrap').toggleClass('is-active');
		$('.kk-price-3-toggle').toggleClass('is-active');
	});
}


$('.wa_marquee_left').marquee({
	speed: 15,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
})

$('.wa_marquee_left_not_pause').marquee({
	speed: 15,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: false,
})
$('.wa_marquee_right').marquee({
	speed: 15,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: true,
})


// placeholder-typing
document.querySelectorAll(".wa-placeholder").forEach(waPlaceholderInput => {
	const waPlaceholderText = waPlaceholderInput.placeholder; 
	const waStartDelay = waPlaceholderInput.dataset.startDelay ? parseInt(waPlaceholderInput.dataset.startDelay) : 0; 
	let waPlaceholderIndex = 0;
	waPlaceholderInput.placeholder = "";

	const waPlaceholderObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				waPlaceholderType();
				waPlaceholderObserver.unobserve(waPlaceholderInput);
			}
		});
	}, { threshold: 0.5 });

	setTimeout(() => {
		waPlaceholderObserver.observe(waPlaceholderInput);
	}, waStartDelay);

	function waPlaceholderType() {
		if (waPlaceholderIndex < waPlaceholderText.length) {
			waPlaceholderInput.placeholder += waPlaceholderText.charAt(waPlaceholderIndex);
			waPlaceholderIndex++;
			setTimeout(waPlaceholderType, 70); 
		}
	}
});

if ($(".wa_height_set").length) { 
	const wa_height_set = document.querySelector('.wa_height_set');
	const wa_height_get = document.querySelector('.wa_height_get');
	function setDynamicHeight() {
	if (wa_height_get && wa_height_set) {
		wa_height_set.style.height = wa_height_get.offsetHeight + 'px';
	}
	}
	setDynamicHeight();
	window.addEventListener('resize', setDynamicHeight);
}


/* 
	magnetic-item-animation
*/
if ($(".wa-magnetic").length) {
    var waMagnets = document.querySelectorAll('.wa-magnetic');
    var waStrength = 100;

    waMagnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet);
        magnet.addEventListener('mouseout', function(event) {
            gsap.to(event.currentTarget, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1,0.3)"
            });
        });
    });

    function moveMagnet(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();

        gsap.to(magnetButton, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength,
            duration: 1,
            ease: "elastic.out(1,0.3)"
        });
    }
}

/* 
	magnetic-button-animation
*/
if ($(".wa-magnetic-btn").length) {
    var waMagnets = document.querySelectorAll('.wa-magnetic-btn');
    var waStrength = 30;

    waMagnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet);
        magnet.addEventListener('mouseout', function(event) {
            gsap.to(event.currentTarget, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1,0.3)"
            });
        });
    });

    function moveMagnet(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();

        gsap.to(magnetButton, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength,
            duration: 1,
            ease: "elastic.out(1,0.3)"
        });
    }
}



/* 
	mouse-move-animation-function
*/
document.addEventListener("mousemove", parallax);
function parallax(e) {
	document.querySelectorAll(".wa_moving_elm").forEach(function (move) {
	var moving_value = move.getAttribute("data-value");
	var x = (e.clientX * moving_value) / 250;
	var y = (e.clientY * moving_value) / 250;

	move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
	});
}



/* 
	counter-activation
*/
$('.counter').counterUp({
	delay: 10,
	time: 5000
});

if($(".wa-counter").length) {
    let elements = document.querySelectorAll(".wa-counter");

    elements.forEach(element => {
        let innerWidth = element.clientWidth;
        element.style.width = innerWidth + "px";
    });
}

/* 
	bootstrap-tooltip-activation
*/
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

/* 
	back-to-top-button-function
*/
if ($('.wa_backToTop').length) {
    var scrollTopbtn = document.querySelector('.wa_backToTop');
    var offset = 500; 
    var duration = 1000; 

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $(scrollTopbtn).addClass('active');
        } else {
            $(scrollTopbtn).removeClass('active');
        }
    });

    $(scrollTopbtn).on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration, 'swing');
    });
}

/* 
	popup-video-activation
*/
if($('.popup_video').length) {
	$('.popup_video').magnificPopup({
		type: 'iframe'
	});
}

/* 
	popup-image-activation
*/
if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

/* 
	faqs-8-active-class
*/
$(document).on('click', '.tn-accordion-item', function(){
	$(this).addClass('active').siblings().removeClass('active')
})

/* 
	nice-selector-activation
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}


/* 
	background-image-function
*/
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})





/* 
	current-year-function
*/
if ($('.copyright-year').length) {
    const currentYear = new Date().getFullYear();
    $('.copyright-year').text(currentYear);
}


/* 
	cursor-animation
*/
class Cursor {
    constructor(options) {
        this.options = $.extend(true, {
            container: "body",
            speed: 0.5,
            ease: "expo.out",
            visibleTimeout: 300
        }, options);
        this.body = $(this.options.container);
        this.el = $('<div class="wa-cursor"></div>');
        this.text = $('<div class="wa-cursor-text"></div>');
        this.init();
    }

    init() {
        this.el.append(this.text);
        this.body.append(this.el);
        this.bind();
        this.move(-window.innerWidth, -window.innerHeight, 0);
    }

    bind() {
        const self = this;

        this.body.on('mouseleave', () => {
            self.hide();
        }).on('mouseenter', () => {
            self.show();
        }).on('mousemove', (e) => {
            this.pos = {
                x: this.stick ? this.stick.x - ((this.stick.x - e.clientX) * 0.15) : e.clientX,
                y: this.stick ? this.stick.y - ((this.stick.y - e.clientY) * 0.15) : e.clientY
            };
            this.update();
        }).on('mousedown', () => {
            self.setState('-active');
        }).on('mouseup', () => {
            self.removeState('-active');
        }).on('mouseenter', 'a,input,textarea,button', () => {
            self.setState('-pointer');
        }).on('mouseleave', 'a,input,textarea,button', () => {
            self.removeState('-pointer');
        }).on('mouseenter', 'iframe', () => {
            self.hide();
        }).on('mouseleave', 'iframe', () => {
            self.show();
        }).on('mouseenter', '[data-cursor]', function () {
            self.setState(this.dataset.cursor);
        }).on('mouseleave', '[data-cursor]', function () {
            self.removeState(this.dataset.cursor);
        }).on('mouseenter', '[data-cursor-text]', function () {
            self.setText(this.dataset.cursorText);
        }).on('mouseleave', '[data-cursor-text]', function () {
            self.removeText();
        }).on('mouseenter', '[data-cursor-stick]', function () {
            self.setStick(this.dataset.cursorStick);
        }).on('mouseleave', '[data-cursor-stick]', function () {
            self.removeStick();
        });
    }

    setState(state) {
        this.el.addClass(state);
    }

    removeState(state) {
        this.el.removeClass(state);
    }

    toggleState(state) {
        this.el.toggleClass(state);
    }

    setText(text) {
        this.text.html(text);
        this.el.addClass('-text');
    }

    removeText() {
        this.el.removeClass('-text');
    }

    setStick(el) {
        const target = $(el);
        const bound = target.get(0).getBoundingClientRect();
        this.stick = {
            y: bound.top + (target.height() / 2),
            x: bound.left + (target.width() / 2)
        };
        this.move(this.stick.x, this.stick.y, 5);
    }

    removeStick() {
        this.stick = false;
    }

    update() {
        this.move();
        this.show();
    }

    move(x, y, duration) {
        gsap.to(this.el, {
            x: x || this.pos.x,
            y: y || this.pos.y,
            force3D: true,
            overwrite: true,
            ease: this.options.ease,
            duration: this.visible ? (duration || this.options.speed) : 0
        });
    }

    show() {
        if (this.visible) return;
        clearInterval(this.visibleInt);
        this.el.addClass('-visible');
        this.visibleInt = setTimeout(() => this.visible = true);
    }

    hide() {
        clearInterval(this.visibleInt);
        this.el.removeClass('-visible');
        this.visibleInt = setTimeout(() => this.visible = false, this.options.visibleTimeout);
    }
}
const cursor = new Cursor();


})(jQuery);