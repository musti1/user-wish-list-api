const DbUserRepository = require('../../Infrastructure/PostgreSQLRepository/DbUserRepository');

class AuthService {
    static async login(email, password){
        return DbUserRepository.findByEmailAndPass(email, password);
    }
}

module.exports = AuthService;
