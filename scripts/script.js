// Section One //

/* Variable Declarations */
let button1 = document.getElementById('button1');
let textContent1 = document.querySelector('p');

//For finished section 1 text
let noun; 
let counter1 = 0;

//For testing purposes and function refactoring at the start of each section
let texter; 
let increment = 0;

/* Function Declarations */
// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection1() {
	if (counter1 === 0) {
		noun = "The turkey";
	}
	else if (counter1 === 1) {
		noun = "Mom";
	}
	else if (counter1 === 2) {
		noun = "Dad";
	}
	else if (counter1 === 3) {
		noun = "The dog";
	}
	else if (counter1 === 4) {
		noun = "My teacher";
	}
	else if (counter1 === 5) {
		noun = "The elephant";
	}
	else if (counter1 === 6) {
		noun = "The cat";
	}
}

// If I add a parameter I can make the function reusable with other variables instead of creating new functions with each variable name hard-coded
function count1() {
	console.log(counter1);
	if (counter1 < 6) {
		counter1++;
	}
	else if (counter1 >= 6) {
		counter1 = 0;
	}
}

// Final Function + Event Listener, for the marble$
function sentence1() {
	button1.style.backgroundColor = 'Seagreen';
   button1.style.color = 'Seashell';
	button1.textContent = "Green Button";
	count1();
	textSelection1();
	textContent1.textContent = noun;
}
button1.addEventListener('click', sentence1);














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



//Anonymous Function DOM Event Refresher [testing tool for subsequent sections
button2.addEventListener('click', function() {
	textContent2.innerHTML = "Noun";
	button2.style.backgroundColor = "SeaGreen";
	button2.style.color = "SeaShell";
});

