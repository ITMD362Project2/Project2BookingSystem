/*payment page submit*/

$('#payform').on('submit',
  function(e)
    {
      console.log('The form was submitted.');
       alert("Thank you!");
        e.preventDefault();
    }
 )
 
 /*Calculating cost of tickets*/
 $('#ticketSelection').on('submit',
    function costFunction()
      { 
        /*getting values entered by user for number of tickets*/
        var adultT=document.getElementById("ad").value;
        var childT=document.getElementById("ch").value;
        
        /*Determing total cost of tickets*/
        var total= 12.95*adultT + 6.95*childT;
        console.log('The total is:'+total);
        
      }
  
  )
  
  /*Displaying total on payment page*/
    var t = document.getElementById(tot);
    if(typeof t !== 'undefined' && t !== null) {
    document.getElementById(tot).innerHTML = total.toString();
      }
   


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
var loadFX = function() {
  $('html').addClass('fx');
};
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
          $(".address").append("DUO Theater Cinema ");
          $(".address").append(data.places[0]["place name"] + " ");
          $(".address").append(data.places[0]["state abbreviation"]);
//.replace
        },
        404: function() {
          $('label[for="zip"]').append(' <b>Are you sure about that ZIP code?</b>');
        }
      }
    }
    );
  }
});
