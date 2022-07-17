function scrollingPage() {
	if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
		document.getElementById("sticky-message").classList.add('visible');
	  } 
	  else {
		document.getElementById("sticky-message").classList.remove('visible');
	  }
}

/*============== Video ==============*/
// Get the modal
var modal = document.getElementById("myVideoModal");
var modalM = document.getElementById("myVideoModalM");

// Get the button that opens the modal
var btn = document.getElementById("myVideoButton");
var btnM = document.getElementById("myVideoButtonM");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("video-modal-close")[0];
var spanM = document.getElementsByClassName("video-modal-close-m")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks the button, open the modal on mobile
btnM.onclick = function() {
	modalM.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
spanM.onclick = function() {
	modalM.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalM.style.display = "none";
  }
}

/*============== End of Video ==============*/

/*============== Tabs Hoteles ==============*/

function openHotel(hotelName, elmnt) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
		tablinks[i].classList.remove("active-tab");
	}
	document.getElementById(hotelName).style.display = "block";
	elmnt.classList.add("active-tab");

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/*============== End tabs hoteles ==============*/

/*============== Gallery ==============*/

function openModal() {
	document.getElementById("myModal").style.display = "block";
	document.body.classList.add("no-scroll");
  }
  
  function closeModal() {
	document.getElementById("myModal").style.display = "none";
	document.body.classList.remove("no-scroll");
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	slides[slideIndex-1].classList.add("active-slide")
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
  }

/*============== End of gallery ==============*/