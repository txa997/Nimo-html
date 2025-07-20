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
	duration: 1,
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

		CustomEase.create("ease1", "0, 0, 0.2, 1");

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
			wa-split-hero
		*/	
		if ($(".wa_split_hero").length) {
			var waSplitHero = $(".wa_split_hero");
			if (waSplitHero.length == 0) return;

			gsap.registerPlugin(SplitText);

			waSplitHero.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});

				gsap.set(el, { perspective: 400 });

				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0; 

				if ($(el).hasClass("wa_split_hero")) {
					gsap.set(el.split.chars, {
						rotateY: 90,
						opacity: 0,
					});
				}

				el.anim = gsap.to(el.split.chars, {
					rotateY: 0,
					opacity: 1,
					duration: 2,
					ease: "elastic.out(1,0)",
					stagger: 0.07,
					delay: delayValue, 
				});
			});
		}

		/* 
			section-title-1
		*/
		const wa_bg_position = new SplitText(".wa_bg_position", { type: "lines" });
		wa_bg_position.lines.forEach((target) => {
			gsap.to(target, {
				backgroundPositionX: 0,
				ease: "none",
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: 'top 85%',
					end: "bottom center"
				}
			});
		});
        


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
				offset:       50,
				mobile:       true,
				live:         true
			});
			wow.init();
		};

		


	})
});


// subtitle-1-plus
gsap.utils.toArray(".nm-about-1-line-plus .plus").forEach(element => {
	gsap.fromTo(
		element,
		{ rotation: 360 }, 
		{ 
			rotation: 0, 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: 3,    
				markers: false,     
			},
		}
	);
});

// subtitle-1-line
gsap.utils.toArray(".nm-about-1-line-border").forEach(element => {
	gsap.from(
		element,
		{ 
			scaleX: 0, 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				end: "top 60%",
				scrub: true,    
				markers: false,     
			},
		}
	);
});


/* 
	menu-link-animation
*/
if ($(".btn-split-right").length) {
    var splitButton1 = $(".btn-split-right a");
    gsap.registerPlugin(SplitText);

    splitButton1.each(function (index, el) {
        el.split = new SplitText(el, {
            type: "words,chars",
        });

        $(el).on("mouseenter", function () {
            el.split.chars.forEach((char, i) => {
                let yValue = i % 2 === 0 ? -180 : 180;

                gsap.fromTo(
                    char,
                    { rotateY: yValue, },
                    {
                        rotateY: 0,
                        opacity: 1,
                        duration: .7,
                        ease: "case1",
                    }
                );
            });
        });
    });
}


/* 
	firefly-animation
*/
const paths = document.querySelectorAll('.nm-Firefly-ani-svg path');

	paths.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
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
	sticky-card-animation
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
			waScale = 0.95 + 0.01 * waIndex;
			waRotation = -10;
		}
	
			gsap.to(waCard, {
				scale: waScale,
				// rotationX: waRotation,
				transformOrigin: "top center",
				ease: "none",
				scrollTrigger: {
				trigger: waWrapper,
				start: "top " + (120 + 50 * waIndex),
				end: "bottom 400",
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
	
	gsap.to(".nm-about-1-left-content", {
		scrollTrigger: {
			trigger: ".nm-about-1-area",
			start: "top 20%", 
			end: "bottom bottom", 
			pin: ".nm-about-1-left-content", 
			pinSpacing: false,
			markers: false
		}
	});
	
}

/* 
	faqs-1-contact-form-sticky-
*/
if (window.matchMedia("(min-width: 1400px)").matches) { 

	gsap.to(".nm-faqs-1-contact", {
		scrollTrigger: {
			trigger: ".nm-faqs-1-area",
			start: "top 10%", 
			end: "bottom bottom", 
			pin: ".nm-faqs-1-contact", 
			pinSpacing: false,
			markers: false
		}
	});
 }


/* 
	portfolio-1-animation
*/
if (window.matchMedia("(min-width: 992px)").matches) {
	var portfolio1animation = gsap.timeline({
		scrollTrigger: {
			trigger: ".p1_ani_trigger",
			start: "top 20%",
			end: "top -20%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	});

	portfolio1animation.from(".p1_ani_trigger_elm_1", {
		x: 710,
		y: -790,
		scale: 0.7,
		rotate: 4,
	});
	portfolio1animation.from(".p1_ani_trigger_elm_2", {
		x: -50,
		y: -790,
		scale: 0.7,
		rotate: -4,
	},"<=");
	portfolio1animation.from(".p1_ani_trigger_elm_3", {
		x: 730,
		y: -1250,
		scale: 0.7,
		rotate: -7,
	},"<=");
	portfolio1animation.from(".p1_ani_trigger_elm_4", {
		x: -30,
		y: -1250,
		scale: 0.7,
		rotate: 5,
	},"<=");
}

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".handshake-video video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause(); 
      }
    });
  }, {
    threshold: 0.5, 
  });

  observer.observe(video);
});

  

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
	team-1-slider-active
*/
if ($('.nm_t1_slider_active').length) {
	if (window.matchMedia("(min-width: 992px)").matches) {

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {

					const nm_t1_slider_active = new Swiper('.nm_t1_slider_active', {
						loop: true,
						speed: 1500,
						effect: "fade",
						fadeEffect: {
							crossFade: true
						},
						navigation: {
							nextEl: ".team1_slider_next",
							prevEl: ".team1_slider_prev",
						},
					});

					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.3, 
		});

		const target = document.querySelector('.nm_t1_slider_active');
		if (target) {
			observer.observe(target);
		}
	}
}


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
	blog-1-hover-active-class
*/
$(document).on("mouseenter", ".nm-blog-1-item", function () {
    $(".nm-blog-1-item").removeClass("active");

    $(this).addClass("active");
});


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
document.querySelectorAll(".wa_placeholder").forEach(waPlaceholderInput => {
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
if ($(".wa_magnetic").length) {
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
/* 
	magnetic-1 (on full button)
*/
if ($(".wa_magnetic_btn").length) {
    var waMagnets1 = document.querySelectorAll('.wa_magnetic_btn');
    var waStrength1 = 30;

    waMagnets1.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet1);
        magnet.addEventListener('mouseout', function(event) {
            gsap.to(event.currentTarget, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1,0.3)"
            });
        });
    });

    function moveMagnet1(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();

        gsap.to(magnetButton, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength1,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength1,
            duration: 1,
            ease: "elastic.out(1,0.3)"
        });
    }
}


/* 
	magnetic-2 (on inner elements only)
*/
if ($(".wa_magnetic_btn_2").length) {
    var waMagnets2 = document.querySelectorAll('.wa_magnetic_btn_2');
    var waStrength2 = 30;

    waMagnets2.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet2);
        magnet.addEventListener('mouseout', function(event) {
            const innerElements = event.currentTarget.querySelectorAll('.wa_magnetic_btn_2_elm');
            innerElements.forEach((elm) => {
                gsap.to(elm, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    });

    function moveMagnet2(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();
        const innerElements = magnetButton.querySelectorAll('.wa_magnetic_btn_2_elm');

        const xMove = (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength2;
        const yMove = (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength2;

        innerElements.forEach((elm) => {
            gsap.to(elm, {
                x: xMove,
                y: yMove,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        });
    }
}


/* 
	magnetic-3 (on inner elements only)
*/
if (window.matchMedia("(min-width: 992px)").matches) { 
	
}
if ($(".wa_magnetic_btn_3").length) {
    var waMagnets3 = document.querySelectorAll('.wa_magnetic_btn_3');
    var waStrength3 = 100;

    waMagnets3.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet3);
        magnet.addEventListener('mouseout', function(event) {
            const innerElements = event.currentTarget.querySelectorAll('.wa_magnetic_btn_3_elm');
            innerElements.forEach((elm) => {
                gsap.to(elm, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    });

    function moveMagnet3(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();
        const innerElements = magnetButton.querySelectorAll('.wa_magnetic_btn_3_elm');

        const xMove = (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength3;
        const yMove = (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength3;

        innerElements.forEach((elm) => {
            gsap.to(elm, {
                x: xMove,
                y: yMove,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
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
$(document).on('click', '.wa_accordion_item', function(){
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