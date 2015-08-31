var position = document.querySelector(".console");

document.addEventListener("readystatechange", function(){
	console.log("readyState : " + document.readyState);
	var newEl = document.createElement('li');
	var newText = document.createTextNode("readyState : " + document.readyState);
	newEl.appendChild(newText);
	newEl.setAttribute("class", "readyState");
	position.appendChild(newEl);
	newEl.style.opacity = 1;
}, false);

document.addEventListener("DOMContentLoaded", function(){
	console.log("DOMContentLoaded");
	var newEl = document.createElement('li');
	newEl.setAttribute("class", "DOMContentLoaded");
	var newText = document.createTextNode("DOMContentLoaded");
	newEl.appendChild(newText);
	position.appendChild(newEl);
}, false);

window.addEventListener("load", function(){
	console.log("loaded");
	var newEl = document.createElement("li");
	newEl.setAttribute("class", "loaded");
	var newText = document.createTextNode("loaded");
	newEl.appendChild(newText);
	position.appendChild(newEl);
}, false);

