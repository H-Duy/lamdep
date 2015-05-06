$(document).ready(function(){
	$('.btn-toggle').click(function(){
		if($(window).width() < 768){
			$('ul.menu').slideToggle('slow');
		}
	});
	$('.slider .new-slider').bxSlider({
		auto: true,
		caption: true,
		mode: 'fade'
	});
	$('.slider .impress-slider').bxSlider({
		auto: true,
		caption: true,
		mode: 'fade'
	});
 });
 
 jQuery(window).resize(function(){
	if($(window).width() < 768){
		$('.menu').hide();
	}
	else{
		$('.menu').show();
	}
 })
