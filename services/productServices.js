require('dotenv').config();
const axios = require('axios').create({baseUrl: 'https://backend-academy-osf.herokuapp.com/api/'});

const api_key=process.env.API_KEY;

  exports.womensService=async function(){
    const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/womens?secretKey='+api_key)
    .then(resp => {
        return resp
    })
    .catch(err => {
        console.error(err);
    });
      return response;
}

  exports.womensClothingService=async function(){
    const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/womens-clothing?secretKey='+api_key)
    .then(resp => {
        return resp
    })
    .catch(err => {
        console.error(err);
    });
      return response;
  }

  exports.womensJewelryService=async function(){
    const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/womens-jewelry?secretKey='+api_key)
    .then(resp => {
        return resp
    })
    .catch(err => {
        console.error(err);
    });
      return response;
}

exports.womensAccessoriesService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/womens-accessories?secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}


  exports.mensService=async function(){
    console.log(api_key)
    const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens?secretKey='+api_key)
    .then(resp => {
        return resp
    })
    .catch(err => {
        console.error(err);
    });
      return response;
}


//MENS ACCESSORIES
exports.mensAccessoriesService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-accessories?secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensLuggageService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-luggage&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensGlovesService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-gloves&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensTiesService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=mens-accessories-ties&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

//MENS CLOTHING
exports.mensClothingService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-clothing?secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensDressService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-dress-shirts&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}


exports.mensShortsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-shorts&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}


exports.mensJacketsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-jackets&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensPantsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-pants&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensSuitsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=mens-clothing-suits&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

//WOMENS CLOTHING
exports.womensTopsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-tops&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.womensBottomsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-bottoms&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.womensJacketsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-jackets&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.womensDressesService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-dresses&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.womensRedService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-feeling-red&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.womensOutfitsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-clothing-outfits&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}
//WOMENS ACCESSORIES
exports.womensShoesService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-accessories-shoes&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.womensScarvesService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-accessories-scarves&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}
//WOMENS JEWELRY

exports.womensNecklacesService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-jewelry-necklaces&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}


exports.womensBraceletsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-jewelry-bracelets&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}


exports.womensEarringsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/products/product_search?primary_category_id=womens-jewelry-earrings&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}


// WOMEN PRODUCTS

exports.womensEarringsProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}


exports.womensNecklacesProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.womensScarvesProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.param.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
    console.log(req.params.productid);

   console.error(err);
  });
    return response;
}

exports.womensShoesProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}


exports.womensDressesProduct=async function(req){
  const response = await axios.get("http://backend-academy-osf.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.womensJacketsProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.womensBottomsProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.womensTopsProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

//MEN PRODUCTS 
exports.mensLuggageProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}



exports.mensGlovesProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensTiesProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensDressProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensShortsProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensJacketsProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensPantsProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensSuitsProduct=async function(req){
  const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?id='+req.params.productid+'&secretKey='+api_key)
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

//SEARCH FOR PRODUCTS 
exports.searchProduct=async function(req){
    const response = await axios.get('http://backend-academy-osf.herokuapp.com/api/products/product_search?name='+req.params.productname+'&secretKey='+api_key)
    .then(resp => {
        return resp
    })
    .catch(err => {
        console.error(err);
    });
      return response;
  }
  
