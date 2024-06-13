function showMore(index) {
	var card = document.getElementById("card" + index);
	card.style.whiteSpace = "normal";
	card.style.overflow = "visible";
	var moreBtn = document.getElementById("cardbtn" + index);
	moreBtn.style.display = "none";
}