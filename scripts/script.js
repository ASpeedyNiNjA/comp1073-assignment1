// Section One //

/* Variable Declarations */
let button1 = document.getElementById('button1');
let textContent1 = document.querySelector('p');

//For finished section 1 text
let nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"]; 
let noun;
let counter1 = 6;

//For testing purposes and function refactoring at the start of each section
let texter; 
let increment = 0;

/* Function Declarations */
// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection1() {
	if (counter1 === 0) {
		noun = nouns[0];
	}
	else if (counter1 === 1) {
		noun = nouns[1];
	}
	else if (counter1 === 2) {
		noun = nouns[2];
	}
	else if (counter1 === 3) {
		noun = nouns[3];
	}
	else if (counter1 === 4) {
		noun = nouns[4];
	}
	else if (counter1 === 5) {
		noun = nouns[5];
	}
	else if (counter1 === 6) {
		noun = nouns[6];
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
let verbs  = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
let verb; 
let counter2 = 5;

/* Function Declarations */
// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection2() {
	if (counter2 === 0) {
		verb = verbs[0];
	}
	else if (counter2 === 1) {
		verb = verbs[1];
	}
	else if (counter2 === 2) {
		verb = verbs[2];
	}
	else if (counter2 === 3) {
		verb = verbs[3];
	}
	else if (counter2 === 4) {
		verb = verbs[4];
	}
	else if (counter2 === 5) {
		verb = verbs[5];
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
let adverbs = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat']
let adverb; 
let counter3 = 5;

/* Function Declarations */
// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection3() {
	if (counter3 === 0) {
		adverb = adverbs[0];
	}
	else if (counter3 === 1) {
		adverb = adverbs[1];
	}
	else if (counter3 === 2) {
		adverb = adverbs[2];
	}
	else if (counter3 === 3) {
		adverb = adverbs[3];
	}
	else if (counter3 === 4) {
		adverb = adverbs[4];
	}
	else if (counter3 === 5) {
		adverb = adverbs[5];
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
let possessives = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let possessive; 
let counter4 = 6;

/* Function Declarations */
// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection4() {
	if (counter4 === 0) {
		possessive = possessives[0];
	}
	else if (counter4 === 1) {
		possessive = possessives[1];
	}
	else if (counter4 === 2) {
		possessive = possessives[2];
	}
	else if (counter4 === 3) {
		possessive = possessives[3];
	}
	else if (counter4 === 4) {
		possessive = possessives[4];
	}
	else if (counter4 === 5) {
		possessive = possessives[5];
	}
	else if (counter4 === 6) {
		possessive = possessives[6];
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
let locations = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes']
let locati0n; 
let counter5 = 6;

/* Function Declarations */
// This function needs to execute in another function combined with an addEventListener() // A switch statement would work here as well, wanted to, stuck with an IF for first attempt
function textSelection5() {
	if (counter5 === 0) {
		locati0n = locations[0];
	}
	else if (counter5 === 1) {
		locati0n = locations[1];
	}
	else if (counter5 === 2) {
		locati0n = locations[2];
	}
	else if (counter5 === 3) {
		locati0n = locations[3];
	}
	else if (counter5 === 4) {
		locati0n = locations[4];
	}
	else if (counter5 === 5) {
		locati0n = locations[5];
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
let final_output = document.getElementById('final-para');
let finalButton =  document.getElementById('final-button');

finalButton.addEventListener('click', function() {
	final_sentence =  noun + " " + verb + " " + adverb + " " + possessive + " " + locati0n + ".";
	final_output.textContent = final_sentence;
	console.log(final_sentence);
});

// Reset Button //
let resetButton  = document.getElementById('reset-button');
resetButton.addEventListener('click', function() {
	final_sentence = "";
	final_output.textContent = final_sentence;
});
