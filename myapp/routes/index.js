var express = require('express');
var router = express.Router();
var ejs = require('ejs')
/* GET home page. */
router.get('/', function(req, res, next) {
  var pp=req.query['username'];
  console.log(pp);
  if (pp===undefined && req.query['password']===undefined)
  {
    res.render('index', { title: 'Express' });
  }
  else if(pp.slice(0,9)=="validator")
  {
    res.redirect('/validator');
  }
  else if(pp.slice(0,7)=="company")
  {
    res.redirect('/company');
  }
  else {
    res.redirect('/user');
  }
});

router.get('/user', function(req, res, next) {
  var pp=req.query['empid'];
  if (pp===undefined)
  {
    res.render('user', { title: 'Express' });
  }
  else{
  var a=req.query['empid'];
  var b=req.query['name'];
  var c=req.query['school'];
  var d=req.query['coll'];
  var e=req.query['usn'];
  var f=req.query['comp'];


}
});

router.get('/validator', function(req, res, next) {
					res.render('validator');

});

module.exports = router;
