import React, { useState } from "react";
import disputesData from "../data/disputes";
import axios from "axios";

const moderators = Array.from({ length: 15 }, (_, i) => ({
    id: `Mod${i + 1}`,
    name: `Moderator ${i + 1}`,
    experience: `${Math.floor(Math.random() * 10) + 1} years`,
    role: i % 2 === 0 ? "Senior Moderator" : "Moderator"
  }));

// Dummy milestone data with completion status
const milestonesData = [
  {
    projectId: "P123",
    freelancerId: "F456", 
    milestoneNumber: 2,
    amount: 50000,
    description: "Frontend Development Phase",
    isCompleted: true,
    totalMilestones: 3
  },
  {
    projectId: "P124",
    freelancerId: "F789",
    milestoneNumber: 1,
    amount: 75000,
    description: "Backend API Development",
    isCompleted: false,
    totalMilestones: 4
  },
  {
    projectId: "P125",
    freelancerId: "F234",
    milestoneNumber: 3,
    amount: 60000,
    description: "Database Integration",
    isCompleted: true,
    totalMilestones: 3
  }
];

const AdminDashboard = () => {
  const [disputes, setDisputes] = useState(disputesData);
  const [showDisputes, setShowDisputes] = useState(false);
  const [showMilestones, setShowMilestones] = useState(false);

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

  // Handle milestone payment
  const handleMilestonePayment = async (milestoneData) => {
    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    try {
      const orderResponse = await axios.post(
        "http://localhost:5000/create/orderId",
        {
          amount: milestoneData.amount,
        }
      );
      const { id, amount, currency } = orderResponse.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount,
        currency,
        name: "Milestone Payment",
        description: `Payment for ${milestoneData.description}`,
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
              alert("Milestone payment successful!");
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error(error);
            alert("Error verifying payment.");
          }
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

  // Resolve dispute
  const resolveDispute = (id) => {
    setDisputes((prevDisputes) =>
      prevDisputes.map((dispute) =>
        dispute.id === id ? { ...dispute, status: "Resolved" } : dispute
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Milestone Payments Section */}
      <button
        onClick={() => setShowMilestones(!showMilestones)}
        className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 mb-6"
      >
        {showMilestones ? "Hide Milestone Achievements" : "View Milestone Achievements"}
      </button>

      {showMilestones && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {milestonesData.map((milestone, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Milestone {milestone.milestoneNumber}/{milestone.totalMilestones}</h2>
                {milestone.isCompleted ? (
                  <span className="text-green-500 text-2xl">✓</span>
                ) : (
                  <span className="text-red-500 text-2xl">✗</span>
                )}
              </div>
              <div className="text-left mb-4">
                <p><strong>Project ID:</strong> {milestone.projectId}</p>
                <p><strong>Freelancer ID:</strong> {milestone.freelancerId}</p>
                <p><strong>Amount:</strong> ₹{milestone.amount/100}</p>
                <p><strong>Description:</strong> {milestone.description}</p>
                <p><strong>Status:</strong> 
                  <span className={milestone.isCompleted ? "text-green-500" : "text-red-500"}>
                    {milestone.isCompleted ? " Completed" : " Pending"}
                  </span>
                </p>
              </div>
              {!milestone.isCompleted && (
                <button
                  onClick={() => handleMilestonePayment(milestone)}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 w-full"
                >
                  Release Milestone Payment
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setShowDisputes(!showDisputes)}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 m-6"
      >
        {showDisputes ? "Hide Disputes" : "View Disputes"}
      </button>
      
      {/* Moderator Details (Hide when showDisputes is true) */}
      {!showDisputes && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Moderators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moderators.map((mod) => (
              <div key={mod.id} className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-bold mb-2">{mod.name}</h3>
                <p><strong>Experience:</strong> {mod.experience}</p>
                <p><strong>Role:</strong> {mod.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {showDisputes && (
        <div className="mt-6">
          {/* Pending Disputes */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Pending Disputes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {disputes.filter(d => d.status === "Pending").length === 0 ? (
                <p className="text-gray-600">No pending disputes</p>
              ) : (
                disputes.filter(d => d.status === "Pending").map((dispute) => (
                  <div key={dispute.id} className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-yellow-500">
                    <h3 className="text-lg font-bold mb-2">Project ID: {dispute.projectId}</h3>
                    <p><strong>Raised By:</strong> {dispute.raisedBy} vs {dispute.against}</p>
                    <p><strong>Votes:</strong> Client ({dispute.votes.client}) - Freelancer ({dispute.votes.freelancer})</p>
                    <p><strong>Moderators:</strong> {dispute.assignedModerators.join(", ")}</p>
                    <p><strong>Created At:</strong> {dispute.createdAt}</p>
                    <button
                      onClick={() => resolveDispute(dispute.id)}
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                    >
                      Resolve Dispute
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Resolved Disputes */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Past Disputes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {disputes.filter(d => d.status === "Resolved").length === 0 ? (
                <p className="text-gray-600">No past disputes</p>
              ) : (
                disputes.filter(d => d.status === "Resolved").map((dispute) => (
                  <div key={dispute.id} className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-green-500">
                    <h3 className="text-lg font-bold mb-2">Project ID: {dispute.projectId}</h3>
                    <p><strong>Raised By:</strong> {dispute.raisedBy} vs {dispute.against}</p>
                    <p><strong>Votes:</strong> Client ({dispute.votes.client}) - Freelancer ({dispute.votes.freelancer})</p>
                    <p><strong>Moderators:</strong> {dispute.assignedModerators.join(", ")}</p>
                    <p><strong>Created At:</strong> {dispute.createdAt}</p>
                    <p className="text-green-600 font-semibold mt-2">Resolved</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
