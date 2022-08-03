// ------------- objects ------------------
// Defining an object by :object
// const person: object = {
//   name: "Marta",
//   age: 38,
// };
var messsage; // same as string type
var input;
input = 100; // valid
input = "Hi"; // valid
function combine(input1, input2) {
    // function combine(input1: number | string, input2: number | string) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine("Max", "Anna")); // MaxAnna
console.log(combine(8, 12)); // 20
var u1 = { name: "Max", age: 30 }; // this works!
// we can simplufy this code:
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
