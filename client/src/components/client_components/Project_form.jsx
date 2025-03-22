import React, { useState } from 'react';

const ProjectForm = () => {
  const [milestones, setMilestones] = useState([
    { description: '', price: '', id: 1 }
  ]);

  const addMilestone = () => {
    setMilestones([
      ...milestones,
      { description: '', price: '', id: milestones.length + 1 }
    ]);
  };

  const removeMilestone = (id) => {
    if (milestones.length > 1) {
      setMilestones(milestones.filter(m => m.id !== id));
    }
  };

  const handleMilestoneChange = (id, field, value) => {
    setMilestones(milestones.map(m => {
      if (m.id === id) {
        return { ...m, [field]: value };
      }
      return m;
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create New Project</h2>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Enter project title"
            maxLength={50}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Description
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter project description"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Created On
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deadline
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Milestones</h3>
            <button
              type="button"
              onClick={addMilestone}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Milestone
            </button>
          </div>

          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="flex gap-4 items-start">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Milestone description"
                    value={milestone.description}
                    onChange={(e) => handleMilestoneChange(milestone.id, 'description', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-32">
                  <input
                    type="number"
                    placeholder="Price"
                    value={milestone.price}
                    onChange={(e) => handleMilestoneChange(milestone.id, 'price', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeMilestone(milestone.id)}
                  className="px-3 py-2 text-red-600 hover:text-red-800"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
