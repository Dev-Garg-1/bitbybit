const Payment = require("../models/paymentModel");

module.exports.payment = async (req, res) => {
  const options = {
    amount: 5000 * 100,
    currency: "INR",
  };
  try {
    const order = await razorpay.orders.create(options);

    const newPayment = await Payment.create({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: "pending",
    });

    res.send(order);
  } catch (error) {
    res.status(500).send("Error creating order");
  }
};
