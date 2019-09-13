const Sequelize = require('sequelize');
const PostGreSQLConn = require('../DbConnections/postgreSql');
const ProductModel = require('./ProductModel');
const WishListModel = require('./WishListModel');

const productWishListModel = PostGreSQLConn.define('Product_WishList_DAO', {
    productWishListDAOId: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    productId: {
        type: Sequelize.UUID,
        references: {
          model: ProductModel,
          key: 'productId'
        }
      },
      wishListId: {
        type: Sequelize.UUID,
        references: {
          model: WishListModel,
          key: 'wishListId'
        }
      },
});

module.exports = ProductWishListModel;