// let user1 = { name: "nerd", org: "dev" };
// let user2 = {
//     org: "dev",
//     name: "nerd"
// };
// let eq = user1 == user2;

// function compareObjects(object1, object2) {
//     const keys = Object.keys(object1);
//     for (let key of keys) {
//         if (object1[key] !== object2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// const comparison = compareObjects(user1, user2);
// console.log(comparison);


const number = 100
const string = "Jay"
let obj1 = {
    value: "a"
}
let obj2 = {
    value: "b"
}
let obj3 = obj2;

function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj2.value = "c";
    obj1 = obj2;
    return obj1;
}

console.log(change(number, string, obj1, obj2) == obj1);

//Guess the outputs here before you run the code: 
console.log("Guess: 100 / Output: ", number);
console.log("Guess: Jay / Output: ", string);
console.log("Guess: c / Output: ", obj1.value);
console.log("Guess: c / Output: ", obj2.value);

console.log(obj3);