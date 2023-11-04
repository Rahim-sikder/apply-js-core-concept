function isLeapYear (year){
   const remainder = year % 4;
   if (remainder == 0){
      return true;
     
   }
   else{
      return false;
   }

}
const isMyYearIsLeapYear = isLeapYear(1973);
console.log ('my year', isMyYearIsLeapYear);
const herYearIsLeapYear = isLeapYear(1972);
console.log ('her year', herYearIsLeapYear);

