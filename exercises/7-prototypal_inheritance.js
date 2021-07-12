Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}

const today = new Date();


customMap = function(emoji) {
    const output = [];
    for (let item of this) { output.push(item + emoji) };
    return output;
}

Array.prototype.map = customMap;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const bigArr = [10, 20, 30, 40, 50, 60, 70, 80, 90];


const testFunction = function() {
    return "This is a placeholder function...";
}

Function.prototype.bind = function(target, ...args) {
    const f = this;
    return function() {
        return f.apply(target, args);
    }
}



const mapWithPin = Array.prototype.map.bind(bigArr, "📍");