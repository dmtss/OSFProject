const userServices=require('../services/userServices')


exports.getSignup=async function (req, res, next) {
    if(!req.session.email) {
        try {
            res.status(200).render("signUp", {
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
             res.status(200).render("signIn", {
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
                await userServices.postSigninServices(req)
                return res.status(302).redirect("/profile")
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