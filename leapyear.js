function isLeapYear(year) {
   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
 }
 
 function findLeapYears(years) {
   const leapYears = [];
 
   for (let i = 0; i < years.length; i++) {
     if (isLeapYear(years[i])) {
       leapYears.push(years[i]);
     }
   }
 
   return leapYears;
 }
 
 const inputYears = [2023, 2024, 2025, 2028, 2030];
 const leapYears = findLeapYears(inputYears);
 
 console.log("Leap years:", leapYears);
 