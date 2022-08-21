var express = require('express');
var router = express.Router();
const axios = require('axios').default;
require('dotenv').config();
const productController=require('../controllers/productController')


router.get('/',async function (req, res, next) {
    try {
        await res.redirect("/categories/women")
    }catch (err){
        res.status(500).json({message: err});
    }
})
//PRODUCTS

router.get('/men',productController.menController)
router.get('/women',productController.womenController)


    

//CART


//WISHLIST


//ORDER


//CATEGORIES

module.exports = router;