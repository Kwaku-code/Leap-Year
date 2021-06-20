let msg = "";
function isLeapYear() {
    var year = document.getElementById("year").value;


    let result = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if (year == "") {
        msg = " Please enter a year";
    } else if (isNaN(year)) {
        msg = "Enter a valid number"
    }
    else if (year <= 0) {
        msg = " Year cannot be less than or equal to 0"
    }
    else if (result) {
        msg = year + " is leap year"
    } else {
        msg = year + " is not leap year"
    }
    document.getElementById("Paragraph").innerHTML = msg;
}