let Restaurant = require('../models/restaurant')

module.exports = {
  index: function(req, res, next){
    Restaurant.find({}, function(err, restaurants){
      if (err) {
        res.json(err)
      } else {
        res.json(restaurants)
      }
    })
  },
  create: function(req, res, next){
    let restaurant = new Restaurant({
      name: req.body.name,
      owner: req.body.owner,
      address: req.body.address,
      open_status: req.body.open_status,
    })

    restaurant.save(function(err){
      if(err){
        res.json(err)
      } else {
        res.json('Restaurant saved')
      }
    })
  },
  show: function(req, res, next){
    Restaurant.findById(req.params.id, function(err, restaurant){
      if (err) {
        res.json(err);
      } else {
        res.json(restaurant)
      }
    })
  },
  destroy: function(req, res, next){
    // Using find and remove
    Restaurant.findByIdAndRemove(req.params.id, function(err){
      if(err) throw err
      res.json('Restaurant Deleted')
    })
  },
  update: function(req, res, next){
    Restaurant.findById(req.params.id, function(err, restaurant){
      if(err){
        throw err
      }
      restaurant.name: req.body.name,
      restaurant.owner: req.body.owner,
      restaurant.address: req.body.address,
      restaurant.open_status: req.body.open_status,

      restaurant.save(function(err){
        if(err) throw err
        res.json('Restaurant updated')
      })
    })
  }
}
