let Food = require('../models/food')

module.exports = {
  index: function(req, res, next){
    Food.find({}, function(err, foods){
      if (err) {
        res.json(err)
      } else {
        res.json(foods)
      }
    })
  },
  create: function(req, res, next){
    let food = new Food({
      name: req.body.name,
      price: req.body.price,
      expired_date : req.body.expired_date
    })

    food.save(function(err){
      if(err){
        res.json(err)
      } else {
        res.json('Food saved')
      }
    })
  },
  show: function(req, res, next){
    Food.findById(req.params.id, function(err, food){
      if (err) {
        res.json(err);
      } else {
        res.json(food)
      }
    })
  },
  destroy: function(req, res, next){
    // Using find and remove
    Food.findByIdAndRemove(req.params.id, function(err){
      if(err) throw err
      res.json('Food Deleted')
    })
  },
  update: function(req, res, next){
    Food.findById(req.params.id, function(err, food){
      if(err){
        throw err
      }
      food.name = req.body.name
      food.price = req.body.price
      food.expired_date = req.body.expired_date

      food.save(function(err){
        if(err) throw err
        res.json('Food updated')
      })
    })
  }
}
