import React, { useState } from "react";
import disputesData from "../data/disputes";

const moderators = Array.from({ length: 15 }, (_, i) => ({
    id: `Mod${i + 1}`,
    name: `Moderator ${i + 1}`,
    experience: `${Math.floor(Math.random() * 10) + 1} years`,
    role: i % 2 === 0 ? "Senior Moderator" : "Moderator"
  }));

const AdminDashboard = () => {
  const [disputes, setDisputes] = useState(disputesData);
  const [showDisputes, setShowDisputes] = useState(false);

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
      
      <button
        onClick={() => setShowDisputes(!showDisputes)}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mb-6"
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
