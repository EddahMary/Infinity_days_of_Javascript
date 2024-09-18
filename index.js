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




















  