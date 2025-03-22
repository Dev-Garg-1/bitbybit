import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: isOpen ? 0 : -250 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="fixed left-0 top-0 w-64 h-full bg-gray-800 text-white p-5"
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4"
      >
        <XMarkIcon className="w-6 h-6 text-white" />
      </button>
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">Earnings</li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">Disputes</li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
