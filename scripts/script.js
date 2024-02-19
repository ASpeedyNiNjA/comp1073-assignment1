/* Section One */

//Variable Declarations 
let button1 = document.getElementById('button1');
let textContent1 = document.querySelector('p');
let counter1 = 0;
let noun;

button1.addEventListener('click', function() {
	textContent1.innerHTML = "Noun";
	button1.style.backgroundColor = "SeaGreen";
	button1.style.color = "SeaShell";
});













/* Add all this in after DOM refresher */

/*

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
}

// If I add a parameter I can make the function reusable with other variables instead of creating new functions with each variable name hard-coded
function count() {
	console.log(increment);
	if (increment < 3) {
		increment++;
	}
	else if (increment >= 3) {
		increment = 0;
	}
}

// Final Function + Event Listener, for the marble$
function sentence1() {
	button1.style.backgroundColor = 'blue';
   button1.style.color = 'red';
	button1.textContent = "Blue Button";
	textSelection();
	count();
	textDare.textContent = texter;
}
button1.addEventListener('click', sentence1);

*/