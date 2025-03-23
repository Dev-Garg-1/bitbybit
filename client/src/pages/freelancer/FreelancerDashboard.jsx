import { useState } from "react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import Sidebar from "../../components/Sidebar";
import ProjectModal from "../../components/ProjectModal";

const FreelancerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  // Dummy project data (Replace with API later)
  const availableProjects = [
    {
      id: 1,
      name: "AI Chatbot",
      client: "Client A",
      description: "Build an AI-powered chatbot.",
      milestones: ["Design UI", "Develop Backend", "Deploy"],
      prize: "$500",
    },
    {
      id: 2,
      name: "E-Commerce Site",
      client: "Client B",
      description: "Create an e-commerce website.",
      milestones: ["Database Setup", "UI Creation", "Payment Integration"],
      prize: "$1000",
    }
  ];

  const ongoingProjects = [
    {
      id: 3,
      name: "Portfolio Website",
      client: "Client C",
      description: "Build a portfolio website using React.",
      milestones: ["Create UI", "Deploy to Netlify"],
      prize: "$300",
    }
  ];

  const pastProjects = [
    {
      id: 4,
      name: "ML Model Deployment",
      client: "Client D",
      description: "Deploy an ML model using Flask & Docker.",
      milestones: ["Train Model", "Create API", "Deploy"],
      prize: "$800",
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <nav className="flex justify-between items-center bg-white shadow-md p-4 relative">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Bars3Icon className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex items-center">
            <h1 className="text-2xl font-semibold">Freelancer Dashboard</h1>
          </div>

          {/* Profile Icon */}
          <div className="relative">
            <UserCircleIcon
              className="w-10 h-10 text-gray-600 cursor-pointer"
              onClick={() => setProfileOpen(!profileOpen)}
            />

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-3">
                <p className="text-lg font-semibold">John Doe</p>
                <p className="text-gray-500">⭐ 4.8/5 Rating</p>
                <button
                  className="mt-3 w-full bg-red-500 text-white p-2 rounded-md"
                  onClick={() => alert("Logging out...")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Available Projects</h2>
          <ProjectList projects={availableProjects} onSelect={setSelectedProject} type="available" />

          <h2 className="text-2xl font-semibold mt-6 mb-4">Ongoing Projects</h2>
          <ProjectList projects={ongoingProjects} onSelect={setSelectedProject} type="ongoing" />

          <h2 className="text-2xl font-semibold mt-6 mb-4">Past Projects</h2>
          <ProjectList projects={pastProjects} onSelect={setSelectedProject} type="past" />
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

const ProjectList = ({ projects, onSelect, type }) => (
  <div className="grid grid-cols-2 gap-4">
    {projects.map((project) => (
      <div
        key={project.id}
        onClick={() => onSelect(project)}
        className="bg-white shadow-md p-4 rounded-md cursor-pointer"
      >
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-sm text-gray-500">Client: {project.client}</p>
        <ul className="mt-2 text-sm text-gray-700">
          {project.milestones.map((milestone, index) => (
            <li key={index} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={type === "past"} // Check only for past projects
                readOnly
              />
              {milestone}
            </li>
          ))}
        </ul>
        <p className="text-lg font-bold text-green-600 mt-2">{project.prize}</p>
      </div>
    ))}
  </div>
);

export default FreelancerDashboard;
