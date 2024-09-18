// Javascript Functions and Arrays
// function declaration
function sum() {
    let x = 22;
    let y = 34;
    let sum = x + y;
    console.log("The sum is " + sum);
  }
  sum();
  
  // function expression
  const summation = function () {
    console.log("The sum is " + 15 + 34);
  }
  summation();
  
  // Parameters and arguments
  // Area of a rectangle
  function areaOfARectangle(width, length) {
    let result = width * length;
    return "The area is:" + result;
  }
  console.log(areaOfARectangle(5, 15));

//Arrays
  const cars = ["Porsche", "Mazda", "Honda", "G-wagon", "Tiguan", "Cadillac", "Subaru"];
console.log(cars);



// Array Methods
// Displaying a specific element in an array
console.log(cars[3]);
console.log(cars.at(5));
// The method .at works same as []


// changing a specific element
// console.log(cars[4] = "Tuareg");
// console.log(cars);
console.log(cars[2] = "Hyundai", cars[4] = "Tuareg");
console.log(cars);

//Determining the length of an array
console.log(cars.length);

// Deleting the last element (.pop method displays the deleted element)
console.log(cars.pop());
console.log(cars);

// Deleting first element (.shift method displays the deleted element)
console.log(cars.shift());
console.log(cars);

// Adding a new element at end (.push method adds a new element at end of the array)
console.log(cars.push("Bentley"));
console.log(cars);

// Adding a new element at the start (.unshift method)
console.log(cars.unshift("Chrysler"));
console.log(cars);


// Concatenating(joining) arrays
const fruits = ["Lemon", "Melon", "Apple", "Pineapple"];
const weights = [60, 80, 68,];
const students= ["Doe", "Maria", "Queenta", "Edna", "Ndela"]
console.log(fruits.concat(weights, students));

// Copying elements to a new position
console.log(fruits.copyWithin(0, 2));
console.log(fruits);

// Slice and splice methods(splice adds new elements, slice slices out a piece of an array)
console.log(cars.slice(1, 3));
console.log(cars);


// asynchronous code
console.log("Marya");
// settimeout fn schedules a task to perform in future with the first part being the argument and the second part being the timeout(4000ms) that is time taken by the argument to display
setTimeout(() => {
  console.log("Having fun coding");
}, 4000 );
console.log("Johnes");


//  Callback function
console.log("Statement 1");
console.log("Statement 2");
console.log("Statement 3");
getPerson(34, (person)=> {
console.log("Person", person);
getHobbies(person.age, (hobbies) => {
  console.log(Hobbies,);
  
})
});
function getPerson (age, callback) {
setTimeout(() => {
  console.log("Fetching person's data from files"); 
  callback({name:"Marya Johnes", age: 34, profession: "Teacher"})
 }, 6000);
// assuming we're getting data from files which takes 6sec
}

function getHobbies(age) {
  setTimeout(() => {
    console.log("Fetching person's hobbies");
    callback(["Cooking", "Dancing", "Coding", "Travelling"])
  }, 3000);
  
}


  
  

























  