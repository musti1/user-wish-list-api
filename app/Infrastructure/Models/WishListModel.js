const Sequelize = require('sequelize');
const PostGreSQLConn = require('../DbConnections/postgreSql');

const wishListModel = PostGreSQLConn.define('WishList', {
    wishListId: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {type: Sequelize.STRING},
});

module.exports = wishListModel;
