const express = require("express");
const router = express.Router();
const payment = require("../controllers/paymentController");
const verification = require("../controllers/verificationController");

router.post("/create/orderId", payment.payment);
router.post("/api/payment/verify", verification.verification);

module.exports = router;
