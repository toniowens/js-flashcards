/*
	CWB-205 Complete Web Scripting
	Final Project: Flashcard Game

	Author: Toni Owens
	Date: 11/30/14

	Filename: 			flashcarddata.js
	Supporting Files: 	[tbd]

================================================================================

	This file defines the following arrays for the flashcard game:

	linkList[]
		Contains a list of the titles for the sidebar.

	frenchFront[]
		Contains the front sides of all the French flashcards.

	frenchBack[]
		Contains the back sides of all the French flashcards.

	frontSets[]
		Contains the arrays of card fronts.

	backSets[]
		Contains the arrays of card backs.

*/

var linkList = [];
linkList[0] = "French Language";
linkList[1] = "Presidents of the United States";
linkList[2] = "Cell Biology";

var frenchFront = [];
frenchFront[0] = "&Agrave; bient&ocirc;t";
frenchFront[1] = "Au revoir";
frenchFront[2] = "Bon apr&egrave;s-midi";
frenchFront[3] = "Bonjour";
frenchFront[4] = "Bon soir";
frenchFront[5] = "Comment vous appelez-vous?";
frenchFront[6] = "D'o&ugrave; venez-vous?";
frenchFront[7] = "Merci";
frenchFront[8] = "&Ccedil;a va?";
frenchFront[9] = "&Eacute;galement";
frenchFront[10] = "Enchant&eacute;(e)";
frenchFront[11] = "Je m'appelle";
frenchFront[12] = "Je";
frenchFront[13] = "Tu";
frenchFront[14] = "Il/Elle";

var frenchBack = [];
frenchBack[0] = "See you soon";
frenchBack[1] = "Goodbye";
frenchBack[2] = "Good afternoon";
frenchBack[3] = "Hello";
frenchBack[4] = "Good night";
frenchBack[5] = "What is your name?";
frenchBack[6] = "Where are you from?";
frenchBack[7] = "Thank you";
frenchBack[8] = "How are you?";
frenchBack[9] = "Likewise";
frenchBack[10] = "Nice to meet you";
frenchBack[11] = "My name is";
frenchBack[12] = "I";
frenchBack[13] = "You";
frenchBack[14] = "He/She/It";

var presidentsFront = [];
presidentsFront[0] = "1st President";
presidentsFront[1] = "2nd President";
presidentsFront[2] = "3rd President";
presidentsFront[3] = "4th President";
presidentsFront[4] = "5th President";
presidentsFront[5] = "6th President";
presidentsFront[6] = "7th President";
presidentsFront[7] = "8th President";
presidentsFront[8] = "9th President";
presidentsFront[9] = "10th President";
presidentsFront[10] = "11th President";
presidentsFront[11] = "12th President";
presidentsFront[12] = "13th President";
presidentsFront[13] = "14th President";
presidentsFront[14] = "15th President";
presidentsFront[15] = "16th President";
presidentsFront[16] = "17th President";
presidentsFront[17] = "18th President";
presidentsFront[18] = "19th President";
presidentsFront[19] = "20th President";
presidentsFront[20] = "21st President";
presidentsFront[21] = "22nd President";
presidentsFront[22] = "23rd President";
presidentsFront[23] = "24th President";
presidentsFront[24] = "25th President";
presidentsFront[25] = "26th President";
presidentsFront[26] = "27th President";
presidentsFront[27] = "28th President";
presidentsFront[28] = "29th President";
presidentsFront[29] = "30th President";
presidentsFront[30] = "31st President";
presidentsFront[31] = "32nd President";
presidentsFront[32] = "33rd President";
presidentsFront[33] = "34th President";
presidentsFront[34] = "35th President";
presidentsFront[35] = "36th President";
presidentsFront[36] = "37th President";
presidentsFront[37] = "38th President";
presidentsFront[38] = "39th President";
presidentsFront[39] = "40th President";
presidentsFront[40] = "41st President";
presidentsFront[41] = "42nd President";
presidentsFront[42] = "43rd President";
presidentsFront[43] = "44th President";

var presidentsBack = [];
presidentsBack[0] = "George Washington, 1789-1797";
presidentsBack[1] = "John Adams, 1797-1801";
presidentsBack[2] = "Thomas Jefferson, 1801-1809";
presidentsBack[3] = "James Madison, 1809-1817";
presidentsBack[4] = "James Monroe, 1817-1825";
presidentsBack[5] = "John Quincy Adams, 1825-1829";
presidentsBack[6] = "Andrew Jackson, 1829-1837";
presidentsBack[7] = "Martin Van Buren, 1837-1841";
presidentsBack[8] = "William Henry Harrison, 1841";
presidentsBack[9] = "John Tyler, 1841-1845";
presidentsBack[10] = "James Knox Polk, 1845-1849";
presidentsBack[11] = "Zachary Taylor, 1849-1850";
presidentsBack[12] = "Millard Fillmore, 1850-1853";
presidentsBack[13] = "Franklin Pierce, 1853-1857";
presidentsBack[14] = "James Buchanan, 1857-1861";
presidentsBack[15] = "Abraham Lincoln, 1861-1865";
presidentsBack[16] = "Andrew Johnson, 1865-1869";
presidentsBack[17] = "Ulysses S. Grant, 1869-1877";
presidentsBack[18] = "Rutherford Birchard Hayes, 1877-1881";
presidentsBack[19] = "James Abram Garfield, 1881";
presidentsBack[20] = "Chester Alan Arthur, 1881-1885";
presidentsBack[21] = "Grover Cleveland, 1885-1889";
presidentsBack[22] = "Benjamin Harrison, 1889-1893";
presidentsBack[23] = "Grover Cleveland, 1893-1897";
presidentsBack[24] = "William McKinley, 1897-1901";
presidentsBack[25] = "Theodore Roosevelt, 1901-1909";
presidentsBack[26] = "William Howard Taft, 1909-1913";
presidentsBack[27] = "Woodrow Wilson, 1913-1921";
presidentsBack[28] = "Warren Gamaliel Harding, 1921-1923";
presidentsBack[29] = "Calvin Coolidge, 1923-1929";
presidentsBack[30] = "Herbert Clark Hoover, 1929-1933";
presidentsBack[31] = "Franklin Delano Roosevelt, 1933-1945";
presidentsBack[32] = "Harry S. Truman, 1945-1953";
presidentsBack[33] = "Dwight David Eisenhower, 1953-1961";
presidentsBack[34] = "John Fitzgerald Kennedy, 1961-1963";
presidentsBack[35] = "Lyndon Baines Johnson, 1963-1969";
presidentsBack[36] = "Richard Milhous Nixon, 1969-1974";
presidentsBack[37] = "Gerald Rudolph Ford, 1974-1977";
presidentsBack[38] = "James Earl Carter, Jr., 1977-1981";
presidentsBack[39] = "Ronald Wilson Reagan, 1981-1989";
presidentsBack[40] = "George Herbert Walker Bush, 1989-1993";
presidentsBack[41] = "William Jefferson Clinton, 1993-2001";
presidentsBack[42] = "George Walker Bush, 2001-2009";
presidentsBack[43] = "Barack Hussein Obama, 2009-";

var cellsFront = [];
cellsFront[0] = "cell";
cellsFront[1] = "cell cycle";
cellsFront[2] = "cell membrane";
cellsFront[3] = "chromosome";
cellsFront[4] = "protoplasm";
cellsFront[5] = "haploid";
cellsFront[6] = "mitosis";
cellsFront[7] = "chloroplast";
cellsFront[8] = "flagellum";
cellsFront[9] = "vacuole";
cellsFront[10] = "eyespot";
cellsFront[11] = "lysosome";
cellsFront[12] = "nucleoid";

var cellsBack = [];
cellsBack[0] = "Fundamental structural unit of all life.";
cellsBack[1] = "Complete sequence of steps which must be performed by a cell in order to replicate itself";
cellsBack[2] = "The outer membrane of a cell, which separates it from the environment.";
cellsBack[3] = "Linear piece of eukaryotic DNA, often bound by specialized proteins known as histones.";
cellsBack[4] = "All the contents of a cell, including the nucleus.";
cellsBack[5] = "Having a single set of chromosomes in the nucleus of each cell.";
cellsBack[6] = "The process of nuclear division in eukaryotes.";
cellsBack[7] = "A chlorophyll-containing plastid found in algal and green plant cells.";
cellsBack[8] = "Hair-like structure attached to a cell, used for locomotion in many protists and prokaryotes.";
cellsBack[9] = "Membrane-bound fluid-filled space within a cell.";
cellsBack[10] = "Light-sensitive organelle found in many groups of protists, and in some metazoans.";
cellsBack[11] = "Eukaryotic organelle which carries digestive enzymes.";
cellsBack[12] = "Region in prokaryotes where the DNA is concentrated.";

var frontSets = [];
frontSets[0] = frenchFront;
frontSets[1] = presidentsFront;
frontSets[2] = cellsFront;

var backSets = [];
backSets[0] = frenchBack;
backSets[1] = presidentsBack;
backSets[2] = cellsBack;