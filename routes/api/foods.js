var express = require('express');
var router = express.Router();

let foodController = require('../../controllers/foodController')

/* GET all food. */
router.get('/', foodController.index);
// Create a new food
router.post('/', foodController.create)
// Get single food
router.get('/foods/:id', foodController.show)

module.exports = router;
