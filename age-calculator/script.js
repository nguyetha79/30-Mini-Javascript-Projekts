let userInput = document.getElementById("date");
/** 
1. new Date().toISOString(): 
 * new Date() creates a new JavaScript Date object representing the current date and time. 
 * .toISOString() converts the Date object to a string in ISO format, which looks like this: "YYYY-MM-DDTHH:mm:ss.sssZ". This format includes the date, time, and timezone information.

2. .split("T"): method that splits the string into an array of substrings using the "T" character as the separator. After the split, you get an array with two elements: the date part before "T" and the time part after "T".

3. [0]: retrieves the first element of the array, which is the date part.

4. "userInput.max = ...": userInput refers to an HTML input element, likely of type "date". 
The .max attribute sets the maximum allowed value for the date input.

Putting it all together, the line of code sets the maximum date for the input element to the current date. 
It extracts the date part from the ISO string format and assigns it to the max attribute. 
This ensures that users cannot select a date beyond the current date when using the input field. */
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}

// get the number of days in a specific month of a given year
function getDaysInMonth(year, month) {
  // The Date object is created for the next month (month + 1) but with a day value of 0. 
  // In JavaScript's Date object, setting the day value to 0 means getting the last day of the previous month.
  return new Date(year, month, 0).getDate();
}
