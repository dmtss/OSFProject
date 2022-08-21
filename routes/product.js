var express = require('express');
var router = express.Router();
const axios = require('axios').default;
require('dotenv').config();
const productController=require('../controllers/productController')



router.get('/', function (req, res, next) {
    try{
     res.status(200).render("main", {
        title: "Alibazon",
        parentcategory: "got",
    })
  } catch (err) {
    err.status=500
    return next(err)
  }
  });
  
//PRODUCTS



router.get('/men',productController.menController)
router.get('/women',productController.womenController)

//CART


//WISHLIST


//ORDER


//CATEGORIES

module.exports = router;