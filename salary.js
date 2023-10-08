let prompt = require('prompt-sync')();
let input = prompt('Input salary: ');
let salary = parseFloat(input);

const pay = salary;

function netTax() {
  let taxRate;

  switch (true) {
    case pay <= 24000:
      taxRate = 0.1;
      break;
    case pay <= 32333:
      taxRate = 0.25;
      break;
    case pay <= 500000:
      taxRate = 0.3;
      break;
    case pay <= 800000:
      taxRate = 0.325;
      break;
    default:
      taxRate = 0.35;
  }

  return pay * taxRate;
}

console.log("Net tax:", netTax());

function nhif() {
  let nhifFee;

  switch (true) {
    case pay < 5999:
      nhifFee = 150;
      break;
    case pay <= 7999:
      nhifFee = 300;
      break;
    case pay <= 11999:
      nhifFee = 400;
      break;
    case pay <= 14999:
      nhifFee = 500;
      break;
    case pay <= 19999:
      nhifFee = 600;
      break;
    case pay <= 24999:
      nhifFee = 750;
      break;
    case pay <= 29999:
      nhifFee = 850;
      break;
    case pay <= 34999:
      nhifFee = 900;
      break;
    case pay <= 39999:
      nhifFee = 950;
      break;
    case pay <= 44999:
      nhifFee = 1000;
      break;
    case pay <= 49999:
      nhifFee = 1100;
      break;
    case pay <= 59999:
      nhifFee = 1200;
      break;
    case pay <= 69999:
      nhifFee = 1300;
      break;
    case pay <= 79000:
      nhifFee = 1400;
      break;
    case pay <= 89999:
      nhifFee = 1500;
      break;
    case pay <= 99999:
      nhifFee = 1600;
      break;
    default:
      nhifFee = 1700;
  }

  return nhifFee;
}

console.log("NHIF:", nhif());

function nssf() {
  return pay * 0.06;
}

console.log("Pension:", nssf());

console.log("Net Income:", salary - (netTax() + nhif() + nssf()));
