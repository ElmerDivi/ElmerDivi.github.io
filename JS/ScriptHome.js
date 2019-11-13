
var objImg = {};
//To store JSON data
var favClck = [];
//To store if the item is selected
var imgSlct = 123e5;
//To check which image is selected
//Used for product page

$(document).ready(function(){

$.getJSON("Items1.json", function(data,status1){
    if (status1 == "success") {
        objImg = data;
        imgPrintHome();
    }
});

//Scroll Stuff
$(window).scroll(function(){
    if ($(document).scrollTop() > 250) {
        $('.imgH3').fadeIn('slow');
	$('.imgh3').css('display', 'block');
    } else {
        $('.imgH3').fadeOut('slow');
	//$('.gh3').css('display', 'none');
    }
});

/*
$('img[alt="fav12"]').hover(function(){
        $(this).attr('src', 'Img/favIconGld.png');
    },
    function(){
        $(this).attr('src', 'Img/favIcon.png');
});
*/

//fav Icon on images
$(document).on('click',

('img[alt*="favIconI"]'), function(){
    var key2 = $(this).attr('alt');
    var idx2 = key2.substr(8);
    //console.log(index2);
    if ( favClck[idx2] == 0 ) {
        $(this).attr('src', 'Img/favIconGld.png');
        favClck[idx2] = 1;
    } else {
        $(this).attr('src', 'Img/favIcon.png');
        favClck[idx2] = 0;
    }
});

//Redirect to Product pane
$(document).on('click',

('.imgH12'), function(){
    var key2 = $(this).attr('id');
    imgSlct = key2.substr(2);
    //console.log(imgSlct);
    $('.contentHome').hide();
    imgPrintPro();
    $('.contentPro').show();
});

//End quote doc ready
});

function imgPrintHome() {
    var i,txt2 = "",cls = '';
    var len = objImg.items.length;
    for(i = 0; i < len;i++){
	if ( i == len - 3) {
	    cls = ' imgH3';
	}
	favClck.push(0);
	//To initialise fav icon
        txt2 += '<div class="imgH1'+cls+'">' +
        '<img src="' + objImg.items[i].Img +
        '" alt="prodImgHome">' +
        '<div class="imgH12" id="IH'+i+'">' +
        '<span>From $'+objImg.items[i].Price+'</span>' +
        '<span>'+objImg.items[i].Name+'</span>' +
        '</div>' +
        '<img src="Img/favIcon.png" alt="favIconI'+i+'">' +
				'</div>';
    }
    //console.log(txt2);
    $('.contentHome').html(txt2);
}
