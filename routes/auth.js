const express = require('express');
const router = express.Router();
require('dotenv').config();
const userController=require("../controllers/userController")

router.get('/signup',userController.getSignup)
router.post('/signup',userController.postSignup)
router.get('/signin',userController.getSignin)
router.post('/signin',userController.postSignin)


module.exports=router;