

var head12 = '<div class="headFav"><h2>Your picks<h2></div>';

var cartStk = [];
//Stores index of added products

$(document).ready(function(){

//Add to Cart
$(document).on('click',

('img[alt*="cartFav"]'), function(){
    var key3 = $(this).attr('alt');
    var idx3 = key3.substr(7);
    favClck[idx3] = 0;
    $('img[alt="favIconI'+idx3+'"]').attr('src', 'Img/favIcon.png');
    var i, cnt12=0;
    for ( i = 0 ; i < cartStk.length ; i++ ) {
        if ( cartStk[i] == idx3 ) {
	    cnt12 += 1
        }
    }
    //console.log(cnt12);
    if ( cnt12 == 0 ) {
        cartStk.push(idx3);
		cartQty.push(1);
    }
    imgPrintFav();
});

$(document).on('click',

("img[alt*='prodImgFav']"), function(){
    var key2 = $(this).attr('alt');
    imgSlct = key2.substr(10);
    //console.log(imgSlct);
    $('.contentFav').hide();
    imgPrintPro();
    $('.contentPro').show();
});

//End quote doc ready
});

function imgPrintFav() {
    var i, cnt = 0, txt3 = "";
    txt3 += head12;
    var len = objImg.items.length;
    for(i = 0; i < len;i++){
	if ( favClck[i] == 1 ) {
            txt3 += '<div class="cardFav">' +
	    '<img src="'+objImg.items[i].Img+'" alt="prodImgFav'+i+'">' +
	    '<div class="cardFavDown">' +
	    '<span>$'+objImg.items[i].Price+'</span>' +
	    '<span>'+objImg.items[i].Name+'</span>' +
	    '<img title="Add to Cart" src="Img/shopCart.png" alt="cartFav'+i+'">' +
	    '</div></div>';
	} else {
	    cnt += 1;
	}
    }
    if ( cnt == len) {
        txt3 = "<div class='empMargPro'></div><div class='headFav'>" +
	"<h3>Pick Something.</h3><h2><em>You're a choice millionaire!</em></h2></div>";
    }
    //console.log(txt2);
    $('.contentFav').html(txt3);
}


