const WishListService = require('../../Domain/Services/WishListService');

const WishListController = {};

WishListController.create = async (req, res) => {
    try {
        const {name} = req.body;
        const wishList = await WishListService.newWishList(name);
        if(wishList){
            return res.json({success: 'Wish List Created'});
        }
        return res.status(400).json({error: 'Failed to create Wish List'});
    }catch {
        return res.status(500).send({error: 'Server Error'});
    }
};

WishListController.allWishLists = async (req, res) => {
    try {
        const wishLists = await WishListService.allWishLists();
        return res.json(wishLists);
    }catch {
        return res.status(500).send({error: 'Server Error'});
    }
};

WishListController.singleWishList = async (req, res) => {
    try {
        const {wishListId} = req.params;
        const wishList = await WishListService.singleWishList(wishListId);
        return res.json(wishList);
    }catch {
        return res.status(500).send({error: 'Server Error'});
    }
};

WishListController.delete = async (req, res) => {
    try {
        const {wishListId} = req.params;
        const deleted = await WishListService.deleteWishList(wishListId);
        if(deleted){
            return res.json({success: 'Wish List deleted'});
        }
        return res.status(400).json({error: 'Unable to delete the Wish List'});
    }catch {
        return res.status(500).send({error: 'Server Error'});
    }
};

module.exports = WishListController;
