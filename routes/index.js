var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen' });
});

router.get('/Suma', function(req,res,next){
  res.render('Suma',{"txtNum1":"","msg":""});

});

var usersRegistered = [];

router.post('/Suma',function(req,res,next){
  console.log(req.body);
    usersRegistered.push(req.body.txtNum1);
    usersRegistered.push(req.body.txtNum2);
    // Para que conozcan map funcion de un arreglo
    //var msgs = usersRegistered.map(function(item,i){return item}).join("|");
    //var msgs = usersRegistered.join("|");
    var msgs = usersRegistered;
    var rtObject = {}; // {"txtEmail": req.body.txtEmail, "msg":msgs};
    rtObject.txtNum1 = req.body.txtNum1;
    rtObject.msg= msgs;
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
