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
 
 var total=0;
 /*$('#ticketSelection').on('submit',
    
    function costFunction()
      { 
        /*getting values entered by user for number of tickets*/
        var adultT=document.getElementById("ad").value;
        var childT=document.getElementById("ch").value;

        /*Determing total cost of tickets*/
        total= 12.95*adultT + 6.95*childT;
        /*console.log('The total is:'+total);
     }*/
    function displayCost()
      {
         $('#ticketSelection').on('submit',
         
          var adultT=document.getElementById("ad").value;
          var childT=document.getElementById("ch").value;

          /*Determing total cost of tickets*/
          total= 12.95*adultT + 6.95*childT;
          
          /*Displaying total on payment page*/
          var t = document.getElementById("tot");
          if(typeof t !== 'undefined' && t !== null) {
            document.getElementById("tot").innerHTML = total.toString();
        } 
      } 
    )




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

//To choose a movie

$(document).ready(function(){
  $("#showtime").hide();
});

//to make the showtimes appear when a movie is selected

$('#choices').change(function() {
    if(this.value == "blackpanther") {
        $("#showtime").show();
    } else if(this.value == "AWIT") {
        $("#showtime").show();
    }  else if(this.value == "redsparrow") {
          $("#showtime").show();
    }  else if(this.value == "tombraider") {
          $("#showtime").show();
    }  else if(this.value == "lovesimon") {
          $("#showtime").show();
    } else {
        $('#showtime').hide();
    }
});
