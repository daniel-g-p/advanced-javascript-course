// OOP Approach

// class User {
//     constructor(name, active) {
//         this.name = name;
//         this.active = active;
//         this.cart = [];
//         this.total = 0;
//         this.paid = 0;
//         this.refunded = 0;
//         this.purchases = [];
//         this.history = [];
//     }
//     add(...items) {
//         for (let item of items) {
//             this.cart.push(item);
//             this.total += item.price;
//             console.log(`'${item.name}' was added to ${this.name}'s cart.`);
//         }
//         this.track("add items to cart", 0);
//         return this.cart;
//     }
//     tax() {
//         this.total *= 1.03;
//         return this.total;
//     }
//     buy() {
//         this.purchases = this.cart.map(item => { return item });
//         this.paid += this.total;
//         this.track("purchase items", "-" + this.total);
//         this.empty();
//         return this.total;
//     }
//     empty() {
//         this.cart = [];
//         this.total = 0;
//         this.track("empty cart", 0);
//     }
//     order(...items) {
//         this.add(...items);
//         this.tax();
//         this.buy();
//     }
//     refund(...indexes) {
//         let refund = 0;
//         for (let index of indexes) {
//             refund += this.purchases[index].price;
//             this.purchases.splice(index, 1);
//         }
//         this.paid -= refund;
//         this.refunded += refund * 1.03;
//         this.track("request refund", "+" + refund)
//     }
//     track(action, transaction) {
//         const date = new Date();
//         return this.history.unshift({
//             action: action,
//             transaction: transaction,
//             date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
//             time: `${date.getHours()}:${date.getMinutes()}`
//         })
//     }
// }
// class Item {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const kim = new User("Kim", true);
// const book = new Item("Book", 10);
// const laptop = new Item("Laptop", 749);
// const mouse = new Item("Mouse", 39);

// kim.order(book, laptop, mouse);
// setTimeout(() => {
//     kim.refund(1);
//     console.log(kim);
// }, 5000);



// FP APPROACH

const data = {
    users: [],
    products: []
}

const fn = {
    newUser(name) {
        user = {
            name,
            total: 0,
            paid: 0,
            refunded: 0,
            cart: [],
            purchases: [],
            history: []
        }
        data.users.unshift(user);
        return user;
    },
    newProduct(name, price) {
        product = {
            name,
            price
        }
        data.products.unshift(product);
        return product;
    },
    addItems(user, ...items) {
        for (let i of items) {
            user.cart.unshift(i.name);
            user.total += this.tax(i.price);
            this.track(user, `Added "${i.name}" to cart.`, 0);
        }
        return user.cart;
    },
    removeItems(user, ...items) {
        for (let i of items) {
            user.cart.splice(user.cart.find(item => item.name === i.name), 1);
            user.total -= this.tax(i.price);
            this.track(user, `Removed "${i.name}" from cart.`, 0);
        }
        return user.cart;
    },
    tax(n) {
        return n * 1.3;
    },
    buy(user) {
        const payable = user.total;
        user.paid += user.total;
        this.removeItems(user, ...user.cart)
        this.track(user, "Purchased items in cart", -payable);
        return payable;
    },

    refund(user, ...items) {
        let refund = 0;
        for (let i of items) {
            user.purchases.splice(user.purchases.indexOf(i), 1);
            user.refunded += i.price;
            refund += i.price;
            this.track(user, `Refunded purchase of "${i.name}".`, +refund);
        }
        user.refunded
    },
    track(user, action, transaction) {
        const date = new Date();
        user.history.unshift({
            action: action,
            transaction: transaction,
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        });
        return user.history[0];
    },
    order(user, items, refund) {
        this.addItems(name, ...items);
        this.buy(name);
        refund ? this.refund(name, refund) : null;
    },
}