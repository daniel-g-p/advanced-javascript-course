// LEVEL 1: MANUAL CREATION

// const elf = {
//     name: "Alfred",
//     weapon: "sword",
//     attack() {
//         return this.name + " attacks with " + this.weapon
//     }
// }

// LEVEL 2: OBJECT.CREATE

// const elfFunctions = {
//     attack() {
//         return this.name + " attacks with " + this.weapon + "!";
//     },
//     defend() {
//         return this.name + " blocks the attack!";
//     }
// }

// function createCharacter(name, weapon, breed) {
//     let character = Object.create(elfFunctions);
//     console.log(character.__proto__);
//     character.name = name;
//     character.weapon = weapon;
//     character.breed = breed;
//     return character;
// }

// const alfred = createCharacter("Alfred", "Sword", "Elf");


// LEVEL 3: CONSTRUCTOR FUNCTIONS

// function Character(name, weapon, breed) {
//     this.name = name;
//     this.weapon = weapon;
//     this.breed = breed;
// }

// Character.prototype.attack = function() {
//     return this.name + " attacks with " + this.weapon + "!";
// };

// Character.prototype.defend = function() {
//     return this.name + " blocks the attack!";
// };

// const alfred = new Character("Alfred", "Sword", "Elf");
// const gorgi = new Character("Gorgi", "Bow", "Gnome");


// LEVEL 4: CLASSES

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     };#
//     attack() { return this.name + " attacks with " + this.weapon + "!" }#
//     defend() { return this.name + " blocks the attack!" }
// }

// class Elf extends Character {
//     constructor(name, weapon, height) {
//         super(name, weapon);
//         this.height = height;
//     }
// }

// alfred.attack();

// const alfred = new Character("Alfred", "Sword");
// const gorgi = new Character("Gorgi", "Bow", "4ft5");
// const pete = new Elf("Pete", "Morningstar", "5ft1");

// console.log(gorgi);
// console.log(pete);

// console.log(pete instanceof Character);
// console.log(pete instanceof Elf);


// SECTION EXERCISE

// class Character {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'Attack with ' + this.weapon + "!"
//     }
// }

// class Queen extends Character {
//     constructor(name, weapon, suit) {
//         super(name, weapon)
//         if (["spades", "hearts", "clubs", "diamonds"].includes(suit)) {
//             this.suit = suit
//         }
//     }
//     attack() {
//         return super.attack() + " - " + "I am the Queen of " + this.suit + ", now bow down to me!"
//     }
// }

// const victoria = new Queen("Victoria", "Army", "hearts");

// const output = victoria.attack();



// FUNCTIONAL PROGRAMMING APPROACH

const create = {
    character(name, weapon) {
        return {
            name,
            weapon
        }
    },
    Jack(name, weapon) {
        const jack = this.character(name, weapon);
        jack.enchant = get.enchant(30);
        return jack;
    },
    Queen(name, weapon) {
        const queen = this.character(name, weapon);
        queen.attack = get.attack(25);
        queen.heal = get.heal(50);
        return queen;
    },
    King(name, weapon) {
        const king = this.character(name, weapon);
        king.attack = get.attack(75);
        king.heal = get.heal(10);
        king.enchant = get.enchant(2);
        return king;
    }
}

const get = {
    attack(damage) {
        return function() {
            return `${this.name} attacks with ${this.weapon}! Damage: ${damage}`
        }
    },
    heal(heal) {
        return function() {
            return `${this.name} regains ${heal} health points!`
        }
    },
    enchant(time) {
        return function() {
            return `${this.name} enchants you for ${time} seconds!`
        }
    },
}

const j = create.Jack("Peter", "Bow");
const q = create.Queen("Victoria", "Sword");
const k = create.King("Max", "Army");