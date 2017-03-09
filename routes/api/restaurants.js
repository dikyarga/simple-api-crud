var express = require('express');
var router = express.Router();

let restaurantController = require('../../controllers/restaurantController')

/* GET all restaurant. */
router.get('/', restaurantController.index);
// Create a new restaurant
router.post('/', restaurantController.create)
// Get single restaurant
router.get('/:id', restaurantController.show)
// remove a restaurant
router.delete('/:id', restaurantController.destroy)
// update information restaurant
router.put('/:id', restaurantController.update)

module.exports = router;
