import { User } from "./12-modules.js";

const james = new User("James", "mambaforever");
console.log(james);
console.log(james.login("mamba"));
console.log(james.login("mambaforever"));
console.log(james.login("mamba"));
console.log(james.login("mambaforever"));
console.log(james.logout());
console.log(james.session);