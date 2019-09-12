const Sequelize = require('sequelize');
const PostGreSQLConn = require('../DbConnections/postgreSql');

const productModel = PostGreSQLConn.define('Product', {
    productId: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {type: Sequelize.STRING},
    description: {type: Sequelize.STRING},
    quantity: {type: Sequelize.STRING},
});

module.exports = productModel;
