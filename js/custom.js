$(document).ready(function(){
	$('.btn-toggle').click(function(){
		if($(window).width() < 768){
			$('ul.menu').slideToggle('slow');
		}
	});
	$('.article-slide').bxSlider({
		controls: true
	});
	$('.comment-slide').bxSlider({
		controls: true
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

	$('a.btn-backtop').click(function(even){
		even.preventDefault();
		$('html').animate({
			scrollTop: 0
		},1000);
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
