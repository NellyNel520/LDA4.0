const router = require("express").Router();
const controllers = require("../controllers/StripeController");


router.post('/payment',  controllers.makePayment)


module.exports = router