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
	price-4-toggle-class
*/
if($(".nm-price-4-toggle-btn").length) {
	$('.nm-price-4-toggle-btn').on('click', function () {
		$(".nm-price-4-toggle-btn").toggleClass('is-active');
		$('.price-wrap').toggleClass('is-active');
	});
}


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
		if($(".nm-split2-11").length) {
			var split8 = $(".nm-split2-1");
			if(split8.length == 0) return; gsap.registerPlugin(SplitText); split8.each(function(index, el) {
	
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
	
				// gsap.set(el, { perspective: 400 });
	
				if( $(el).hasClass('nm-split2-1') ){
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
					duration:1,
					ease: "ease1",
					stagger: 0.03,
				});
	
			});
		}

				/* 
			hero-1-title-animation
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
					stagger: -0.05,
					delay: delayValue, 
				});

			});
		}
})






})(jQuery);


