//Input: Get integer from user
//Processing: Add all of the odd integers between 1 and the user input
//Output: Disply the total

function sumOfOdds() {
    let i = parseFloat(document.getElementById("int").value);
    let sum = 0;
  
    for (let numb = 1; numb <= i; numb = numb + 2) {
      sum += numb;
      document.getElementById("output").innerHTML = sum;
    }
  }