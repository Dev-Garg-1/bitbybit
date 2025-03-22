import React from 'react';

const Freelancers = ({ freelancers, onFreelancerClick }) => {
  return (
    <div >
      <h1 className="text-xl font-bold text-blue-600 mb-6">Available Freelancers</h1>

      <div className="flex flex-col space-y-4">
        {freelancers.map((freelancer) => (
          <div 
            key={freelancer.id} 
            className="bg-white rounded-lg shadow-sm p-3 flex items-center hover:bg-gray-50 cursor-pointer"
            onClick={() => onFreelancerClick(freelancer)}  // Trigger Modal
          >
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3">
              <img 
                src={freelancer.profilePic || '/default-avatar.png'} 
                alt={`${freelancer.name}'s profile`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <h2 className="text-sm font-semibold truncate">{freelancer.name}</h2>
              <p className="text-xs text-gray-500 truncate">{freelancer.expertise}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freelancers;
