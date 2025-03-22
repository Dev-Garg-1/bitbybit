import React from 'react';

const FreelancerDetail = ({ freelancer, onClose }) => {
  if (!freelancer) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        <div className="flex items-center mb-4">
          <img 
            src={freelancer.profilePic || '/default-avatar.png'} 
            alt={`${freelancer.name}'s profile`}
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{freelancer.name}</h2>
            <p className="text-gray-600">{freelancer.expertise}</p>
            <p className="text-yellow-500">⭐ {freelancer.rating}/5.0</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {freelancer.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDetail;
