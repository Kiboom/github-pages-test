var posting_style = document.querySelector('.posting').style;
var posting_textbox_style = document.querySelector('.posting-textbox').style;
var posting_send_style = document.querySelector('.posting-send').style;


var posting_textbox = document.querySelector(".posting-textbox");

posting_textbox.addEventListener ('focus', function (event) { 

	posting_style.postion = "fixed";
    posting_style.height = '40px';
    posting_style.paddingRight = "65px";
    posting_textbox_style.width = '100%';
    posting_textbox_style.height = '27px';
    posting_send_style.opacity = 1;
    posting_send_style.right = "5px";

}, false);



var curPos = window.scrollY;

window.addEventListener ("scroll", function (event) {
    
    var top = this.scrollY;

    if (curPos < top) {
        posting_style.height = '26px';
        posting_style.paddingRight = "10px";
        posting_textbox_style.width = '99%';
        posting_textbox_style.height = '13px';
        posting_send_style.opacity = 0;
        posting_send_style.right = "-100px";
        curPos = scrollY;
    } /* else {
        posting_style.paddingRight = '65px';
        posting_send_style.right = '3px';
        curPos = scrollY;
    }*/
     
}, false);









