const Product = require('../../Domain/Core/Product');
const productModel = require('../Models/ProductModel');

class DbProductRepository {
    /**
     * Add Product in database
     * @param {Product} product
     * @return Promise<boolean>
     */
    static async add(product) {
        try {
            await productModel.create(product.toStoreObject());
            return true
        } catch {
            throw new Error('Failed to add product');
        }
    }

    /**
     * Find All Product from database
     * @return {Product[]}
     */
    static async findAll() {
        try {
            const productObjs = await productModel.findAll({});
            return productObjs.map((productObj) => {
                return Product.createFromObject(productObj);
            });
        } catch {
            throw new Error('Unable to get Products');
        }
    }

    /**
     * Find Product by Product Id from database
     * @param {string} productId
     * @return {Product}
     */
    static async findByProductId(productId) {
        try {
            const productObj = await productModel.findOne({
                where: {
                    productId
                }
            });
            return Product.createFromObject(productObj);

        } catch {
            throw new Error();
        }
    }

    /**
     * Delete Product from database by Product Id
     * @param {string} productId
     * @return Promise<boolean>
     */
    static async remove(productId) {
        try {
            await productModel.destroy({
                where: {
                    productId
                }
            });
            return true
        } catch {
            throw new Error();
        }
    }
}

module.exports = DbProductRepository;
