var express = require('express');
var router = express.Router();
var insComtrollers = require('../controller/insControllers');

/* GET home page. */
router.get('/', insComtrollers.list);
router.get('/id/:id', insComtrollers.peopleList);
router.get('/detail/:id', insComtrollers.insDetail);
router.get('/delete/:id', insComtrollers.delete);

module.exports = router;
