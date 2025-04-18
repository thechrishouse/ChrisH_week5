////////// Part 1: Understanding Basics of Arrays /////////////

// Array Creation
let fruits = ["apple", "banana", "cherry"];

// Accessing Array Elements
const indexOneValue = fruits[0];

// Using length 
console.log(fruits.length);


////////// Part 2: Adding and Removing Elements /////////////

// Using 'push'
fruits.push('orange');
console.log(fruits);

// Using 'pop'
console.log(fruits, fruits.pop());

// Challenge: Adding fruits
fruits.push('lemon', 'lime');
fruits.pop();
console.log(fruits, fruits.length)
console.log(fruits);


////////// Part 3: Looping Through Arrays /////////////

for(let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);
    console.log(fruits[i].toUpperCase());

    let apples = 0;

    if(fruits[i] === 'apple') {
        apples++
        console.log(`The fruit "apple" appears ${apples} times;`)
    }
}

////////// Part 4: Hands-On Practice /////////////

let cart = [];

cart.push('lettuce', 'tomato', 'onion');
console.log(cart);
cart.pop();
console.log(cart, cart.length);

let numbers = [1, 2, 3, 4, 5];

for (let number = numbers.length - 1; number >= 0; number-- ) {

    console.log(numbers[number]);
}


////////// Part 5: Conditional Statements with arrays /////////////

let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['red', 'green', 'blue'];

if (array1.length > array2.length) {
    console.log('array1 has a greater length than array2');
} else {
    console.log('array2 has a greater length than array1');
}


////////// Part 6: Print Even Indexed Elements /////////////

const array = [10, 20, 30, 40, 50, 60];

for(i = 0; i < array.length; i++) {
    if(i % 2 === 0) {
        console.log(array[i]);
    }
}


////////// Part 7: Push Challenge: Nested Loops /////////////

let students = ['Alex', 'Bob', 'Charlie'];
let subjects = ['Math', 'Science'];

// This outer loop iterates over each student name
for (let i = 0; i < students.length; i++) {
    // The inner loop interates over each subject while still looping through 'students' array
    for (let o = 0; o < subjects.length; o++) {
        console.log(`${students[i]} - ${subjects[o]}`);
    }
}