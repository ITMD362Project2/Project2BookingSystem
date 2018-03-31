/*Displays picture upon click of dots*/

var slideIndex;


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("posters");
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

//Automatically playing slideshow

$(function(){
$("#slideshow > figure:gt(0)").hide();

  setInterval(function() {
  $('#slideshow > figure:first')
    .fadeOut(1000)
    .next('figure').fadeIn(1000)
    .end().appendTo('#slideshow');},  5000);

})

//Search by zip Code
var loadFX = function() {
  $('html').addClass('fx');
}
setTimeout(loadFX, 500);

$('#zip').on('keyup', function(e) {
  // On a keyup event, ...
  var zip = $(this).val();
  if (zip.length === 5) {
    $('label b').remove();
    $.ajax({
      url: 'http://api.zippopotam.us/us/' + zip,
      statusCode: {
        200: function(data) {
          $(".address").append("DUO Theater Cinema ")
          $(".address").append(data.places[0]["place name"] + ", ")
          $(".address").append(data.places[0]["state abbreviation"])

        },
        404: function() {
          $('label[for="zip"]').append(' <b>Are you sure about that ZIP code?</b>');
        }
      }
    }
    );
  }
});
