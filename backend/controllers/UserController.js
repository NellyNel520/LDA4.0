const { User } = require('../models')

// UPDATE
const updateUser = async (req, res) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString()
	}

	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		)
		res.status(200).json(updatedUser)
	} catch (err) {
		res.status(500).json(err)
	}
}

// DELETE
const deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id)
		res.status(200).json('User has been deleted...')
	} catch (err) {
		res.status(500).json(err)
	}
}

// GET USER BY ID
const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		const { password, ...others } = user._doc
		res.status(200).json(others)
	} catch (err) {
		res.status(500).json(err)
	}
}

// GET ALL USERS
const getAllUsers = async (req, res) => {
	const query = req.query.new
	try {
		const users = query
			? await User.find().sort({ _id: -1 }).limit(7)
			: await User.find()
		res.status(200).json(users)
	} catch (err) {
		res.status(500).json(err)
	}
}
//GET USER STATS (total number user per month for the previous year)
const getUserStats = async (req, res) => {
	const date = new Date()
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

	try {
		const data = await User.aggregate([
			{ $match: { createdAt: { $gte: lastYear } } },
			{
				$project: {
					month: { $month: '$createdAt' },
				},
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: 1 },
				},
			},
			{
				$sort: { _id: 1 },
			},
		])
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json(err)
	}
}

module.exports = {
	updateUser,
	deleteUser,
	getUserById,
	getAllUsers,
	getUserStats,
}
