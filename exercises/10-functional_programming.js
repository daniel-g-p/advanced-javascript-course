// const array = [1, 2, 3, 4, 5];

// const a = (arr) => {
//     const array = arr.map(item => item);
//     array.pop();
//     console.log(array);
//     return array;
// }

// console.log("before", array);
// a(array);
// console.log("after", array);





function startApp() {
    const users = [{
        username: "a",
        password: "aaaaaa"
    }, {
        username: "b",
        password: "bbbbbb"
    }, {
        username: "c",
        password: "cccccc"
    }, {
        username: "d",
        password: "dddddd"
    }, {
        username: "e",
        password: "eeeeee"
    }];
    let sessionID;
    let username;
    return function(user, pass) {
        checkCredentials = users.find((item) => {
            return item.username === user && item.password === pass
        });
        if (checkCredentials && !sessionID) {
            sessionID = Math.random() * 100;
            username = user;
            return `Welcome back, ${user}! - Session ID: ${sessionID}`;
        } else if (checkCredentials && username === user) {
            return `You're already logged in, ${user}! - Session ID: ${sessionID}`;
        } else if (checkCredentials) {
            sessionID = Math.random() * 100;
            username = user;
            return `Welcome new user, ${user}! - Session ID: ${sessionID}`;
        } else if (sessionID) {
            return `Incorrect credentials, logged in as ${user}! - Session ID: ${sessionID}`;
        } else {
            return `Your credentials are invalid, please try again! - Session ID: ${sessionID}`;
        }
    }
}

const login = startApp();

console.log(login("a", "b"));
console.log(login("a", "aaaaaa"));
console.log(login("a", "b"));
console.log(login("a", "aaaaaa"));
console.log(login("c", "cccccc"));