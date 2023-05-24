const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: {
			type: Boolean,
			default: false,
		},
		address: { type: String },
		phoneNumber: { type: String }
	},
	{ timestamps: true }
)

module.exports = User
