$(document).ready(function(){
	$('.btn-toggle').click(function(){
		if($(window).width() < 768){
			$('ul.menu').slideToggle('slow');
		}
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
