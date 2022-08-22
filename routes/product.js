var express = require('express');
var router = express.Router();
const axios = require('axios').default;
require('dotenv').config();
const productController=require('../controllers/productController')

router.get('/',async function (req, res, next) {
  try {
      await res.redirect("/")
  }catch (err){
      res.status(500).json({message: err});
  }
})
//PRODUCTS

router.get('/men',productController.menController)
router.get('/men/clothing',productController.mensClothingController)
router.get('/men/clothing/suits',productController.mensSuitsController)
router.get('/men/clothing/jackets',productController.mensJacketsController)
router.get('/men/clothing/pants',productController.mensPantsController)
router.get('/men/clothing/shorts',productController.mensShortsController)
router.get('/men/clothing/dress-shirts',productController.mensDressController)
router.get('/men/accessories',productController.mensAccessoriesController)
router.get('/men/accessories/ties',productController.mensTiesController)
router.get('/men/accessories/luggage',productController.mensLuggageController)
router.get('/men/accessories/gloves',productController.mensGlovesController)
router.get('/women',productController.womenController)
router.get('/women/clothing',productController.womensClothingController)
router.get('/women/jewelry',productController.womensJewelryController)
router.get('/women/accessories',productController.womensAccessoriesController)

//CART


//WISHLIST


//ORDER


module.exports = router;