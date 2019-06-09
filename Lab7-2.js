//Input: Get todays date, holidayas, and weekends.
//Processing: Create message to display for holidays, weeekends, and every other day.
//OUTPUT: Display message.


let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();

document.getElementById('theDate').innerHTML = today;

if ( (month == 0 && day == 1) || (month == 6 && day == 4) || (month == 11 && day == 25) || day == 6 || day == 0) {
	result = "Keep Sleeping Princess!";
} else {
	result = "Rise & Grind!";
}
document.getElementById("z'sOrG's").innerHTML = result;