(function($){
	$.fn.tabs = function(){
		var tabs = this;
		
		if(tabs.length == 0) return tabs;
		
		tabs.find('.tab-title li').click(function(event){
			event.preventDefault();
			var id = $(this).attr('rel');
			tabs.find('.tab-title .active').removeClass('active');
			tabs.find('.tab-content').hide().filter('#' + id).show();
			$(this).addClass('active');
		});
		
		tabs.find('.tab-content').hide().filter('#' + tabs.find('.tab-title .active').attr('rel')).show();
		
		return this;
	}
})(jQuery);

$(document).ready(function(){
	$('.show-more > a').click(function(event){
		event.preventDefault();
		if($('.hide-ct').hasClass('stt-show')){
			$('.hide-ct').slideUp('slow');
			$('.hide-ct').removeClass('stt-show');
		}
		else{
			$('.hide-ct').slideDown('slow');
			$('.hide-ct').addClass('stt-show');
			$(this).addClass('stt-show');
		}
	});
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
	$('.tabs').tabs();
 });
 
 jQuery(window).resize(function(){
	if($(window).width() < 768){
		$('.menu').hide();
	}
	else{
		$('.menu').show();
	}
 })
