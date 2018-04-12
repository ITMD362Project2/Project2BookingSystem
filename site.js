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
});

//search by Geolocation
var x = document.getElementById("geo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&key=AIzaSyA906jzwtnuC-NhutysGF95o0sn0_dFirk";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
    }
}

//Search by zip Code

//$(document).ready(function(){
//  $("#showtime").hide();

var theater = function() {
  $('html').addClass('fx');
};
setTimeout(theater, 500);

$('.zipcode').on('click', function() {
  $(this).find('input').focus();
});

$('#zip').on('keyup', function(e) {
  var zip = $(this).val();
  if (zip.length === 5) {
    $.ajax({
      url: 'http://api.zippopotam.us/us/' + zip,
      statusCode: {
        200: function(data) {
          $("#address").prepend("DUO Theater Cinema ");
          $("#address").append(data.places[0]["place name"] + ", ");
          $("#address").append(data.places[0]["state abbreviation"]);
          //$("#showtime1").append(<input type="submit" name="submit" class="showtime" value="10:00 am"
            // onclick="window.location.href='ticketType.html'"/>)
          //$("#showtime2").append(<input type="submit" name="submit" class="showtime" value="2:50 pm"
            // onclick="window.location.href='ticketType.html'"/>)
          //$("#showtime3").append(<input type="submit" name="submit" class="showtime" value="5:15 pm"
            // onclick="window.location.href='ticketType.html'"/>)
          //to make the showtimes appear
          //  $("#showtime").show();
          },
              //if the zipcode is invalid
        404: function() {
          $('label[for="zip"]').append(' <b>Are you sure about that ZIP code?</b>');
        }
      }
    }
    );
  }
});
