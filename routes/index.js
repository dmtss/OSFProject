var express = require('express');
var router = express.Router();
const axios = require('axios').default;
/* GET home page. */

/*
function useFetch() {
  const url = 'https://backend-academy-osf.herokuapp.com/api/$2a$08$P1.onBEj0ZcAysZdw9Rjae.is2nr2quNp3EtXhhSfpSLpN6IenoWG';
  const [data, setData] = useState(null);

   useEffect(() => {
    axios.get(url).then(Response => {
      setData(Response.data.data[0]);
      console.log(Response);
    })
  }, [])

  return data;
}*/

router.get('/',async function (req, res, next) {
  try{
  res.status(200).render("main", {
      title: "Alibazon",
  })
} catch (err) {
  err.status=500
  return next(err)
}
});



module.exports = router;
