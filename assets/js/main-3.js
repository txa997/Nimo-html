(function ($) {
"use strict";

/* 
    marquee-activation
*/
$('.wa_marquee').each(function () {

	let $this = $(this);

	let speed = $this.data('speed') || 20;
	let direction = $this.data('direction') || 'left';
	let pauseOnHover = $this.data('pause');

	if (pauseOnHover === undefined) {
		pauseOnHover = false;
	}

	$this.marquee({
		speed: speed,
		gap: 0,
		delayBeforeStart: 0,
		startVisible: true,
		direction: direction,
		duplicated: true,
		pauseOnHover: pauseOnHover,
	});

});

// about-5-features
const featureItems = document.querySelectorAll('.nm-about-5-features-single');
featureItems.forEach(item => {
  item.addEventListener('click', function () {
    featureItems.forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});

})(jQuery);