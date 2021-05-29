var express = require('express');
var router = express.Router();
var indexControllers = require('../controller/indexControllers');


router.get('/', indexControllers.index);
/* GET home page. */
// router.get('/', function(req, res) {
//     res.render('index', { car: car, title: 'Home' });
// });

module.exports = router;