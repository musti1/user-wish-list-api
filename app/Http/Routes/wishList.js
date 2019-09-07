const express = require('express');
const router = express.Router({});

const WishListController = require('../Controllers/WishListController');

router.get('/create', WishListController.create);
router.get('/list', WishListController.allWishLists);
router.get('/delete/:wishListId', WishListController.delete);
router.get('/wish-list/:wishListId', WishListController.singleWishList);

module.exports = router;
