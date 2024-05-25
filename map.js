
 const numbers =[2,5,9,8,6,50];
 const numbersTimesTwo =numbers.map(function(value){
    return value *2;
 })
 console.log(numbersTimesTwo);



 //map 
 const numbers1 =[2,4,6,8,10]
numbers1.map((element)=>
   {
   console.log(element * element)//output 4,8,12,16,20
 })

 const array =[3,6,9,12]
array.map((element)=>
   {
   console.log(element * element)//output 4,8,12,16,20
 })

 //
 const array2=[1,2,3,4,5,6]
 const newArray =array2.filter((element)=>{
   return element % 2 === 0
 })
 console.log("this is the answer",newArray);

//Reduce method

const num =[1,2,3,4,5]
const sum = num.reduce((a,b)=> a+b)
console.log(sum)







