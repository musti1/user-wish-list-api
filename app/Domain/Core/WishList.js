const uuid = require('uuid/v1');

class WishList {
    constructor(
        wishListId,
        name,
    ) {
        this.wishListId = wishListId;
        this.name = name;
    }

    toStoreObject(){
        return {
            wishListId: this.wishListId,
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
            userObj.wishListId,
            userObj.name,
        );
    }
}

module.exports = WishList;
