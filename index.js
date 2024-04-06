// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2);
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));


const createFareMultiplier = (fareMultiplier) => {
    return function (fare) {
       return fareMultiplier * fare;
    };
}


function fareDoubler(fare) {
     const mult=2
     return fare*mult
}
console.log(fareDoubler(10))


function fareTripler(fare) {
    const digit=3
    return fare*digit
}
console.log(fareTripler(10))



function selectDifferentDrivers(drivers,returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers)}


console.log(selectDifferentDrivers())





