class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }
    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        if (this.length > 0) { this.length-- };
        return item;
    }
    shift(index, direction) {
        if (direction === "down") {
            for (let i = index; i < this.length - 1; i++) {
                this.data[i] = this.data[i + 1];
            }
            this.pop();
        } else if (direction === "up") {
            for (let i = this.length; i > index; i--) {
                this.data[i] = this.data[i - 1];
            }
        }
        return this.data;
    }
    delete(index) {
        const item = this.get(index);
        delete this.data.index;
        this.shift(index, "down");
        return item;
    }
    insert(index, item) {
        this.shift(index, "up");
        this.data[index] = item;
        return item;
    }
    unshift(item) {
        this.insert(0, item);
        return item;
    }
}

function reverseString(string) {
    if (typeof string !== "string" || !string) { return "Please enter a valid string" };
    let output = "";
    for (let i = string.length - 1; i >= 0; i--) { output += string[i] };
    return output;
}

function reverseString2(string) {
    if (typeof string !== "string" || !string) { return "Please enter a valid string" };
    return string.split("").reverse().join("")
}

function mergeAndSort(...arrays) {
    if (arrays.some(a => !Array.isArray(a))) { return "Please enter a valid collection of arrays" }
    let output = [];
    for (i = 0; i < arrays.length; i++) { output = output.concat(arrays[i]) }
    output.sort((a, b) => a - b);
    return output;
}

function firstRecurringItem(array) {
    if (array.some(item => typeof item === "object")) {
        return "Invalid input";
    }
    const parsed = [];
    for (let arrayItem of array) {
        if (!parsed.find(item => item === arrayItem)) {
            parsed.push(arrayItem);
        } else {
            return arrayItem;
        }
    }
    return "No recurring items found";
}

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this.hash(key);
        const bucket = this.data[address];
        if (bucket) {
            const target = bucket.findIndex(item => item[0] === key);
            if (target === -1) {
                this.data[address].push([key, value]);
            } else {
                this.data[address][target][1] = value
            }
        } else {
            this.data[address] = [];
            this.data[address].push([key, value]);
        }
        return [key, value];
    }
    get(key) {
        const address = this.hash(key);
        const bucket = this.data[address];
        if (bucket && bucket.findIndex(item => item[0] === key) !== -1) {
            return this.data[address].find(item => item[0] === key);
        } else {
            return "Not found";
        }
    }
    keys() {
        const keys = [];
        for (let bucket of this.data) {
            if (bucket) {
                for (let item of bucket) {
                    keys.push(item[0]);
                }
            }
        }
        return keys;
    }
}

const table = new HashTable(20);