var posting_style = document.querySelector('.posting').style;
var posting_textbox_style = document.querySelector('.posting-textbox').style;
var posting_send_style = document.querySelector('.posting-send').style;


var posting_textbox = document.querySelector(".posting-textbox");

posting_textbox.addEventListener ('focus', function (event) { 

	posting_style.postion = "fixed";
    posting_style.height = '63px';
    posting_style.paddingRight = "65px";
    posting_textbox_style.width = '100%';
    posting_textbox_style.height = '35px';
    posting_send_style.right = '3px';

    var curPos = window.scrollY;

	window.addEventListener ("scroll", function (event) {
	    
	    var top = this.scrollY;

	    if (curPos < top) {
	        posting_style.height = '30px';
	        posting_style.paddingRight = "15px";
	        posting_textbox_style.width = '99%';
	        posting_textbox_style.height = '15px';
	        posting_send_style.right = '-70px';
	        curPos = scrollY;
	    } /* else {
	        posting_style.paddingRight = '65px';
	        posting_send_style.right = '3px';
	        curPos = scrollY;
	    }*/
	     
	}, false);

}, false);



var curPos = window.scrollY;

window.addEventListener ("scroll", function (event) {
    
    var top = this.scrollY;

    if (curPos < top) {
        posting_style.height = '30px';
        posting_style.paddingRight = "15px";
        posting_textbox_style.width = '99%';
        posting_textbox_style.height = '15px';
        posting_send_style.right = '-70px';
        curPos = scrollY;
    } /* else {
        posting_style.paddingRight = '65px';
        posting_send_style.right = '3px';
        curPos = scrollY;
    }*/
     
}, false);









