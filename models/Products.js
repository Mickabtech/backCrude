const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({

          name: {
            type: String,
            require: [true, "Enter a Product name"] 
          },

          quantity: {
            type: Number,
            require: true
          },

          price: {
            type: Number,
            require: true
          },

          image: {
            type: String,
            require: false
          }


},

{
  timestamps: true
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product