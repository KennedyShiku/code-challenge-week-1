let prompt = require('prompt-sync')(); //Require the 'prompt-sync' to take the user's input
let input = prompt('Enter the car\'s speed: '); // The user is asked to enter the car's speed


function calculateDemeritPoints(speed) {
  const speedLimit = 70; //The speedLimit remains constant in order to subtract the speed that will be inputted 
  const kmPerDemeritPoint = 5; //The kmPerDemeritPoint remains constant in order to divide the difference between the speed and the speedLimit
  const maxDemeritPoints = 12; //The maxDemeritPoints sets a limit for the maximum demerits one can receive before their license is suspended 

  if (speed <= speedLimit) {
    return "OK";//The code returns "OK" if the speed is 70 or less
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint); //The speedLimit is subtracted from the speed and the difference is rounded down and divided by the demerit points//

    if (demeritPoints >= maxDemeritPoints) {
      return "License suspended"; //If the demeritPoints are more than 12 then the license is suspended
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}


const result = calculateDemeritPoints(input);
console.log(result);