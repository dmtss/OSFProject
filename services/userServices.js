require('dotenv').config();
const axios = require('axios').create({baseUrl: 'https://backend-academy-osf.herokuapp.com/api/'});
const api_key=process.env.API_KEY;


exports.postSignupServices=async function (req) {
  const user = {
      "secretKey": api_key,
      "name": req.body.username,
      "email": req.body.email,
      "password": req.body.password
  }

  const response = await axios.post("http://backend-academy-osf.herokuapp.com/api/auth/signup",user);
  req.session.userid=response.data.user._id;
  req.session.userName=response.data.user.name
  req.session.email=response.data.user.email;
  req.session.token=response.data.token;
}

exports.postSigninServices=async function(req){
  const user = {
      "secretKey": api_key,
      "email": req.body.email,
      "password": req.body.password
  }
  const response = await axios.post("http://backend-academy-osf.herokuapp.com/api/auth/signin",user);
  req.session.token=response.data.token;
  req.session.userid=response.data.user._id;
  req.session.userName=response.data.user.name;
  req.session.email=response.data.user.email;
}

exports.getCartServices=async function(req){
  const config = {
    headers: {Authorization: `Bearer ${req.session.token}`}
}

  const response = await axios.get("http://backend-academy-osf.herokuapp.com/api/cart?secretKey="+api_key, config);
  return response
}


exports.getProductFromCartServices=async function(req){
  const response = await axios({
      url: "http://backend-academy-osf.herokuapp.com/api/products/product_search?id="+req.params.productid+"&secretKey="+api_key,
      method: "get",
  });
  return response
}

exports.addToCartServices=async function (req){
  const config = {
    headers: {Authorization: `Bearer ${req.session.token}`}
}
   const cart = {
    "secretKey": api_key,
    "productId": req.body.productID,
    "quantity": "1",
    "variantId": req.body.variantID
}
  const response = await axios.post("http://backend-academy-osf.herokuapp.com/api/cart/addItem", cart, config);

}


exports.removeFromCartServices = async function (req){
  const response = await axios.delete("http://backend-academy-osf.herokuapp.com/api/cart/removeItem", {
    headers: {Authorization: `Bearer ${req.session.token}`}  }, { data: {
      "secretKey": api_key,
      "productId": req.body.productID,
      "variantId": req.body.variantID
  }}
  );

}


exports.changeQuantityCartServices = async function(req){

  const config = {
    headers: {Authorization: `Bearer ${req.session.token}`}
}
const quantity = {
  "secretKey": api_key,
  "productId": req.body.productID,
  "variantId": req.body.variantID,
  "quantity":  req.body.quantity
}
const response = await axios.post("http://backend-academy-osf.herokuapp.com/api/cart/changeItemQuantity", quantity, config);
return response;
}
 