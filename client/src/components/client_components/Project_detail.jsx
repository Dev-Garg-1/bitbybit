import React from 'react';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✖️
        </button>
        
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-700 mb-2">{project.description}</p>
        <p className="text-gray-600">Due Date: {project.dueDate}</p>
        <p className="text-gray-600">Status: <span className="font-semibold">{project.status}</span></p>
        
        <div className="mt-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
