function getSumOfAnArray (numbers){
   let sum = 0;
   for (let i = 0; i < numbers.length; i++){
      const index = i;
      const element =  numbers[index];
      sum = sum + element ;
      //   console.log(index,element,sum);
   }
   return sum;
 }

 function getOddNumber(numbers){
   const  oddNumbers= [];
    for (let i= 0; i < index.length; i++){
      const index =i;
      const element = numbers[index];
      if(element %2 !== 0){
         console.log(index, element);
         oddNumbers.push(element);
      }

    }
 }
 const myNumbers =[20,30 ,40, 56, 20 ,10];
 getOddNumber(myNumbers);
 getSumOfAnArray(myNumbers);