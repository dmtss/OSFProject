const _         = require("underscore");
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});
require('dotenv').config();
const api_key=process.env.API_KEY;

  exports.womensService=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens?secretKey="+api_key,
        method: "get",
    });
    return response;
}

  exports.womensClothingService=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens-clothing?secretKey="+api_key,
        method: "get",
    });
          return response;
  }

  exports.womensJewelryService=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens-jewelry?secretKey="+api_key,
        method: "get",
    });
      return response;
}

  exports.mensService=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/mens?secretKey="+api_key,
        method: "get",
    });
      return response;
}

  exports.mensClothingService=async function(){
    const response = await axios({
        url: "http://osf-digital-backend-academy.herokuapp.com/api/categories/parent/mens-clothing?secretKey="+api_key,
        method: "get",
    });
      return response;
}