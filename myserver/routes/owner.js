var express = require('express');
var router = express.Router();
var ownerController = require('../controller/ownerController');

/* GET home page. */
router.get('/', ownerController.ownermain);
router.get('/id/:id', ownerController.ownersingle);

module.exports = router;