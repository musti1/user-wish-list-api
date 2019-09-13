const { expect } = require('chai');
const { it, describe } = require('mocha');
const WishListProductDAO = require('../../../../app/Infrastructure/DAOs/WishListProductDAO');

const productId = 'productId1'
const wishListId = 'wishListId1'

describe('WishListProductDAO Test', () => {
    it('should create wishListProductDAO by given productId, wishListId', async function(){
        this.timeout(100000);
        const createdObj = await WishListProductDAO.createWishListProduct(productId, wishListId);
        console.log('createdObj:', createdObj)
    });

    it('should return products from given wishListId', async function(){
        this.timeout(100000);
        const productsArray = await WishListProductDAO.getProductsByWishListId(wishListId);
        console.log('productsArray:', productsArray)
    });

});
