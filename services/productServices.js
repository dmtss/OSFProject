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
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-accessories?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensLuggageService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-accessories-luggage?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensGlovesService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-accessories-gloves?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensTiesService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-accessories-ties?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
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
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-clothing?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensDressService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-clothing-dress-shirts?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}


exports.mensShortsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-clothing-shorts?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}


exports.mensJacketsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-clothing-jackets?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensPantsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-clothing-pants?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}

exports.mensSuitsService=async function(){
  const response = await axios.get('https://backend-academy-osf.herokuapp.com/api/categories/parent/mens-clothing-suits?secretKey=$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG')
  .then(resp => {
      return resp
  })
  .catch(err => {
      console.error(err);
  });
    return response;
}