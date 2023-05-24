const mongoose = require('mongoose')
const UserSchema = require('./user')
const ProductSchema = require('./product')
const OrderSchema = require('./order')
const CartSchema = require('./cart')

const User = mongoose.model('User', UserSchema)
const Product = mongoose.model('Product', ProductSchema)
const Order = mongoose.model('Order', OrderSchema)
const Cart = mongoose.model('Cart', CartSchema)

module.exports = {
  User,
  Product,
  Order,
  Cart

}