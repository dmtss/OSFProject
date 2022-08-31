const userServices=require('../services/userServices')


exports.getSignup=async function (req, res, next) {
    if(!req.session.email) {
        try {
            res.status(200).render("signup", {
                title: "Alibazon",
                category: "Sign Up",
            })
        } catch (err) {
            res.status(500).json({message: err});
        }
    }
    else{
        res.status(302).redirect('back')
    }

}


exports.postSignup=async function (req, res, next) {
    try {
        if (req.body.username && req.body.password && req.body.email) {
            if (req.body.password !== req.body.confirm_password) {
                var err = new Error("Passwords do not match.")
                err.status = 400;
                return next(err);
            }
            try {
                await userServices.postSignupServices(req)
                return res.status(302).redirect("../signin")
            }
            catch (err){
                var err=new Error('Couldnt send the data to the end-point');
                err.status=400;
                return next(err);
            }
        } else {
            var err = new Error('All fields required');
            err.status = 400;
            return next(err);
        }
    } catch (err) {
        res.status(500).json({message: err});
    }
}

exports.getSignin=async function (req, res, next) {
     if(!req.session.email) {
         try {
             res.status(200).render("signin", {
                 title: "Alibazon",
                 category: "Sign In",
             })
         } catch (err) {
             res.status(500).json({message: err});
         }
     }else{
         res.status(302).redirect('back')
     }
}

exports.postSignin=async function (req, res, next) {
    try {
        if (req.body.password && req.body.email) {
            try {
                res.locals.userId = req.session.userid;
                await userServices.postSigninServices(req)
                return res.status(302).redirect("/profile");
            }
            catch (err){
                var err=new Error('Username or password is incorrect');
                err.status=400;
                return next(err);
            }
        } else {
            var err = new Error('Email and password are required');
            err.status = 401;
            return next(err);
        }
    } catch (err) {
        res.status(500).json({message: err});
    }
}

exports.profileController=function(req,res,next){
    if(!req.session.userid){               
      return res.status(302).redirect("/signin")
    }
    res.status(200).render('profile', {
        title:"Alibazon",
        category:"Profile",
        username:req.session.userName,
        email:req.session.email
    });
}


exports.logoutController=function (req,res,next){
    if(req.session){
        req.session.destroy(function (err){
            if(err){
                return next(err);
            }else{
                return res.redirect('/');
            }
        });
    }
}

exports.cartController = async function (req,res,next) {
    try {
        if (req.session.userid && req.session.token) {
            try {
                const response=await userServices.getCartServices(req);
                res.status(200).render("cart",{
                    title:"Alibazon",
                    items:response.data,
                    secretKey:api_key
                })

            } catch (err) {
                err.status = 400;
                return res.status(400).render("cart",{
                    title:"Alibazon",
                    items:undefined,
                    secretKey:api_key
                });
            }
        } else {
            res.status(302).redirect('./signin')

        }
    } catch (err) {
        err=new Error("Couldn't send data to the endpoint")
        err.status=500
        return next(err)
    }
}

exports.cartAddItemController =async function (req, res, next) {
    try {
        if (req.session.userid && req.session.token) {
            try {
                await userServices.addToCartServices(req);
                res.status(302).redirect('./cart');
            }
            catch (err){
                var err=new Error('Couldnt send the data to the endpoint');
                err.status=400;
                return next(err);
            }
        } else {
            res.redirect('./auth/signin')

        }
    } 
    catch (err) {
        err=new Error("couldn't send data to the endpoint")
        err.status=500
        return next(err)
    }

}

exports.cartGetItemController =async (req, res, next) => {
    try {
        const response = await userServices.addToCartServices(req)
        res.status(200).send(response.data)
    } catch (err) {
        err=new Error("couldn't send data to the endpoint")
        err.status=500
        return next(err)
    }

}


exports.cartRemoveItemController =async (req, res, next) => {
        try {
            await userServices.removeFromCartServices(req)
            res.status(302).redirect('back')
        } catch (err) {
            err=new Error("couldn't send data to the endpoint")
            err.status=500
            return next(err)
        }

}


exports.cartItemQuantityController =async (req, res, next) => {
    try {
        const response = await userServices.changeQuantityCartServices(req)
        res.status(200).send(response.data)
    } catch (err) {
        err=new Error("couldn't send data to the endpoint")
        err.status=500
        return next(err)
    }

} 


