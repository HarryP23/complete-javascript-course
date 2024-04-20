// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 3) console.log(23);

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(2002));

/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: prompt("Degrees celsius:"),
    value: Number(prompt("Degrees celsius:")),
  };

  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
/*

// console.log(measureKelvin());
// console.warn(measureKelvin());
// console.error(measureKelvin());

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const testdata1 = [17, 21, 23];
const testdata2 = [12, 5, -5, 0, 4];

console.log(`... ${testdata1[0]} ... ${testdata1[1]}`);
console.log(
  `... ${testdata1[0]}ºC ... ${testdata1[1]}ºC ... ${testdata1[2]}ºC ...`
);

const printForecast = function (arr) {
  let str = "";
  for (var i = 0; i < arr.length; i++) {
    str += `... ${arr[0]}ºC in ${i + 1} days`;
  }
  console.log(str + "...");
};

printForecast(testdata1);
printForecast(testdata2);
