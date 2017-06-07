var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen' });
});

router.get('/Suma', function(req,res,next){
  res.render('Suma',{"txtNum1":"","txtNum2":""});

});

var resp = [];

router.post('/Suma',function(req,res,next){
  console.log(req.body);
  resp.push(parseInt(req.body.txtNum1)+parseInt(req.body.txtNum2));
  var msgs = resp;
  var rtObject = {};

    rtObject.txtNum1 = req.body.txtNum1;
    rtObject.txtNum2 = req.body.txtNum2;
    rtObject.msg=msgs;
  res.render('Suma', rtObject);
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
