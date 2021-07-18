export class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.session = null;
    }
    login(password) {
        if (password === this.password && !this.session) {
            this.session = Math.floor(Math.random() * 1000000);
            return "Logged in"
        } else if (this.session) {
            return "Already logged in"
        } else {
            return "Incorrect password"
        }
    }
    logout() {
        this.session = null;
        return "Logged out"
    }
}