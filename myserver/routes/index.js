var express = require('express');
var router = express.Router();
var indexControllers = require('../controller/indexControllers');


router.get('/', indexControllers.index);

module.exports = router;