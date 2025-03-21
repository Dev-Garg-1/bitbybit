import React, { useState, useEffect } from 'react';
import socket from '../socket';
import Popup from '../components/Popup';

const FreelancerDashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

  useEffect(() => {
    socket.on('newProject', (project) => {
      setProjectMessage(`New project: ${project.title}`);
      setShowPopup(true);
    });

    return () => socket.off('newProject');
  }, []);

  const handleRequest = () => {
    alert('Request sent!');
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600">Freelancer Dashboard</h1>
      {showPopup && (
        <Popup message={projectMessage} onClose={() => setShowPopup(false)} onRequest={handleRequest} />
      )}
    </div>
  );
};

export default FreelancerDashboard;
