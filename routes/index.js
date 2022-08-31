var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const userController=require('../controllers/userController')


router.get('/',async function (req, res, next) {
  try {
      await res.redirect("/categories/women")
  }catch (err){
      res.status(500).json({message: err});
  }
})

router.get('/signup',function(req, res, next){
  return res.render('signup', {});
});

router.get('/signin',function(req, res, next){
  return res.render('signin', {
    title: 'Sign In'
  });
});




router.get('/profile',userController.profileController)
router.get('/logout',userController.logoutController)


router.get('/cart',userController.cartController)
router.post('/cart/add',userController.cartAddItemController)
router.get('/cart/:productid',userController.cartGetItemController)
router.get('/cart/remove/:productid',userController.cartRemoveItemController )
router.get('/cart/changeItemQuantity/:productid/:quantity',userController.cartItemQuantityController)


module.exports = router;
