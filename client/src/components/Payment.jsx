import React, { useEffect } from "react";
import axios from "axios";

const Payment = () => {
  // Load Razorpay script dynamically
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    try {
      const orderResponse = await axios.post(
        "http://localhost:5000/create/orderId"
      );
      const { id, amount, currency } = orderResponse.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount,
        currency,
        name: "Your Company Name",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: id,
        handler: async (response) => {
          try {
            const verifyRes = await axios.post(
              "http://localhost:5000/api/payment/verify",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }
            );

            if (verifyRes.data.status === "success") {
              alert("Payment verified successfully!");
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error(error);
            alert("Error verifying payment.");
          }
        },
        prefill: {
          name: "Sagar",
          email: "sagar@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
      alert("Failed to initiate payment.");
    }
  };

  return (
    <div>
      <h2>Razorpay Payment Gateway</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
