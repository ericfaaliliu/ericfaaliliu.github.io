//Input: Get subtotal from user.
//Processing: Calcuate the discount and sales tax for Tuesday and Wednesday purchases. Calculate total with sales tax for everyother day.
//Output: Display final cost.

function getTotal() {
    let d = new Date().getDay();
    let s = parseFloat(document.getElementById("s").value);
    let dis = s - s * 0.1;
    let stax = dis * 0.06;
    let total = 0;
  
    if ((d == 2 || d == 3) && s > 50) {
      total = dis + stax;
    } else {
      total = s + s * 0.06;
    }
    //Output:
    document.getElementById("output").innerHTML = total.toFixed(2);
  }
  