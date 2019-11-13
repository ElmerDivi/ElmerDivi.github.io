
//var clckSmBar = 0;

$(document).ready(function(){
	//Mobile header bars button
	$(document).on('click',

		('img[alt="bars"]'), function() {
			//$('.navbar').css('display', 'block');
			$('.navbar').slideToggle('slow');
			//console.log("Here");


	});

	//Scrolling in my skin
	/*
	$('.scrollPane').mouseover(function() {
		$(this).scrollTop(0);
		console.log('Scroll');
	});
	*/

	//The navbar display
	//stackEx
	$( window ).resize(function() {
		if ($(window).width() > 425){
			$(".navbar").css("display", "block");
		} else {
			$(".navbar").css("display", "none");
		}
	});

	$( window ).resize(function() {
		if ($(window).width() > 768){
			$(".tableContainer").css("display", "block");
			$(".proCardCart").css("display", "none");
			QtySet();
		} else {
			$(".tableContainer").css("display", "none");
			$(".proCardCart").css("display", "block");
			QtySet();
		}
	});


//End quote doc ready
});
