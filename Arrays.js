//Arrays can store multiple values
//collection of elemnts
//can hold values of different types together numbers and string


const colors = ['red', 'blue','green']
console.log(colors[2]);
colors[3]= 'yellow'
console.log(colors[3]);

//push method
const color = ["blue","orange","pink"]
color.push("yellow","green","red");
console.log(color)

//unshift method
const color1 = ["blue","orange","pink"]
color1.unshift("yellow","green","red");
console.log(color1)

//shift method remove the fist name
const name=["naman","varun","mansi"]
name.shift();
console.log(name);

//pop method is remove the last name in the coloum
const color2 =["varun","walia","mansi"]
color2.pop();
console.log(color2);


//length of an array
const cities=["delhi","patiala","ambala"]
// cities.length();
console.log(cities.length);

//loop over an array
const cities1=["delhi","patiala","ambala"];
for (let i=0; i < cities1.length; i++){
    console.log(cities1[i]);
}

//concatinate method

const num1 =[1,2,3,4]
const num2 =[5,6,7,8]
const num3 = num1.concat(num2)
console.log(num3);












