const ProductWishListDAOModel = require('../Models/ProductWishListModel');
const ProductModel = require('../Models/ProductModel');
const uuid = require('uuid/v1');
/**
 * DAO Class
 */
class WishListProductDAO{

    /**
     * Creates entry in table 'product_wishlist_dao'
     * @param {String} productId
     * @param {String} wishListId
     *
     * @returns {Promise<>}
     */
    static async createWishListProduct(productId, wishListId){
        let created = null;
        try{
            created = await ProductWishListDAOModel.create({productWishListDAOId:uuid(), productId, wishListId});
        }catch(err){
            console.error(err);
        }
        return created;
    }

    /**
     * gets all the products through wish list id
     * @param {String} wishListId
     *
     * @returns {[]}
     */
    static async getProductsByWishListId ( wishListId ) {
        let products = null;
        try{
            const DAOArr = await ProductWishListDAOModel.findAll({where: {
                wishListId
            }});
            for(const productWishListDAO of DAOArr){
                const product = await ProductModel.findOne({where:{
                    productId: productWishListDAO.productId
                }});
                if(product){
                    products.push(product);
                }
            }
        }catch(err){
            console.error(err);
        }
        return products;
    }
}


module.exports = WishListProductDAO;