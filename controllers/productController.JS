const productServices=require('../services/productServices')

//WOMEN CONTROLLERS

exports.womenController=async function (req, res, next) {
    try {
        const response = await productServices.womensService()
        res.status(200).render("main", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Women",
            varlink:"women"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}



exports.womensClothingController=async function (req, res, next) {
    try {
        const response = await productServices.womensClothingService()
        res.status(200).render("categories", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}


exports.womensJewelryController=async function (req, res, next) {
    try {
        const response = await productServices.womensJewelryService()
        res.status(200).render("categories", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}



exports.womensAccessoriesController=async function (req, res, next) {
    try {
        const response = await productServices.womensAccessoriesService()
        res.status(200).render("categories", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}


// MEN CONTROLLERS

exports.menController= async function (req, res, next) {
    try {
        // 
        const response = await productServices.mensService()
        res.status(200).render("main", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Men",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}
exports.mensClothingController= async function (req, res, next) {
    try {
        const response = await productServices.mensClothingService()
        res.status(200).render("categories", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensAccessoriesController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensAccessoriesService()
        res.status(200).render("categories", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensTiesController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensTiesService()
        res.status(200).render("subcategories", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensLuggageController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensLuggageService()
        res.status(200).render("subcategories", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensGlovesController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensGlovesService()
        res.status(200).render("subcategories", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensDressController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensDressService()
        res.status(200).render("subcategories", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensShortsController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensShortsService()
        res.status(200).render("subcategories", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}
exports.mensJacketsController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensJacketsService()
        res.status(200).render("subcategories", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensPantsController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensPantsService()
        res.status(200).render("subcategories", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}
exports.mensSuitsController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensSuitsService()
        res.status(200).render("subcategories", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men"
        })
        console.log(response.data)
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}