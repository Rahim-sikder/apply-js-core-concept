
 function getSumOfAnArray (numbers){
   let sum = 0;
   for (let i = 0; i < numbers.length; i++){
      const index = i;
      const element =  numbers[index];
      sum = sum + element ;
        console.log(index,element,sum);
   }
   return sum;
 }
 const myNumbers =[20,30 ,40, 56, 20 ,10];
 getSumOfAnArray(myNumbers);