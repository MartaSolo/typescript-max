// ------------- objects ------------------
// Defining an object by :object
// const person: object = {
//   name: "Marta",
//   age: 38,
// };

// console.log(person.name);

// Defining an object by  :{}
// const person: {} = {
//   name: "Marta",
//   age: 38,
// };

// console.log(person.name);

// Defining an object by  :{} and typing the keys:
// const person: { name: string; age: number } = {
//   name: "Marta",
//   age: 38,
// };

// console.log(person.name); // Marta
// console.log(person.age); // 38

// nested object with types
// const product: {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   };
// } = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new!",
//   },
// };

// ------------- arrays and tuples ------------------

// const person = {
//   name: "Marta",
//   age: 38,
//   hobbies: ["programming", "hiking", "photography"],
// };

// let favourites: [string, number];
// favourites = ["sport", 22];
// console.log(favourites); // ['sport', 22]
// // favourites = ["sport", 22, true];
// // // Type '[string, number, boolean]' is not assignable to type '[string, number]'.
// // //   Source has 3 element(s) but target allows only 2.

// favourites.push("photo");
// console.log(favourites); // ['sport', 22, 'photo']

// ------------- enums ------------------
// enum Role {
//   Admin = 100,
//   Read_only = 300,
//   Author = 500,
// }
// console.log(Role);
// // {100: 'Admin', 300: 'Read_only', 500: 'Author', Admin: 100, Read_only: 300, Author: 500}

// console.log(Role.Admin); // 0

// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction);
// // {1: 'Up', 2: 'Down', 3: 'Left', 4: 'Right', Up: 1, Down: 2, Left: 3, Right: 4}

// // ------------- unions ------------------
// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// console.log(combine("Max", "Anna")); // MaxAnna
// console.log(combine(8, 12)); // 20

// ------------- type aliases ------------------
type chars = string;
let messsage: chars; // same as string type

type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = "Hi"; // valid
// input = false; // Compiler error

type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  // function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine("Max", "Anna")); // MaxAnna
console.log(combine(8, 12)); // 20

type Conversion = "to-number" | "to-string";

// type aliases with objects
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!

// we can simplufy this code:
function greet(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// to:
type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
