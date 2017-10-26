$(document).ready(function () {
	var map = new GMaps({
		el: '#map',
		lat: 51.1615818,
		lng: 71.4296842,
		zoom: false,
		controls: false
	});
	map.addMarker({
		lat: 51.1615818,
		lng: 71.4296842,
		title: 'Lima',
	});

	$(".toggle-menu").click( function () {
		$(".overlay").fadeIn("fast")
		$("header nav").addClass("open-menu");
	});
	$(".close, .overlay").click( function () {
		$(".overlay").fadeOut("fast")
		$("header nav").removeClass("open-menu");
	});

	$("nav ul li a").click( function (e) {
		e.preventDefault();
		var href = $(this).attr("href")
		$("body, html").animate({
			scrollTop: $(href).find(".point_menu").offset().top - 50 + "px"
		}, 1000, "easeInQuint");
	})
	$(".more").click( function (e) {
		e.preventDefault();
		var href = $(this).attr("href")
		$("body, html").animate({
			scrollTop: $(href).offset().top 
		}, 1000, "easeInQuint");
	})
});

$(document).scroll (function () {
	if( $(document).scrollTop() > 0 ) {
		$(".wrapper-header").addClass("fixed");
		$(".logo").addClass("logo-fixed");
	} else {
		$(".wrapper-header").removeClass("fixed");
		$(".logo").removeClass("logo-fixed");
	}
	$("nav ul li a").each(function () {
		var href = $(this).attr("href")
		var target = $(href);
		if ( $(target).offset().top <= $(window).scrollTop() ) {
			$(this).parent("li").addClass("active")
		} else {
			$(this).parent("li").removeClass("active")
		}
	})
});

$(document).resize( function () {
	if ( $(window).width() > 992) {
		$("header nav").removeClass("open-menu");
	}
})