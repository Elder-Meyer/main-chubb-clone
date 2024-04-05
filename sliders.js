// code for sliders
var slideIndex = 1;
showDivs(slideIndex, "slide-personas");
showDivs(slideIndex, "slide-empresas");
showDivs(slideIndex, "slide-corredores");

function plusDivs(n, className) {
  showDivs(slideIndex += n, className);
}

function showDivs(n, className) {
  var i;
  var x = document.getElementsByClassName(className);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}