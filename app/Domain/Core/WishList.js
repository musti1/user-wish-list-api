const uuid = require('uuid/v1');

class WishList {
    constructor(
        wishlistId,
        name,
    ) {
        this.wishlistid = wishlistId;
        this.name = name;
    }

    toStoreObject(){
        return {
            wishlistId: this.wishlistid,
            name: this.name,
        }
    }

    static createFromDetails(name) {
        return new WishList(
            uuid(),
            name,
        )
    }

    static createFromObject(userObj) {
        return new WishList(
            userObj.wishlistid,
            userObj.name,
        );
    }
}

module.exports = WishList;
