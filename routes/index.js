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

module.exports = router;
