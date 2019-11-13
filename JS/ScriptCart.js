
$(document).ready(function(){

$('.cartButton').click(function(){
    alert('Thank you for shopping with us!');
});

//Calculate Total dynamically
$(document).on('change',

('input[id*="numb"]'), function(){
    //console.log("I'm here");
    var i, b;
    for(i = 0; i < cartQty.length;i++) {
        b = $('input[id="numb'+i+'"]').val();
	//console.log(b);
	cartQty[i] = b;
    }
    totalCart();
});

$(document).on('change',

('input[id*="nuMB"]'), function(){
    //console.log("I'm here");
    var i, b;
    for(i = 0; i < cartQty.length;i++) {
        b = $('input[id="nuMB'+i+'"]').val();
	//console.log(b);
	cartQty[i] = b;
    }
    totalCart();
});


$(document).on('click',

("img[alt*='delCart']"), function(){
    var key2 = $(this).attr('alt');
    var idx5= key2.substr(7);
    cartStk.splice(idx5, 1);
    cartQty.splice(idx5, 1);
    imgPrintCart();
    imgPrintCardCart();
    QtySet();
    totalCart();
});

//End quote doc ready
});

var tableHead = "<thead><tr><th></th>" +
"<th>Name</th>" +
"<th>Price</th>" +
"<th>Quantity</th>" +
"</tr></thead><tbody id='tableBod'>";

var cartQty = [];
//To store quantity
//So total can be calculated

function imgPrintCart() {
    var i, m, txt3 = "";
    txt3 += tableHead;
    var len = cartStk.length;
    for(i = 0; i < len;i++){
	//cartQty.push(1);
	//Qty initialisation
	m = cartStk[i];
        txt3 += '<tr><td>' +
	'<img src="'+objImg.items[m].Img+'" alt="prodImgCart">' +
	'</td><td>' +
	objImg.items[m].Name + '</td><td>' +
	'$' + objImg.items[m].Price+ '</td><td>' +
        '<span class="qtyBox">Qty</span>' +
	'<input type="number" name="Qty" min="1" value="1" id="numb'+i+'">' +
	'<img src="Img/deleteIcon.png" alt="delCart'+i+'">' +
	'</td></tr>';
    }
    //console.log(txt2);
    txt3 += "</tbody>";
    $('#cartTable').html(txt3);
}

function imgPrintCardCart() {
    var i, m, txt3 = "";
    var len = cartStk.length;
    for(i = 0; i < len;i++){
	//cartQty.push(1);
	//Qty initialisation
	m = cartStk[i];
        txt3 +=
	'<div class="proCC clearfix"><div class="imgCC">' +
	'<img src="'+objImg.items[m].Img+'" alt="prodImgCart">' +
	'</div><div class="cbCC"><div class="contCC">' +
	'<span>' + objImg.items[m].Name +
	'</span><span>' +
	'$' + objImg.items[m].Price+ '</span>' +
	'</div><div class="butCC">' +
        '<span class="qtyBox">Qty</span>' +
	'<input type="number" name="Qty" min="1" value="1" id="nuMB'+i+'">' +
	'<img src="Img/deleteIcon.png" alt="delCart'+i+'">' +
	'</div></div></div>';
    }
    //console.log(txt3);
    $('.proCardCart').html(txt3);
}

function totalCart() {
    var i, k=0;
    for(i=0;i < cartStk.length;i++) {
	k += Number(objImg.items[cartStk[i]].Price) * Number(cartQty[i]);
    }
    $('.totalCrt1').text('$'+k);
}

function QtySet() {
    var i;
    for(i = 0; i < cartQty.length;i++) {
	$('input[id="numb'+i+'"]').val(cartQty[i]);
	$('input[id="nuMB'+i+'"]').val(cartQty[i]);
	//console.log(b);
	//cartQty[i] = b;
    }

}
