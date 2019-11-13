
$(document).ready(function(){

//Hover over socio

var img = [];
img.push('pint');
img.push('fb');
img.push('twit');
img.push('insta');

function socioImg(x){
    $('img[src*='+x+']').hover(function(){
        $(this).attr('src', 'Img/'+x+'Gld.png');
    },
    function(){
        $(this).attr('src', 'Img/'+x+'.png');
    });
}

for(i = 0;i < img.length;i++) {
    socioImg(img[i]);
}

//Discount
$('.buttoNav').children().first().hover(function(){
        $(this).removeClass('disC');
    },
    function(){
        $(this).addClass('disC');
});

//Start of page
$('.contentHome').show();
$('.contentFav').hide();
$('.contentCart').hide();
$('.contentPro').hide();
$('#searchBar').hide();
$('img[alt="playPro"]').hide();
$('.vidPro').hide();
//$('.imgH3').hide();

//Navigation Lnks

$('#HLnk').click(function(){
    $('.contentHome').show();
    $('.contentFav').hide();
    $('.contentCart').hide();
    $('.contentPro').hide();
});

$('#FLnk, #FLnk2').click(function(){
    $('.contentHome').hide();
    $('.contentFav').show();
    $('.contentCart').hide();
    $('.contentPro').hide();
    imgPrintFav();
});

$('#CLnk, #CLnk2').click(function(){
    $('.contentHome').hide();
    $('.contentFav').hide();
    $('.contentCart').show();
    $('.contentPro').hide();
    imgPrintCart();
    imgPrintCardCart();
    QtySet();
    totalCart();
});

$('#PLnk').click(function(){
    $('.contentHome').hide();
    $('.contentFav').hide();
    $('.contentCart').hide();
    $('.contentPro').show();
    imgPrintPro();
});

/*
$(this).toggle(function(){
	$(this).text().toLowerCase().indexOf(value1) > -1);
$(this).parents('.imgH1');
}
*/

//La search
$(document).on('keyup',

('input[name="searchAll"]'), function() {
    //console.log('Hello');
    var value1 = $(this).val().toLowerCase();
    $('.imgH1').filter(function() {
	$(this).toggle($(this).text().toLowerCase().indexOf(value1) > -1)
    });
    $('.cardFav').filter(function() {
	$(this).toggle($(this).text().toLowerCase().indexOf(value1) > -1)
    });
    $('#tableBod tr').filter(function() {
	$(this).toggle($(this).text().toLowerCase().indexOf(value1) > -1)
    });
});

//Show search
$(document).on('click',

('.subnav a'), function() {
    //console.log("I'm here");
    $('#searchBar').show('slow');
    /*
    $('.contentHome').show();
    $('.contentFav').hide();
    $('.contentCart').hide();
    $('.contentPro').hide();
    */

});

//Close search
$(document).on('click',

('.closeBar'), function() {
    $('#searchBar').hide('slow');
    //clear Search results code
    $('input[name="searchAll"]').val('');
    $('.imgH1').filter(function() {
	$(this).toggle($(this).text().toLowerCase().indexOf('') > -1)
    });
    $('.cardFav').filter(function() {
	$(this).toggle($(this).text().toLowerCase().indexOf('') > -1)
    });
    $('#tableBod tr').filter(function() {
	$(this).toggle($(this).text().toLowerCase().indexOf('') > -1)
    });

});

$('.vidAlgn span').click(function() {
    //console.log('video close');
    pauseIt();
    $('.vidPro').slideUp('slow');
});

$('.playV').hover(function(){
    $('img[alt="playPro"]').fadeIn('slow');
},
function(){
    $('img[alt="playPro"]').fadeOut('slow');
});

$('img[alt="playPro"]').click(function(){
    $('.vidPro').show('slow');
});

//End quote doc ready
});


function pauseIt() {
    var LWCTY2 = document.getElementById('LWCTY');
    LWCTY2.pause();
}
