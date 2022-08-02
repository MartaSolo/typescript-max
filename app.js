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
// ------------- arrays ------------------
var person = {
    name: "Marta",
    age: 38,
    hobbies: ["programming", "hiking", "photography"]
};
var favourites;
favourites = ["sport", 22];
console.log(favourites); // ['sport', 22]
// favourites = ["sport", 22, true];
// // Type '[string, number, boolean]' is not assignable to type '[string, number]'.
// //   Source has 3 element(s) but target allows only 2.
favourites.push("photo");
console.log(favourites); // ['sport', 22, 'photo']
