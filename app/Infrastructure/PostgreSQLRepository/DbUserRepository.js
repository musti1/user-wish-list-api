const postgres = require('../DbConnections/postgreSql');
const User = require('../../Domain/Core/User');

class DbUserRepository {

    /**
     * Find All User from database
     * @return {User[]}
     */
    static async findAll() {
        try {
            const userObjs = await postgres.query('SELECT * FROM users');
            return userObjs.rows.map((userObj) => {
                return User.createFromObject(userObj);
            });
        } catch {
            throw new Error('Unable to get Users');
        }
    }

    /**
     * Find User by Email Id and Password from database
     * @param {string} email
     * @param {string} password
     * @return {User}
     */
    static async findByEmailAndPass(email, password) {
        try {
            const userObj = await postgres.query(`SELECT * FROM users WHERE email='${email}' AND password='${password}'`);
            if(userObj.rows.length > 0){
                return User.createFromObject(userObj.rows[0]);
            }
            return User.createFromObject();
        } catch {
            return false;
        }
    }

    /**
     * Find User by User Id from database
     * @param {string} userId
     * @return {User}
     */
    static async findByUserId(userId) {
        try {
            const userObj = await postgres.query(`SELECT * FROM users WHERE userid='${userId}'`);
            if(userObj.rows.length > 0){
                return User.createFromObject(userObj.rows[0]);
            }
            return User.createFromObject();
        } catch {
            throw new Error();
        }
    }

    /**
     * Delete User from database by User Id
     * @param {string} userId
     * @return Promise<boolean>
     */
    static async remove(userId) {
        try {
            await postgres.query(`DELETE FROM users WHERE userid='${userId}'`);
            return true
        } catch {
            throw new Error();
        }
    }
}

module.exports = DbUserRepository;
