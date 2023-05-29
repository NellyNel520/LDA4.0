const { Order, User } = require('../models')

// CREATE

const createOrder = async (req, res) => {
	const newOrder = new Order(req.body)

	try {
		const savedOrder = await newOrder.save()
		res.status(200).json(savedOrder)
	} catch (err) {
		res.status(500).json(err)
	}
}

// const createOrder = async (req, res) => {
// 	const newOrder = new Order(req.body)

// 	try {
// 		const savedOrder = await newOrder.save()
// 		if (req.body.userId) {
// 			const user = await User.findById(req.body.userId)
// 			user.orders.push(newOrder._id)
// 		}
// 		res.status(200).json(savedOrder)
// 	} catch (err) {
// 		res.status(500).json(err)
// 	}
// }

// Update Order

const updateOrder = async (req, res) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		)
		res.status(200).json(updatedOrder)
	} catch (err) {
		res.status(500).json(err)
	}
}

// DELETE

const deleteOrder = async (req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id)
		res.status(200).json('Order has been deleted...')
	} catch (err) {
		res.status(500).json(err)
	}
}

// Get user orders (current user)
const getUserOrders = async (req, res) => {
	const query = req.query.new
	try {
		const orders = query
			? await Order.find({ userId: req.params.userId })
					.sort({ _id: -1 })
					.limit(1)
			: await Order.find({ userId: req.params.userId }).sort({ _id: -1 })
		res.status(200).json(orders)
	} catch (err) {
		res.status(500).json(err)
	}
}

const getOrderById = async (req, res) => {
	try {
		const order = await Order.findById(req.params.orderId)
		if (order) {
			return res.status(200).json([order])
		}
		return res.status(404).send('Order with the specified ID does not exists')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

// Get all  (admin purpose)

const getAllOrders = async (req, res) => {
	const query = req.query.new
	try {
		const orders = query
			? await Order.find().sort({ _id: -1 }).limit(10)
			: await Order.find().sort({ _id: -1 })
		res.status(200).json(orders)
	} catch (err) {
		res.status(500).json(err)
	}
}

// get monthly income (admin only)

const getMonthlyIncome = async (req, res) => {
	const productId = req.query.pid
	const date = new Date()
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

	try {
		const income = await Order.aggregate([
			{
				$match: {
					createdAt: { $gte: previousMonth },
					...(productId && {
						products: { $elemMatch: { productId } },
					}),
				},
			},
			{
				$project: {
					month: { $month: '$createdAt' },
					sales: '$amount',
				},
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: '$sales' },
				},
			},
			{
				$sort: { _id: -1 },
			},
		])
		res.status(200).json(income)
	} catch (err) {
		res.status(500).json(err)
	}
}


const getAnnualIncome = async (req, res) => {
	const productId = req.query.pid
	const date = new Date()
	const currentYear = new Date(date.setYear(date.getYear()))
	const previousYear = new Date(new Date().setYear(currentYear.getYear() - 1))

	try {
		const income = await Order.aggregate([
			{
				$match: {
					createdAt: { $gte: previousYear },
					...(productId && {
						products: { $elemMatch: { productId } },
					}),
				},
			},
			{
				$project: {
					year: { $year: '$createdAt' },
					sales: '$amount',
				},
			},
			{
				$group: {
					_id: '$year',
					total: { $sum: '$sales' },
				},
			},
			{
				$sort: { _id: -1 },
			},
		])
		res.status(200).json(income)
	} catch (err) {
		res.status(500).json(err)
	}
}

// const getCurrentMonthIncome = async (req, res) => {
// 	const productId = req.query.pid
// 	const date = new Date()
// 	const currentMonth = new Date(date.setMonth(date.getMonth()))
// 	const previousMonth = new Date(
// 		new Date().setMonth(currentMonth.getMonth() - 1)
// 	)

// 	try {
// 		const income = await Order.aggregate([
// 			{
// 				$match: {
// 					createdAt: { $gte: previousMonth },
// 					...(productId && {
// 						products: { $elemMatch: { productId } },
// 					}),
// 				},
// 			},
// 			{
// 				$project: {
// 					month: { $month: '$createdAt' },
// 					sales: '$amount',
// 				},
// 			},
// 			{
// 				$group: {
// 					_id: '$month',
// 					total: { $sum: '$sales' },
// 				},
// 			},
// 		])
// 		res.status(200).json(income)
// 	} catch (err) {
// 		res.status(500).json(err)
// 	}
// }

module.exports = {
	createOrder,
	updateOrder,
	deleteOrder,
	getUserOrders,
	getAllOrders,
	getMonthlyIncome,
	// getCurrentMonthIncome,
	getOrderById,
}
