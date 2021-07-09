'use strict';

function grades(min, max, ...people) {
    console.log(arguments);
    console.log(min, max, people);
}

function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("After: ", i);
}

const script1 = (() => {
    function a() {
        console.log(this);
        return 5;
    }
    return {
        a: a
    }
})();

console.log(this);

const singer = {
    name: "Billy",
    age: 27,
    sing: function(name) {
        console.log("lalala " + name);
    },
    singTwice: function() {
        this.sing("Mamma");
        this.sing("Mia");
    }
}