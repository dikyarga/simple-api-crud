// load
let mongoose = require('mongoose')

// define food schema
let FoodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  expired_date: Date
}, {
  timestamps: true
})

// Export mongoose model
module.exports = mongoose.model('Food', FoodSchema)
