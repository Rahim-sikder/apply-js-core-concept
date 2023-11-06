 function sumOfNumbers (number){
   sum = 0;
   for (let i= 1; i<=number ; i++){
      sum = sum + i;
      console.log(i,sum);
   }
   return sum;
 }
 sumOfNumbers(10);
