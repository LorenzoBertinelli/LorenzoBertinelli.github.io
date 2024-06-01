/*
javascript.js
*/

//Top Script
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 1px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
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

/*
//Settings Script
// When the user clicks on the button, 
// toggle between hiding and showing the dropdown content 
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.setting')) {
		var dropdowns = document.getElementsByClassName("setting-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function invertcolorFunction() {
	var element = document.body;
	element.classList.toggle("invert-color");
}
*/

/*
//Esami Universitari
function ANNOSCOLASTICO(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent"); // getElementsBy... serve per ottenere delle informazioni dalla pagina
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
*/



// COUNTER VIEW
var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_views");

// Check if page_view entry is present
if (visitCount) {
	visitCount = Number(visitCount) + 1;
	localStorage.setItem("page_views", visitCount);
}
else {
	visitCount = 1;
	localStorage.setItem("page_views", 1);
}

if (visitCount == 1) {
	counterContainer.innerHTML = visitCount + "&nbsp;TIME";
}
else {
	counterContainer.innerHTML = visitCount + "&nbsp;TIMES";
}
