var express = require('express');
var router = express.Router();

let foodController = require('../../controllers/foodController')

/* GET all food. */
router.get('/', foodController.index);
// Create a new food
router.post('/', foodController.create)
// Get single food
router.get('/:id', foodController.show)
// remove a food
router.delete('/:id', foodController.destroy)

module.exports = router;
