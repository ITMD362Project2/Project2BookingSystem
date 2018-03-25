/*Displays picture upon click of dots*/

var slideIndex;


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsById("posters");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//Automatically changing images
/**var sIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsById("posters");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    sIndex++;
    if (sIndex > slides.length) {sIndex = 1} 
    slides[sIndex-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}*/
$(function(){
$("#slideshow > img:gt(0)").hide();

  setInterval(function() { 
  $('#slideshow > img:first')
    .fadeOut(1000)
    .next('img').fadeIn(1000)
    .end().appendTo('#slideshow');},  3000);
    
})
