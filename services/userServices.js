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
  req.session.userName=response.data.user.name
  req.session.email=response.data.user.email;
}
