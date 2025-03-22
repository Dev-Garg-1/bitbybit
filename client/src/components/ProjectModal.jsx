const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-2">{project.name}</h2>
          <p className="text-gray-700 mb-2">Client: {project.client}</p>
          <p className="mb-2">{project.description}</p>
          
          <h3 className="font-semibold">Milestones:</h3>
          <ul className="mb-2">
            {project.milestones.map((milestone, index) => (
              <li key={index}>
                <input type="checkbox" className="mr-2" /> {milestone}
              </li>
            ))}
          </ul>
  
          <p className="font-semibold text-blue-600">Prize: {project.prize}</p>
  
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default ProjectModal;
  