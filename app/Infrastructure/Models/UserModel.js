const Sequelize = require('sequelize');
const PostGreSQLConn = require('../DbConnections/postgreSql');

const UserModel = PostGreSQLConn.define('User', {
    userId: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    fullName: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
});

module.exports = UserModel;
