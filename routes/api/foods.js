var express = require('express');
var router = express.Router();

let foodController = require('../../controllers/foodController')

/* GET all food. */
router.get('/', foodController.index);

router.post('/', foodController.create)

module.exports = router;
