const ProductService = require('../../Domain/Services/ProductService');

const ProductController = {};

ProductController.allProduct = async (req, res) => {
    try {
        const products = await ProductService.allProducts();
        return res.json(products);
    }catch {
        return res.status(500).send({error: 'Server Error'});
    }
};

ProductController.singleProduct = async (req, res) => {
    try {
        const {productId} = req.params;
        const product = await ProductService.singleProduct(productId);
        return res.json(product);
    }catch {
        return res.status(500).send({error: 'Server Error'});
    }
};

ProductController.delete = async (req, res) => {
    try {
        const {productId} = req.params;
        const deleted = await ProductService.deleteProduct(productId);
        if(deleted){
            return res.json({success: 'Product deleted'});
        }
        return res.status(400).json({error: 'Unable to delete the product'});
    }catch {
        return res.status(500).send({error: 'Server Error'});
    }
};

module.exports = ProductController;
