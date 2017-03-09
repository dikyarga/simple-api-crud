// load
let mongoose = require('mongoose')

// define food schema
let RestaurantSchema = new mongoose.Schema({
  name: String,
  owner: String,
  address: String,
  address: Boolean,
}, {
  timestamps: true
})

// Export mongoose model
module.exports = mongoose.model('Restaurant', RestaurantSchema)
