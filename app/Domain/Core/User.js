const uuid = require('uuid/v1');

class User {
    constructor(
        userId,
        fullname,
        email,
    ) {
        this.userId = userId;
        this.fullname = fullname;
        this.email = email;
        this.password = '';
    }

    setPassword(password) {
        this.password = password;
    }

    toStoreObject(){
        return {
            userId: this.userId,
            fullname: this.fullname,
            email: this.email,
            password: this.password
        }
    }

    static createFromDetails(fullname = '', email = '') {
        return new User(
            uuid(),
            fullname,
            email
        )
    }

    static createFromObject(userObj) {
        return new User(
            userObj.userid,
            userObj.fullname,
            userObj.email
        );
    }
}

module.exports = User;
