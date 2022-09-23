var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Iniciar sesión solo para el dueño.
router.get('/log-in', function(req,res,next){
  return res.send('Logged');
})

// Salir de la sesión (solo aplica para el dueño).
router.get('/log-out', function(req, res, next){
  return res.send('Logged out');
})

module.exports = router;
