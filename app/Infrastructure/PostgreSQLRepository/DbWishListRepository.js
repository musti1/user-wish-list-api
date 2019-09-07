const postgres = require('../DbConnections/postgreSql');
const WishList = require('../../Domain/Core/WishList');

class DbWishListRepository {
    /**
     * Add WishList in database
     * @param {WishList} wishList
     * @return Promise<boolean>
     */
    static async add(wishList) {
        try {
            await postgres.query(`INSERT INTO TABLE_NAME (wishlistid, name) VALUES 
                            (${wishList.wishlistid}, ${wishList.name});`);
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
            const wishListObjs = await postgres.query('SELECT * FROM wishlists');
            return wishListObjs.rows.map((wishListObj) => {
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
            const wishListObj = await postgres.query(`SELECT * FROM wishlists WHERE wishlistid='${wishListId}'`);
            return WishList.createFromObject(wishListObj.rows[0]);

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
            await postgres.query(`DELETE FROM wishlists WHERE wishlistid='${wishListId}'`);
            return true
        } catch {
            throw new Error();
        }
    }
}

module.exports = DbWishListRepository;
