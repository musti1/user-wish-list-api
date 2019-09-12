const wishListModel = require('../Models/WishListModel');
const WishList = require('../../Domain/Core/WishList');

class DbWishListRepository {
    /**
     * Add WishList in database
     * @param {WishList} wishList
     * @return Promise<boolean>
     */
    static async add(wishList) {
        try {
            await wishListModel.create(wishList.toStoreObject());
            return true
        } catch {
            throw new Error('Failed to add wishlist');
        }
    }

    /**
     * Find All WishList from database
     * @return {WishList[]}
     */
    static async findAll() {
        try {
            const wishListObjs = await wishListModel.findAll({});
            return wishListObjs.map((wishListObj) => {
                return WishList.createFromObject(wishListObj);
            });
        } catch {
            throw new Error('Unable to get WishLists');
        }
    }

    /**
     * Find WishList by WishList Id from database
     * @param {string} wishListId
     * @return {WishList}
     */
    static async findByWishListId(wishListId) {
        try {
            const wishListObj = await wishListModel.findOne({where:{wishListId}});
            return WishList.createFromObject(wishListObj);

        } catch {
            throw new Error();
        }
    }

    /**
     * Delete WishList from database by WishList Id
     * @param {string} wishListId
     * @return Promise<boolean>
     */
    static async remove(wishListId) {
        try {
            await wishListModel.destroy({where:{wishListId}});
            return true
        } catch {
            throw new Error();
        }
    }
}

module.exports = DbWishListRepository;
