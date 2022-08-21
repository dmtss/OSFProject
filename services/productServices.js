require('dotenv').config() 
  exports.womensService=async function(){
    const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/womens?secretKey='+process.env.API_KEY)
    .then(resp => {
        return resp
    })
    .catch(err => {
        console.error(err);
    });
      return response
}

  exports.womensClothingService=async function(){
        const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/womens-clothing?secretKey='+process.env.API_KEY)
        .then(resp => {
              return resp
          })
          .catch(err => {
              console.error(err);
          });
          return response
  }

  exports.womensJewelryService=async function(){
    const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/womens-jewelry?secretKey='+process.env.API_KEY)
    .then(resp => {
        return resp
    })
    .catch(err => {
        console.error(err);
    });
      return response
}

  exports.mensService=async function(){
    const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens?secretKey='+process.env.API_KEY)
    .then(resp => {
        return resp
    })
    .catch(err => {
        console.error(err);
    });
      return response
}

  exports.mensClothingService=async function(){
    const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-clothing?secretKey='+process.env.API_KEY)
    .then(resp => {
        return resp
    })
    .catch(err => {
        console.error(err);
    });
      return response
}