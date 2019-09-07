const WishList = require('../Core/WishList');
const DbWishListRepository = require('../../Infrastructure/PostgreSQLRepository/DbWishListRepository');

class WishListService {
    static async newWishList(name){
        const wishList = WishList.createFromDetails(name);
        return DbWishListRepository.add(wishList);
    }
    static async allWishLists(){
        return DbWishListRepository.findAll();
    }

    static async singleWishList(wishListId){
        return DbWishListRepository.findByWishListId(wishListId);
    }

    static async deleteWishList(wishListId){
        return DbWishListRepository.remove(wishListId);
    }
}

module.exports = WishListService;
