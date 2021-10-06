const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 10;
const MAX_HRS_IN_MONTH = 100;

let totalEmpHrs = 0;
let totalWorkingDays = 0;

let empDailyWageArr = new Array();

while (totalWorkingDays < NUMBER_OF_WORKING_DAYS && totalEmpHrs <= MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs))
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let empWage = calcDailyWage(totalEmpHrs);

console.log("Total days : " + totalWorkingDays + " Total hrs : " + totalEmpHrs + " Emp Wage : " + empWage);

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("uc 7a - Total days : " + totalWorkingDays + " Total hrs : " + totalEmpHrs + " Emp Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("uc 7a - Emp wage with reduce : " + empDailyWageArr.reduce(totalWages, 0))

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("uc 7b - daily wage map ");
console.log(mapDayWithWageArr)


function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullTimeWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("uc 7c - filter full time daily wage from map ");
console.log(fullTimeWageArr)

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("uc 7d - filter full time daily wage from map ");
console.log(mapDayWithWageArr.find(findFullTimeWage))

function isFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("uc 7e - check full time daily wage is true ");
console.log(mapDayWithWageArr.every(isFullTimeWage))

function isPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

console.log("uc 7f - check if there is any part time daily wage ");
console.log(mapDayWithWageArr.some(isPartTimeWage))


function totalDaysWorked(noOfDays, dailyWage) {
    if (dailyWage > 0)
        return noOfDays+1;

    return noOfDays;
}

console.log("uc 7g - no of days emp worked");
console.log(empDailyWageArr.reduce(totalDaysWorked, 0))

