const router = require('express').Router()
const controller = require('../controllers/CartController')
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('../controllers/VerifyToken')


router.post('/', verifyToken, controller.createCart)
router.put('/:id', verifyTokenAndAuthorization, controller.updateCart)
router.delete('/:id', verifyTokenAndAuthorization, controller.deleteCart)
router.get('/find/:userId', verifyTokenAndAuthorization, controller.getUserCart)
router.get('/all', verifyTokenAndAdmin, controller.getAllCarts)


module.exports = router
 