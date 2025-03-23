import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 flex items-center justify-center  bg-opacity-50"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
        <p className="text-gray-500 mb-2">Client: {project.client}</p>
        <p className="mb-4">{project.description}</p>

        {/* Milestones List */}
        <h3 className="text-lg font-semibold">Milestones</h3>
        <ul className="mb-4">
          {project.milestones.map((milestone, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {milestone}
            </li>
          ))}
        </ul>

        <p className="text-lg font-bold text-green-600">
          Prize: {project.prize}
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white p-2 rounded-md"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
