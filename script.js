const basic = document.querySelector(".basic");
const pro = document.querySelector(".pro");
const premium = document.querySelector(".premium");
const cards = document.querySelectorAll(".card");

// progress bar
basic.addEventListener("mouseover", () => {
	document.querySelector(".users-progress").style.width = "5%";
	document.querySelector(".gb-progress").style.width = "8%";
	document.querySelector(".project-progress").style.width = "10%";
});

pro.addEventListener("mouseover", () => {
	document.querySelector(".users-progress").style.width = "25%";
	document.querySelector(".gb-progress").style.width = "50%";
	document.querySelector(".project-progress").style.width = "70%";
});

premium.addEventListener("mouseover", () => {
	document.querySelector(".users-progress").style.width = "100%";
	document.querySelector(".gb-progress").style.width = "100%";
	document.querySelector(".project-progress").style.width = "100%";
});

// reset progress bar 
cards.forEach((card) =>
	card.addEventListener("mouseleave", () => {
		document.querySelector(".users-progress").style.width = "0%";
		document.querySelector(".gb-progress").style.width = "0%";
		document.querySelector(".project-progress").style.width = "0%";
	})
);
