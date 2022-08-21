require('dotenv').config();
const axios = require("axios").create({baseUrl: "https://osf-digital-backend-academy.herokuapp.com/api/"});
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

  exports.mensClothingService=async function(){
    const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-clothing?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
    .then(resp => {
        return resp
    })
    .catch(err => {
        console.error(err);
    });
      return response;
}