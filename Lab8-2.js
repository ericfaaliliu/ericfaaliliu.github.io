//Input: Get an integer from user
//Processing: test to see if the integer is less than, more than, or equal to the answer, and caluculate the number of attempts
//Output: Display message if user guesses too high, too low, or correct

function takeAGuess() {
	let numb = 0;
	let guess = 0;
  let answer = 20;
	let message = "Enter a number";
  
	do	{
		guess = parseInt(prompt(message));
	
		if (guess < answer) {
			message = guess + " is too low. Guess again.";
		}
		if (guess > answer) {
			message = guess + " is too high. Guess again.";
		}

	 if (guess == answer) {
			message = guess + " is Correct!";
		}
		numb += + 1;
	}	
	while(guess != answer);
	
	document.getElementById("output").innerHTML = message;
	document.getElementById("output1").innerHTML = numb;

}