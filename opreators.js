//java script opreators are used to perfom particular actions
//they can used asign value,compare a value,combine a value,perfome aritmetic opreation and more

//assignment opreators
const a =2;
const b = 5;
const c = 8;
const sum = a+b-c;
const sum2 = a+b+c;
const sum3 = a*b*c;
const sum4 = a/b/c;
const sum5 = a*b/c;
console.log(sum)
console.log(sum2)
console.log(sum3)
console.log(sum4)
console.log(sum5)

let lastName = "walia";
let firstName = "varun"
//lastName + = firstName
console.log(lastName +firstName);

//compare opreators
// > greater than
// < less than
 // >= greater tham equal to
 // <= less than equal to
 // == loose equality
 // === strict equality
 // != losse in equality
 // !== strict equality

 let g = 5;
 let j = 5;
 console.log(g==j); //output true

 let i = '6';
 let k = 6;
 console.log(i==k)//output  true

 let h = "hello world";
 let l = "hello everyone"
//  console.log(h == l)
console.log(h == (l + 'hello'));//output false


if(5==4){
    console.log("hello my name is varun")
}else{
    console.log("side ho ja nahi chle ga ye");
}

//Logical opreator
// && And
// || OR
// ! NOT

let m =  10
let n = 11
console.log(m==10)//output true
console.log(n==11);//output true
console.log(m ==10 && n ==11);//output true
console.log((10>5)&&(5<3));//output false

//logical opreators
if(3==3 && 4==4){
    console.log("this condition is true");//output is true
}
if(3==3 && 3==4){
console.log("this consdition is wrong");//output is false
}else{
    console.log("i cant print this statement because 3 not equal to 4");
}

//Ternary operatores

const score = 60;
const result = (score <70) ? "faild" : "passed";
console.log(result)//output is failed because number is less than 70