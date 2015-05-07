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
 });
 
 jQuery(window).resize(function(){
	if($(window).width() < 768){
		$('.menu').hide();
	}
	else{
		$('.menu').show();
	}
 })
