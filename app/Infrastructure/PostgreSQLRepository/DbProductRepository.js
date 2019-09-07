const postgres = require('../DbConnections/postgreSql');
const Product = require('../../Domain/Core/Product');

class DbProductRepository {
    /**
     * Add Product in database
     * @param {Product} product
     * @return Promise<boolean>
     */
    static async add(product) {
        try {
            await postgres.query(`INSERT INTO TABLE_NAME (productid, name, description, quantity) VALUES 
                            (${product.productid}, ${product.name}, ${product.description}, ${product.quantity});`);
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
            const productObjs = await postgres.query('SELECT * FROM products');
            return productObjs.rows.map((productObj) => {
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
            const productObj = await postgres.query(`SELECT * FROM products WHERE productid='${productId}'`);
            return Product.createFromObject(productObj.rows[0]);

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
            await postgres.query(`DELETE FROM products WHERE productid='${productId}'`);
            return true
        } catch {
            throw new Error();
        }
    }
}

module.exports = DbProductRepository;
