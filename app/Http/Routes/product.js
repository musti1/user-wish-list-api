const express = require('express');
const router = express.Router({});

const ProductController = require('../Controllers/ProductController');

router.get('/list', ProductController.allProduct);
router.get('/:productId', ProductController.singleProduct);
router.get('/delete/:productId', ProductController.delete);

module.exports = router;
