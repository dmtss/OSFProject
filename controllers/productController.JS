const productServices=require('../services/productServices.js')

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
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensBottomsController= async function (req, res, next) {
    try {
        
        const response = await productServices.womensBottomsService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            name: "bottoms"
        })
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensJacketsController= async function (req, res, next) {
    try {
        
        const response = await productServices.womensJacketsService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            name: "jackets"
        })
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensDressesController= async function (req, res, next) {
    try {
        
        const response = await productServices.womensDressesService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            name: "dresses"

        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensRedController= async function (req, res, next) {
    try {
        
        const response = await productServices.womensRedService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            name: "feeling-red"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensOutfitsController= async function (req, res, next) {
    try {
        
        const response = await productServices.womensOutfitsService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            name: "outfits"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensTopsController= async function (req, res, next) {
    try {
        
        const response = await productServices.womensTopsService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            name: "tops"
        })
        
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
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}


exports.womensScarvesController=async function (req, res, next) {
    try {
        const response = await productServices.womensScarvesService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women",
            name: "scarves"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}


exports.womensShoesController=async function (req, res, next) {
    try {
        const response = await productServices.womensShoesService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women",
            name: "shoes"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensEarringsController=async function (req, res, next) {
    try {
        const response = await productServices.womensEarringsService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            name: "earrings"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}


exports.womensBraceletsController=async function (req, res, next) {
    try {
        const response = await productServices.womensBraceletsService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            name: "bracelets"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensNecklacesController=async function (req, res, next) {
    try {
        const response = await productServices.womensNecklacesService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            name: "necklaces"
        })
        
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
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensTiesController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensTiesService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            name: "ties"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensLuggageController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensLuggageService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            name: "luggage"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensGlovesController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensGlovesService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            name: "gloves"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensDressController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensDressService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            name: "dress-shirts"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensShortsController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensShortsService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            name: "shorts"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}
exports.mensJacketsController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensJacketsService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            name: "jackets"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensPantsController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensPantsService()
        res.status(200).render("product", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            name: "pants"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}
exports.mensSuitsController= async function (req, res, next) {
    try {
        
        const response = await productServices.mensSuitsService()
        res.status(200).render("product", "productdetail", {
            title: "Alibazon",
            items: response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            name: "suits"
        })
        
    } catch (err) {
        err=new Error("Couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

//PRODUCT CONTROLLERS - WOMEN

exports.womensEarringsProductController=async (req, res, next) => {
    try {

        const response = await productServices.womensEarringsProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            type:"Earrings"
        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensNecklacesProductController=async (req, res, next) => {
    try {
        const response = await productServices.womensNecklacesProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Jewelry",
            varlink:"women",
            type:"Necklaces"


        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensScarvesProductController=async (req, res, next) => {
    try {
        const response = await productServices.womensScarvesProduct(req)
        res.status(200).render("productdetail",{
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women",
            type:"Scarves"


        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensShoesProductController=async (req, res, next) => {
    try {
        const response = await productServices.womensShoesProduct(req)
        res.status(200).render("productdetail",{
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Accessories",
            varlink:"women",
            type:"Shoes"
                   })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensDressesProductController=async (req, res, next) => {
    try {
        const response = await productServices.womensDressesProduct(req)
        res.status(200).render("productdetail",{
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Dresses"
                   })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensJacketsProductController=async (req, res, next) => {
    try {
        const response = await productServices.womensJacketsProduct(req)
        res.status(200).render("productdetail",{
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Jackets & Coats"

        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensBottomsProductController=async (req, res, next) => {
    try {
        const response = await productServices.womensBottomsProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Bottoms",
           

        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.womensTopsProductController=async (req, res, next) => {
    try {
        const response = await productServices.womensTopsProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Womens",
            parentcategory:"Clothing",
            varlink:"women",
            type:"Tops",
                   })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensLuggageProductController=async (req, res, next) => {
    try {
        const response = await productServices.mensLuggageProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Luggages",
           

        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensGlovesProductController=async (req, res, next) => {
    try {
        const response = await productServices.mensGlovesProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Gloves",
           

        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensTiesProductController=async (req, res, next) => {
    try {
        const response = await productServices.mensTiesProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Accessories",
            varlink:"men",
            type:"Ties",
           

        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensDressProductController=async (req, res, next) => {
    try {
        const response = await productServices.mensDressProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Dress Shirts",
           

        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensShortsProductController=async (req, res, next) => {
    try {
        const response = await productServices.mensShortsProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Shorts",
           

        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensJacketsProductController=async (req, res, next) => {
    try {
        const response = await productServices.mensJacketsProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Jackets & Coats",
           

        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}


exports.mensPantsProductController=async (req, res, next) => {
    try {
        req.params.productid
        const response = await productServices.mensPantsProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Pants",
           

        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}

exports.mensSuitsProductController=async (req, res, next) => {
    try {
        req.params.productid
        const response = await productServices.menssSuitsProduct(req)
        res.status(200).render("productdetail",{
            
            title:"Alibazon",
            items:response.data,
            category:"Mens",
            parentcategory:"Clothing",
            varlink:"men",
            type:"Suits",
           

        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}


exports.productSearchController=async (req, res, next) => {
    try {
        req.params.productname
        const response = await productServices.searchProduct(req)
        res.status(200).render("search",{
            title:"Alibazon",
            items:response.data,
        })
    } catch (err) {
        err=new Error("couldn't get data from the endpoint")
        err.status=500
        return next(err)
    }

}