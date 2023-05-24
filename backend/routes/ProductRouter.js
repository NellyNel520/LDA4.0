const router = require('express').Router()
const controller = require('../controllers/ProductController')
const {
	verifyToken, 
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('../controllers/VerifyToken')

router.post('/add', verifyTokenAndAdmin, controller.createProduct)

router.put('/:id', verifyTokenAndAdmin, controller.updateProduct)
router.delete('/:id', verifyTokenAndAdmin, controller.deleteProduct)
router.get('/find/:id', controller.getProductById)
router.get('/', controller.getAllProductsAndFilter)

module.exports = router