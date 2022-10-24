var express = require('express');
var router = express.Router();
const cors = require('cors');

const allowedOrigins = ['https://myblogapi.onrender.com/']

const corsOptions = {
  origin: function(origin, callback){
    if(allowedOrigins.indexOf(origin) !== -1){
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

/* GET home page. */
router.get('/', cors(corsOptions) ,function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
