// Code your solution in this file!
const returnFirstTwoDrivers = function (driver) {
    return driver.slice(0,2);
}

const returnLastTwoDrivers = function (driver) {
    return driver.slice(driver.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
        return function(fare) {
            return num * fare;
        }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cb) {
    return cb(drivers);
}