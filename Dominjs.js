//return the element with the specific id
//single elemnt return krarta hai

let target = document.getElementById('container')
console.log(target);

//class name is work full para
let element = document.getElementsByClassName('para')
console.log(element);

//selects all elements with the given tag name 
//it return an array of objects
//matching all of elements return

let element2 = document.getElementsByTagName('div')
console.log(element2);

//
let element3 = document.getElementsByName('div')
console.log(element3);

//id pass then use the # with id class pass then use .with the class tag pass then simply use the tag
//normaly the return the first element return
let element4 = document.querySelector('.para')
console.log(element4); 

// this method all tag return
let element5 = document.querySelectorAll('div')
console.log(element5);

//how to create the new  element
//createElement
let newElement = document.createElement('h1')
// console.log(newElement);

//apendChild()
let parent = document.getElementById('box')
parent.appendChild(newElement)
console.log(parent.appendChild(newElement));


// remove the element
let element6 = document.getElementById('container')
element6.remove()

//remove the child
let parent2 = document.getElementById('parent')
let child = document.getElementById('child')

parent2.removeChild(child)







