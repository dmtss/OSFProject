var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const productController=require('../controllers/productController')



router.get('/',(req, res) => {
    res.render('index');
});

//PRODUCTS

router.get('/men',productController.menController)
router.get('/women',productController.womenController)


    

//CART


//WISHLIST


//ORDER


//CATEGORIES

module.exports = router;