const productServices=require('../services/productServices')


exports.menController= function (req, res, next) {
    try {
        // 
      //  const response = await productServices.mensService()
        res.status(200).render("main", {
            title: "Alibazon",
           // items: response.data,
            category:"Mens",
            parentcategory:"Men",
            varlink:"men"
        })
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womenController= function (req, res, next) {
    try {
        //const response = await productServices.womensService()
        res.status(200).render("main", {
            title: "Alibazon",
            //items: response.data,
            category:"Womens",
            parentcategory:"Women",
            varlink:"women"
        })
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}