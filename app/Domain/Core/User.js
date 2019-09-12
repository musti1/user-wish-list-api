const uuid = require('uuid/v1');

class User {
    constructor(
        userId,
        fullName,
        email,
    ) {
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.password = '';
    }

    setPassword(password) {
        this.password = password;
    }

    toStoreObject(){
        return {
            userId: this.userId,
            fullName: this.fullName,
            email: this.email,
            password: this.password
        }
    }

    static createFromDetails(fullName = '', email = '') {
        return new User(
            uuid(),
            fullName,
            email
        )
    }

    static createFromObject(userObj) {
        return new User(
            userObj.userId,
            userObj.fullName,
            userObj.email
        );
    }
}

module.exports = User;
