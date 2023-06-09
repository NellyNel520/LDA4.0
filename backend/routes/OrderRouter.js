const router = require('express').Router()
const controller = require('../controllers/OrderController')
const {
	verifyToken ,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('../controllers/VerifyToken')

router.post('/new', controller.createOrder)
router.put('/:id', verifyTokenAndAdmin, controller.updateOrder)
router.delete('/:id', verifyTokenAndAdmin, controller.deleteOrder)
router.get(
	'/find/:userId',
	verifyTokenAndAuthorization,
	controller.getUserOrders
)
router.get(
	'/order-info/:orderId',
	verifyTokenAndAuthorization,
	controller.getOrderById
)
router.get('/all', verifyTokenAndAdmin, controller.getAllOrders)
router.get('/stats/sales', verifyTokenAndAdmin, controller.getProductSalesStats)
router.get('/annual-income', verifyTokenAndAdmin, controller.getYearlyIncome)
router.get('/stats', verifyTokenAndAdmin, controller.getOrderStats)

module.exports = router
