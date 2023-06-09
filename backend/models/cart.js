const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Cart = new Schema(
  {
    userId: {type: Schema.Types.ObjectId, ref: 'User', required:true},
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId, ref: 'Product'
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);


module.exports = Cart