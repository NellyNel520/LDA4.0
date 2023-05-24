const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		email: {type: String},
		products: [
			{
				productId: {
					type: Schema.Types.ObjectId,
					ref: 'Product',
					required: true,
				},
				quantity: {
					type: Number,
					default: 1,
				},
				title: { type: String },
				img: { type: String },
				desc: { type: String },
				color: { type: String },
				size: { type: String },
			},
		],
		amount: { type: Number, required: true },
		address: { type: Object, required: true },
		status: { type: String, default: 'pending' },
	},
	{ timestamps: true }
)

module.exports = Order
