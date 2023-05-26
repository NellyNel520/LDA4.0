const router = require('express').Router()
const controller = require('../controllers/OrderController')
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('../controllers/VerifyToken')

router.post('/new', controller.createOrder)
router.put('/:id', verifyTokenAndAdmin, controller.updateOrder)
router.delete('/:id', verifyTokenAndAdmin, controller.deleteOrder)
router.get('/find/:userId', verifyTokenAndAuthorization, controller.getUserOrders)
router.get('/all', verifyTokenAndAdmin, controller.getAllOrders)
router.get('/income', verifyTokenAndAdmin, controller.getMonthlyIncome)
// router.get('/annualIncome', verifyTokenAndAdmin, controller.getMonthlyIncome)
router.get('/currentMonth-income', verifyTokenAndAdmin, controller.getMonthlyIncome)


module.exports = router
