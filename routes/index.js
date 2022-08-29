var express = require('express');
var router = express.Router();
const axios = require('axios').default;


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

router.get('/profile',function(req, res, next){
  return res.render('profile', {
    title: 'Profile'
  });
});



module.exports = router;
