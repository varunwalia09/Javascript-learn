const person = {
    Name: "Varun Walia",
    Email: "walia@gmail.com",
    Age: 30,
    Gender: "male",
    Hobbies: ["Games", "Cricket", "Travel"],
    isMarried: true,
    // showAge: function() {
    //   console.log(this.Age);
    // },
    // showName: function(){
    //     console.log(this.Name);
    //   }
  };
  
  // To call the showAge function:
//   person.showAge(); // Outputs: 30
//   person.showName()//output : varun walia
person.job = 'Developer';
console.log(person)

//add the property
const person1 = {
    "name": "varun",
    "age": 30,
    "gender": "Male",
    
  };
  
person1.job='developer';
console.log(person1);

//update the age properties
person1.age=31;
console.log(person1);

//add greet function
const person2 = {
    "name": "varun",
    "age": 30,
    "gender": "Male",
    greet: function() {
      console.log("Good morning varun walia");
    }
  };
  
  person2.greet(); // Outputs: hello


  //an object in an object
  const fruits ={
    mango:{
        color:"yellow",
        taste:"sweet",
    },
    apple:{
        color:"red",
        taste:"sweet"
    }
  }
console.log(fruits.mango.color);

