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
router.get('/men/clothing/jackets-coats',productController.mensJacketsController)
router.get('/men/clothing/pants',productController.mensPantsController)
router.get('/men/clothing/shorts',productController.mensShortsController)
router.get('/men/clothing/dress-shirts',productController.mensDressController)
router.get('/men/clothing/suits/:productid',productController.mensSuitsProductController)
router.get('/men/clothing/jackets-coats/:productid',productController.mensJacketsProductController)
router.get('/men/clothing/pants/:productid',productController.mensPantsProductController)
router.get('/men/clothing/shorts/:productid',productController.mensShortsProductController)
router.get('/men/clothing/dress-shirts/:productid',productController.mensDressProductController)

router.get('/men/accessories',productController.mensAccessoriesController)
router.get('/men/accessories/ties',productController.mensTiesController)
router.get('/men/accessories/luggage',productController.mensLuggageController)
router.get('/men/accessories/gloves',productController.mensGlovesController)
router.get('/men/accessories/ties/:productid',productController.mensTiesProductController)
router.get('/men/accessories/luggage/:productid',productController.mensLuggageProductController)
router.get('/men/accessories/gloves/:productid',productController.mensGlovesProductController)


router.get('/women',productController.womenController)
router.get('/women/clothing',productController.womensClothingController)
router.get('/women/clothing/tops',productController.womensTopsController)
router.get('/women/clothing/bottoms',productController.womensBottomsController)
router.get('/women/clothing/dresses',productController.womensDressesController)
router.get('/women/clothing/feeling-red',productController.womensRedController)
router.get('/women/clothing/outfits',productController.womensOutfitsController)
router.get('/women/clothing/jackets-coats',productController.womensJacketsController)
router.get('/women/clothing/tops/:productid',productController.womensTopsProductController)
router.get('/women/clothing/bottoms/:productid',productController.womensBottomsProductController)
router.get('/women/clothing/dresses/:productid',productController.womensDressesProductController)
router.get('/women/clothing/jackets-coats/:productid',productController.womensJacketsProductController)

router.get('/women/jewelry',productController.womensJewelryController)
router.get('/women/jewelry/earrings',productController.womensEarringsController)
router.get('/women/jewelry/bracelets',productController.womensBraceletsController)
router.get('/women/jewelry/necklaces',productController.womensNecklacesController)
router.get('/women/jewelry/earrings/:productid',productController.womensEarringsProductController)
router.get('/women/jewelry/necklaces/:productid',productController.womensNecklacesProductController)

router.get('/women/accessories',productController.womensAccessoriesController)
router.get('/women/accessories/scarves',productController.womensScarvesController)
router.get('/women/accessories/shoes',productController.womensShoesController)
router.get("/women/accessories/scarves/:productid",productController.womensScarvesProductController)
router.get('/women/accessories/shoes/:productid',productController.womensShoesProductController)
//CART


//WISHLIST


//ORDER


module.exports = router;