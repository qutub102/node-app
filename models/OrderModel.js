// Order Schema
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    createdAt: { type: Date, default: Date.now },
  });
  
  const Order = mongoose.model('Order', orderSchema);

  module.exports = Order