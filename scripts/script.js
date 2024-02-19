// Section One //

/* Variable Declarations */
let button1 = document.getElementById('button1');
let textContent1 = document.querySelector('p');

//For finished section 1 text
let noun; 
let counter1 = 6;

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





// Section Two //

/* Variable Declarations */
let button2 = document.getElementById('button2');
let textContent2 = document.getElementById('para2'); //First instance of using getElementById for selecting paragraphs

//For finished section 2 text
let verb; 
let counter2 = 5;

/* Function Declarations */
// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection2() {
	if (counter2 === 0) {
		verb = "sat on";
	}
	else if (counter2 === 1) {
		verb = "ate";
	}
	else if (counter2 === 2) {
		verb = "danced with";
	}
	else if (counter2 === 3) {
		verb = "saw";
	}
	else if (counter2 === 4) {
		verb = "doesn't like";
	}
	else if (counter2 === 5) {
		verb = "kissed";
	}
}

// If I add a parameter I can make the function reusable with other variables instead of creating new functions with each variable name hard-coded
function count2() {
	if (counter2 < 5) {
		counter2++;
	}
	else if (counter2 >= 5) {
		counter2 = 0;
	}
}

// Final Function + Event Listener, for the marble$
function sentence2() {
	button2.style.backgroundColor = 'Red';
   button2.style.color = 'White';
	button2.textContent = "Red Button";
	count2();
	textSelection2();
	textContent2.textContent = verb;
}
button2.addEventListener('click', sentence2);





// Section Three //

/* Variable Declarations */
let button3 = document.getElementById('button3');
let textContent3 = document.getElementById('para3'); //First instance of using getElementById for selecting paragraphs

//For finished section 2 text
let adverb; 
let counter3 = 5;

/* Function Declarations */
// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection3() {
	if (counter3 === 0) {
		adverb = "a funny";
	}
	else if (counter3 === 1) {
		adverb = "a scary";
	}
	else if (counter3 === 2) {
		adverb = "a goofy";
	}
	else if (counter3 === 3) {
		adverb = "a slimy";
	}
	else if (counter3 === 4) {
		adverb = "a barking";
	}
	else if (counter3 === 5) {
		adverb = "a fat";
	}
}

// If I add a parameter I can make the function reusable with other variables instead of creating new functions with each variable name hard-coded
function count3() {
	if (counter3 < 5) {
		counter3++;
	}
	else if (counter3 >= 5) {
		counter3 = 0;
	}
}

// Final Function + Event Listener, for the marble$
function sentence3() {
	button3.style.backgroundColor = 'DarkBlue';
   button3.style.color = 'White';
	button3.textContent = "Blue Button";
	count3();
	textSelection3();
	textContent3.textContent = adverb;
}
button3.addEventListener('click', sentence3);





// Section Four //

/* Variable Declarations */
let button4 = document.getElementById('button4');
let textContent4 = document.getElementById('para4'); //First instance of using getElementById for selecting paragraphs

//For finished section 2 text
let possessive; 
let counter4 = 6;

/* Function Declarations */
// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection4() {
	if (counter4 === 0) {
		possessive = "goat";
	}
	else if (counter4 === 1) {
		possessive = "monkey";
	}
	else if (counter4 === 2) {
		possessive = "fish";
	}
	else if (counter4 === 3) {
		possessive = "cow";
	}
	else if (counter4 === 4) {
		possessive = "frog";
	}
	else if (counter4 === 5) {
		possessive = "bug";
	}
	else if (counter4 === 6) {
		possessive = "worm";
	}
}

// If I add a parameter I can make the function reusable with other variables instead of creating new functions with each variable name hard-coded
function count4() {
	console.log(counter4);
	if (counter4 < 6) {
		counter4++;
	}
	else if (counter4 >= 6) {
		counter4 = 0;
	}
}

// Final Function + Event Listener, for the marble$
function sentence4() {
	button4.style.backgroundColor = 'DarkViolet';
   button4.style.color = 'White';
	button4.textContent = "Purple Button";
	count4();
	textSelection4();
	textContent4.textContent = possessive;
}
button4.addEventListener('click', sentence4);





// Section Five //

/* Variable Declarations */
let button5 = document.getElementById('button5');
let textContent5 = document.getElementById('para5'); //First instance of using getElementById for selecting paragraphs

//For finished section 2 text
let locati0n; 
let counter5 = 6;

/* Function Declarations */
// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection5() {
	if (counter5 === 0) {
		locati0n = "on the moon";
	}
	else if (counter5 === 1) {
		locati0n = "on the chair";
	}
	else if (counter5 === 2) {
		locati0n = "in my spaghetti";
	}
	else if (counter5 === 3) {
		locati0n = "in my soup";
	}
	else if (counter5 === 4) {
		locati0n = "on the grass";
	}
	else if (counter5 === 5) {
		locati0n = "in my shoes";
	}
}

// If I add a parameter I can make the function reusable with other variables instead of creating new functions with each variable name hard-coded
function count5() {
	if (counter5 < 5) {
		counter5++;
	}
	else if (counter5 >= 5) {
		counter5 = 0;
	}
}

// Final Function + Event Listener, for the marble$
function sentence5() {
	button5.style.backgroundColor = 'DeepPink';
   button5.style.color = 'black';
	button5.textContent = "Pink Button";
	count5();
	textSelection5();
	textContent5.textContent = locati0n;
}
button5.addEventListener('click', sentence5);





// Final Output Section //
let final_sentence;
let finalButton =  document.getElementById('final-button');
finalButton.addEventListener('click', function() {
	final_sentence =  noun + " " + verb + " " + adverb + " " + possessive + " " + locati0n + ".";
	console.log(final_sentence);
});
