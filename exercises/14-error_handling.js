function f() {
    try {
        throw new Error();
    } catch (err) {
        var err = 5;
        var boo = 10;
        console.log(err);
    }
    console.log(err);
    console.log(boo);
};

console.log("Guess 1: 5");
console.log("Guess 2: 5");
console.log("Guess 3: undefined");

f();