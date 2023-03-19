"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let oneRoot = -b / (2 * a);
  let firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
  let secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr.push(oneRoot);
  } else if (discriminant > 0) {
    arr.push(firstRoot, secondRoot);
  }
  return arr;
}
solveEquation;
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let mortgage;
  if ( 
    Number.isNaN(percent) === true || typeof percent != "number" || percent < 0
  ) {
    return false;
  } else if ( 
    Number.isNaN(contribution) === true || typeof contribution != "number" || percent < 0
  ) {
    return false;
  } else if (
    Number.isNaN(amount) === true || typeof amount != "number" || percent < 0) {
    return false;
  } else if (
    Number.isNaN(countMonths) === true || typeof countMonths != "number" || percent < 0
  ) {
    return false;
  } else {
    let bodyCredit = Number(amount) - Number(contribution);
    let monthPercent = percent / 12 / 100;
    let monthPayment = bodyCredit * (monthPercent + monthPercent / (Math.pow(1 + monthPercent, countMonths) - 1));
    mortgage = Number((monthPayment * countMonths).toFixed(2));
  }
  return mortgage;
}
