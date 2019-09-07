const uuid = require('uuid/v1');

class Product {
    constructor(
        productId,
        name,
        description,
        quantity
    ) {
        this.productid = productId;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }

    toStoreObject(){
        return {
            productId: this.productid,
            name: this.name,
            description: this.description,
            quantity: this.quantity
        }
    }

    static createFromDetails(name, description, quantity) {
        return new Product(
            uuid(),
            name,
            description,
            quantity
        )
    }

    static createFromObject(userObj) {
        return new Product(
            userObj.productid,
            userObj.name,
            userObj.description,
            userObj.quantity
        );
    }
}

module.exports = Product;
