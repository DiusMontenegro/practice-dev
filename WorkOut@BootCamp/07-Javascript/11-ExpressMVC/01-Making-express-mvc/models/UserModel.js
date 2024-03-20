class UserModel {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    save() {
        // Logic to save user to database
    }
}

module.exports = UserModel;
