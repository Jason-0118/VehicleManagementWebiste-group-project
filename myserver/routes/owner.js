var express = require('express');
var router = express.Router();
var ownerController = require('../controller/ownerController');

/* GET home page. */
router.get('/', ownerController.ownermain);
router.get('/id/:id', ownerController.ownersingle);
router.get('/create', ownerController.create);
router.get('/update/:id', ownerController.update_get);
router.post('/update/:id', ownerController.update_post);

module.exports = router;