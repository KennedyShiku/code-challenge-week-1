let prompt = require('prompt-sync')(); // Require the 'prompt-sync' to take user input
let input = prompt('Enter student\'s marks: '); // The user is asked to enter the student's marks
let enteredMarks = parseFloat(input); // Parse the user input to a  number and store it in the variable 'enteredMarks'

// The function 'grades' takes 'marks' as a parameter and returns a grade
function grades(marks){
  if (marks > 79 && marks < 100){
    return "A" // If marks are in the range 80-99, return 'A'
  } else if (marks >= 60 && marks <= 79){
    return "B" // If marks are in the range 60-79, return 'B'
  } else if (marks >= 50 && marks <= 59){
    return "C" // If marks are in the range 50-59, return 'C'
  } else if (marks >= 40 && marks <= 49){
    return "D" // If marks are in the range 40-49, return 'D'
  } else if(marks < 40){
    return "E" // If marks are less than 40, return 'E'
  } else {
    return "Not a grade" // If none of the above conditions are met, return 'Not a grade'
  }
}

// Call the 'grades' function with 'enteredMarks' as an argument and display the result
console.log("Student's Grade: " + grades(enteredMarks));

