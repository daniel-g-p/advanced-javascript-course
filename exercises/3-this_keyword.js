// const a = function() {
//     console.log("a", this)
//     const b = function() {
//         console.log("b", this)
//         const c = {
//             hi: function() {
//                 console.log("c", this)
//             }
//         }
//         c.hi()
//     }
//     b()
// }

// a()


// const obj = {
//     name: 'Billy',
//     sing: function() {
//         console.log("a", this);
//         let anotherFunc = function() {
//             console.log("b", this);
//         }
//         anotherFunc();
//     }
// }

// const array = [1, 2, 3, 50];

// function getMaxNumber(arr) {
//     // Using apply to directly pass in an array
//     console.log(Math.max.apply(null, arr));

//     // Using the spread operator to pss in the individual values from the array
//     console.log(Math.max(...arr));
// }

// getMaxNumber(array);


// function multiply(a, b) {
//     console.log(a * b);
//     return a * b;
// }

// const multiplyByTwo = multiply.bind(this, 2);

// console.log(multiplyByTwo);

// multiplyByTwo(7.5);


// const b = {
//     name: 'jay',
//     say() { console.log(this) }
// }

// const c = {
//     name: 'jay',
//     say() { return function() { console.log(this) } }
// }

// const d = {
//     name: 'jay',
//     say() { return () => console.log(this) }
// }

// console.log("B: { Object b }")
// b.say();

// console.log("C: window")
// c.say()();

// console.log("D: { Object d }")
// d.say()();


const character = {
    name: 'Simon',
    getCharacter: () => {
        return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log('?', giveMeTheCharacterNOW());

// Problem: "this" refers to the window in this situation and "name" is not defined in the global scope