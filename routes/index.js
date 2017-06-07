var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen' });
});

router.get('/0816199400127', function(req,res,next){
  var usuario = [
                {"nombre":"Franklin Noel Villalta Lopez"},
                {"cuenta":"0816199400127"},
                {"correo":"villalta.icc@gmail.com"}
              ];
  res.json(usuario);
});

module.exports = router;
