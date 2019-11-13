
$(document).ready(function(){

    $(document).on('click',

		('img[alt="prodSmImgPro"]'), function(){
		//console.log("I'm here");
			var src21 = $(this).attr('src');
			$('img[alt="prodImgPro"]').attr('src', src21);
	    }
    );

    $(document).on('click',

        ('.butPro'), function(){
			addtoPro();
			alert('Added to cart!');
		}

	);

//End quote doc ready
});

function imgPrintPro() {
	var def12 = '<h2><em>Click a pic,</em>Nick!</h2>';
	if ( imgSlct != 123e5 ) {
		$('.empMargPro').html('');
		$('.imgPro').show();
		$('.wordsPro').show();
		$('img[alt="prodImgPro').attr('src', objImg.items[imgSlct].Img);
		$('.wordsPro span:nth-child(1)').text('$'+ objImg.items[imgSlct].Price);
		$('.wordsPro span:nth-child(2)').text(objImg.items[imgSlct].Name);
		$('.descPro').text(objImg.items[imgSlct].Desc);
		$('.smallImgPro img:first-child').attr('src', objImg.items[imgSlct].Img);
	} else {
		$('.empMargPro').html(def12);
		$('.imgPro').hide();
		$('.wordsPro').hide();
	}
}

function addtoPro() {
	if ( cartStk.length == 0 ) {
		cartStk.push(imgSlct);
		cartQty.push(1);
	} else {
		var i, cnt12=0;
		for ( i = 0 ; i < cartStk.length ; i++ ) {
			if ( cartStk[i] == imgSlct ) {
				cnt12 += 1
			}
		}
		if ( cnt12 == 0 ) {
			cartStk.push(imgSlct);
			cartQty.push(1);
		}
	}
}
