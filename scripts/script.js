/* Section One */

/* Variable Declarations */
let button1 = document.getElementById('button1');
let textContent1 = document.querySelector('p');

//For finished section 1 text
let noun; 
let counter1 = 0;

//For testing purposes and function refactoring at the start of each section
let texter; 
let increment = 0;




//Anonymous Function DOM Event Refresher
button1.addEventListener('click', function() {
	textContent1.innerHTML = "Noun";
	button1.style.backgroundColor = "SeaGreen";
	button1.style.color = "SeaShell";
});




//Brain fart, what's the next step.
/*
	- Variables are down
	- Did a first anonymous function addEventListener to test & see 'does this still work for me'
	- Github initialization
	- Filezilla first upload
	- Functions from DOM experiments two days ago included = logic mostly solved besides function refactoring and final sentence output
	-  

*/

//Next Steps
/*
	1. Test if each function still works : console.log() 
	2. refactor function variables
	3. 7 changing sentence options
	4. add nouns from assignment image

*/





/* Add all this in after DOM refresher */



// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection() {
	if (increment === 0) {
		texter = "sentence One";
	}
	else if (increment === 1) {
		texter = "2 Sentence Two";
	}
	else if (increment === 2) {
		texter = "Third Sentence Three 3";
	}
	else if (increment === 3) {
		texter = "Fourth Sentence";
	}
	else if (increment === 4) {
		texter = "Sentence Five";
	}
	else if (increment === 5) {
		texter = "Sixth Sentence";
	}
	else if (increment === 6) {
		texter = "7";
	}
}

// If I add a parameter I can make the function reusable with other variables instead of creating new functions with each variable name hard-coded
function count() {
	console.log(increment);
	if (increment < 7) {
		increment++;
	}
	else if (increment >= 7) {
		increment = 0;
	}
}

// Final Function + Event Listener, for the marble$
function sentence1() {
	button1.style.backgroundColor = 'blue';
   button1.style.color = 'red';
	button1.textContent = "Blue Button";
	count();
	textSelection();
	textContent1.textContent = texter;
}
button1.addEventListener('click', sentence1);

