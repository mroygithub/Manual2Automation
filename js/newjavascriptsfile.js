//Get the button


var mybutton = document.getElementById("myBtn");
      
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function copyClipboard(meth) {
    var elm = document.getElementById(meth);
    // for Internet Explorer

    if (document.body.createTextRange) {
       var range = document.body.createTextRange();
       range.moveToElementText(elm);
       range.select();
       document.execCommand("Copy");
       caller();
    }
    else if (window.getSelection) {
       // other browsers

       var selection = window.getSelection();
       var range = document.createRange();
       range.selectNodeContents(elm);
       selection.removeAllRanges();
       selection.addRange(range);
       document.execCommand("Copy");
       caller();
    }
 }

 $(document).bind("contextmenu",function(e) {
  e.preventDefault();
 });

 $(document).keydown(function(e){
  if(e.which === 123){
     return false;
  }
});

 