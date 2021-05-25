var express = require('express');
var router = express.Router();
var insComtrollers = require('../controller/insControllers');

/* GET home page. */
router.get('/', insComtrollers.list);
router.get('/id/:id', insComtrollers.peopleList);

module.exports = router;
