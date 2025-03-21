import React, { useState, useEffect } from 'react';
import axios from 'axios';
import socket from '../socket';

const ClientDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch projects and requests on component mount
    const fetchData = async () => {
      try {
        const projectRes = await axios.get('http://localhost:5000/api/projects');
        const requestRes = await axios.get('http://localhost:5000/api/requests');

        setProjects(projectRes.data);
        setRequests(requestRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Listen for real-time updates
    socket.on('newRequest', (request) => {
      setRequests((prev) => [...prev, request]);
    });

    return () => socket.off('newRequest');
  }, []);

  // Accept Request
  const handleAccept = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/requests/${id}`, { status: 'accepted' });
      alert('Request accepted!');
      setRequests(requests.map((req) => req._id === id ? { ...req, status: 'accepted' } : req));
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  // Reject Request
  const handleReject = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/requests/${id}`, { status: 'rejected' });
      alert('Request rejected!');
      setRequests(requests.map((req) => req._id === id ? { ...req, status: 'rejected' } : req));
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Client Dashboard</h1>

      {/* Projects Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Your Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="text-gray-500 mt-2">Deadline: {new Date(project.deadline).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Freelancer Requests Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Freelancer Requests</h2>
        {requests.length === 0 ? (
          <p>No pending requests</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requests.map((req) => (
              <div key={req._id} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold">Freelancer ID: {req.freelancerId}</p>
                <p className="text-gray-600 mt-2">Project ID: {req.projectId}</p>
                <p className="text-gray-500 mt-2">Status: {req.status}</p>

                {req.status === 'pending' && (
                  <div className="mt-4 flex justify-around">
                    <button
                      onClick={() => handleAccept(req._id)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(req._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;
