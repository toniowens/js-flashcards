/*
	CWB-205 Complete Web Scripting
	Final Project: Flashcard Game

	Author: Toni Owens
	Date: 11/30/14

	Filename: 			flashcards.js
	Supporting Files: 	[tbd]

================================================================================

*/

function addEvent(object, evName, fnName, cap) {
	if (object.attachEvent)
		object.attachEvent("on" + evName, fnName);
	else if (object.addEventListener)
		object.addEventListener(evName, fnName, cap);
}

addEvent(window, "load", main, false);

function main() {
	createGame(cardFront, cardBack);
}

function createGame(front, back) {
	var cardBox = document.getElementById("flashcards");

	// Insert a flashcard.
	var card = document.createElement("div");
	card.className = "card";
	card.id = "currentCard";

	card.front = document.createElement("p");
	card.front.id = "front";
	card.back = document.createElement("p");
	card.back.id = "back";
	card.index = 0;
	card.front.innerHTML = front[card.index];
	card.back.innerHTML = back[card.index];

	card.appendChild(card.front);
	cardBox.appendChild(card);

	var cardFooter = document.createElement("p");
	cardFooter.id = "cardFooter";

	var prevButton = document.createElement("input");
	prevButton.type = "image";
	prevButton.src = "prev.png";
	prevButton.alt = "Previous Card";

	var flipButton = document.createElement("input");
	flipButton.type = "image";
	flipButton.src = "flip.png";
	flipButton.alt = "Flip Card";

	var nextButton = document.createElement("input");
	nextButton.type = "image";
	nextButton.src = "next.png";
	nextButton.alt = "Next Card";

	cardFooter.appendChild(prevButton);
	cardFooter.appendChild(flipButton);
	cardFooter.appendChild(nextButton);
	cardBox.appendChild(cardFooter);
}

function flipCard() {
	var cardBox = document.getElementById("flashcards");
	var card = document.getElementById("currentCard");
}

function changeCard(card) {
	var cardBox = document.getElementById("flashcards");
	var oldCard = document.getElementById("currentCard");
	var cardFooter = document.getElementById("cardFooter");

	// Replace current card with new card
	var newCard = oldCard.cloneNode(true);
	newCard.front.innerHTML = card.front.innerHTML;
	cardBox.replaceChild(oldCard, newCard);
}