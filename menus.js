/*
	CWB-205 Complete Web Scripting
	Final Project: Flashcard Game

	Author: Toni Owens
	Date: 11/30/14

	Filename: 			flashcards.htm
	Supporting Files: 	[tbd]

================================================================================
Function List:

main()
	Sets variables, arrays, calls the functions neccessary for the functioning
	of the flashcard resource menus.

[x]moveMenu()
	Moves the active menu from one to another.

changeMenu()
	Opens or changes the active menu.

closeMenu()
	Closes the active menu.

================================================================================
Global Variable List:

activeMenu
	Object: Points to the currently active/open menu.
*/

window.onload = main;

var activeMenu = null;

function main() {
	var menus = new Array();
	var allElements = document.getElementsByTagName("*");

	// Add elements that have class .menu to the menus[] array
	for (var i = 0; i < allElements.length; i++) {
		if (allElements[i].className = "menu") {
			menus.push(allElements[i]);
		}
	}

	// Attach events for the menus
	for (var i = 0; i < menus.length; i++) {
		menus[i].onclick = moveMenu;
		menus[i].onmouseover = changeMenu;
	}
}

function moveMenu() {
	// This function moves the menu from one title to another

	if (activeMenu) {
		closeMenu();

		menuID = this.id + "list";
		activeMenu = document.getElementById(menuID);
		activeMenu.style.display = "block";
	}
}

function changeMenu() {
	// This function changes the menu currently displayed.

	closeMenu();

	menuID = this.id + "list";
	activeMenu = document.getElementById(menuID);
	activeMenu.style.display = "block";
}

function closeMenu() {
	if (activeMenu) {
		activeMenu.style.display = "none";
		activeMenu = null;
	}
}