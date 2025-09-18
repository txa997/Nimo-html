/*
	Template Name: Nimo - Digital Agency HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";
    
/* 
	services-4-hover-active
*/
$(".nm-services-4-item").on("mouseover", function(){
	var current_class = document.getElementsByClassName("nm-services-4-item active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});
    
/* 
	team-4-hover-active
*/
$(".nm-team-4-member").on("mouseover", function(){
	var current_class = document.getElementsByClassName("nm-team-4-member active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});

/* 
	price-4-toggle-class
*/
if($(".nm-price-4-toggle-btn").length) {
	$('.nm-price-4-toggle-btn').on('click', function () {
		$(".nm-price-4-toggle-btn").toggleClass('is-active');
		$('.price-wrap').toggleClass('is-active');
	});
}

/* 
	hover-elm-moving
*/
if ($(".wa_magnetic_btn_v2-1").length) {
    var waMagnets2v2 = document.querySelectorAll('.wa_magnetic_btn_v2-1');
    var waStrength2v2 = 30;

    waMagnets2v2.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet2);
        magnet.addEventListener('mouseout', function(event) {
            const innerElements = event.currentTarget.querySelectorAll('.wa_magnetic_btn_v2-1_elm');
            innerElements.forEach((elm) => {
                gsap.to(elm, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "ease1"
                });
            });
        });
    });

    function moveMagnet2(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();
        const innerElements = magnetButton.querySelectorAll('.wa_magnetic_btn_v2-1_elm');

        const xMove = (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength2v2;
        const yMove = (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength2v2;

        innerElements.forEach((elm) => {
            gsap.to(elm, {
                x: xMove,
                y: yMove,
                duration: 1,
                ease: "ease1"
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", function () { 
		// section-title-8
		if($(".nm-split2-1").length) {
			var split8 = $(".nm-split2-1");
			if(split8.length == 0) return; gsap.registerPlugin(SplitText); split8.each(function(index, el) {
	
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
	
				// gsap.set(el, { perspective: 400 });
	
				if( $(el).hasClass('nm-split2-1') ){
					gsap.set(el.split.chars, {
						yPercent: 120,
					});
				}
	
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						toggleActions: 'play none none reverse',
					},
					yPercent: 0,
					opacity: 1,
					duration:.5,
					ease: "ease1",
					stagger: 0.003,
					delay: .8,
				});
	
			});
		}

		/* 
			hero-4-title-animation
		*/
		if($(".wa-split-up2hero").length) {
			var waSplitup2hero = $(".wa-split-up2hero");
			if(waSplitup2hero.length == 0) return; gsap.registerPlugin(SplitText); waSplitup2hero.each(function(index, el) {

				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line",
				});

				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0; 

				if( $(el).hasClass('wa-split-up2hero') ){
					gsap.set(el.split.chars, {
						scaleY: 1.5, 
						opacity: 0,
					});
				}

				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						toggleActions: 'play none none reverse',
					},
					opacity: 1,
					scaleY: 1, 
					duration: .6,
					ease: "ease1",
					stagger: -0.08,
					delay: delayValue, 
				});

			});
		}

		
		/* 
			hero-4-title-animation
		*/
		if($(".wa-split-up2").length) {
			var waSplitup2 = $(".wa-split-up2");
			if(waSplitup2.length == 0) return; gsap.registerPlugin(SplitText); waSplitup2.each(function(index, el) {

				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line",
				});

				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0; 

				if( $(el).hasClass('wa-split-up2') ){
					gsap.set(el.split.chars, {
						scaleY: 1.5, 
						opacity: 0,
					});
				}

				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 86%",
						toggleActions: 'play none none reverse',
					},
					opacity: 1,
					scaleY: 1, 
					duration: .4,
					ease: "ease1",
					stagger: -0.1,
					delay: delayValue, 
				});

			});
		}

		// section-title-8
		if($(".nm-split2-3").length) {
			var split83 = $(".nm-split2-3");
			if(split83.length == 0) return; gsap.registerPlugin(SplitText); split83.each(function(index, el) {
	
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
	
				// gsap.set(el, { perspective: 400 });
	
				if( $(el).hasClass('nm-split2-3') ){
					gsap.set(el.split.chars, {
						yPercent: 120,
					});
				}
	
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 80%",
						toggleActions: 'play none none reverse',
					},
					yPercent: 0,
					opacity: 1,
					duration:.3,
					ease: "ease1",
					stagger: 0.3,
				});
	
			});
		}
})


/* 
	button-4-animation
*/
if (document.querySelectorAll(".nm-pr-btn-4").length) {
    document.querySelectorAll(".nm-pr-btn-4").forEach(btn => {
        const icon = btn.querySelector(".icon");
        const text = btn.querySelector(".text");

        function hoverEnter() {
            gsap.timeline()
                .to(icon, { left: "-100%", duration: 0.3, ease: "power4.in" })
                .to(icon, { left: "calc(100% - 44px)", rotation: -45, duration: 0.2, ease: "power4.in" });
            gsap.to(text, { x: -35, duration: 0.3, ease: "power4.in" });
        }

        function hoverLeave() {
            gsap.timeline()
                .to(icon, { left: "calc(200% - 44px)", duration: 0.3, ease: "power4.out" })
                .to(icon, { left: "3%", rotation: 0, duration: 0.2, ease: "power4.out" });
            gsap.to(text, { x: 0, duration: 0.3, ease: "power4.out" });
        }

        btn.addEventListener("mouseenter", hoverEnter);
        btn.addEventListener("mouseleave", hoverLeave);
    });
}




/* 
	services-19-slider-activation
*/
if($(".t4_slider_active").length) {
	var t4_slider_active = new Swiper(".t4_slider_active", {
		loop: true,
		slidesPerView: "auto",
		spaceBetween: 24,

		autoplay: {
            delay: 5000,
        },

		navigation: {
			nextEl: ".t4_btn_next",
			prevEl: ".t4_btn_prev",
		},

		pagination: {
			el: ".t4_slider_pagi",
			clickable: true,
		},
	});
}

if (window.matchMedia("(min-width: 1200px)").matches) { 
	var award4img = gsap.timeline({
		scrollTrigger: {
			trigger: ".nm-award-4-wrap",
			start: "top 80%",
			// end: "top -20%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	});

	award4img.to(".nm-award-4-img", {
		y: 300,
	});
}


})(jQuery);


