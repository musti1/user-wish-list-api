const DbUserRepository = require('../../Infrastructure/PostgreSQLRepository/DbUserRepository');
const User = require('../Core/User');

class AuthService {
    static async login(email, password){
        return DbUserRepository.findByEmailAndPass(email, password);
    }

    static async newUser(fullName, email, password){
        const user = User.createFromDetails(fullName, email);
        user.setPassword(password);
        return DbUserRepository.add(user);
    }
}

module.exports = AuthService;
