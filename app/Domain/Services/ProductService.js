const DbProductRepository = require('../../Infrastructure/PostgreSQLRepository/DbProductRepository');

class ProductService {
    static async allProducts(){
        return DbProductRepository.findAll();
    }

    static async singleProduct(productId){
        return DbProductRepository.findByProductId(productId);
    }

    static async deleteProduct(productId){
        return DbProductRepository.remove(productId);
    }
}

module.exports = ProductService;
