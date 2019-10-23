// JavaScript Document

var btn = document.getElementById("modal-button");

var modal = document.getElementById("modal");

var modalBackground = document.getElementById("modal-background");

var modalContent = document.getElementById("modal-content");

var btnClose = document.getElementById("modal-close-btn");

btn.addEventListener ("click", btnClick => {
	modal.classList.add("modal-visible");
	modalBackground.classList.add("modal-background-visibile");
	modalContent.classList.add("modal-content-visible");
});

btnClose.addEventListener ("click", btnClickClose => {
	modal.classList.remove("modal-visible");
	modalBackground.classList.remove("modal-background-visibile");
	modalContent.classList.remove("modal-content-visible");
});