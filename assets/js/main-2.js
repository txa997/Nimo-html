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



})(jQuery);


