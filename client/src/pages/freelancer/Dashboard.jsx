import { useState } from "react";
import { Menu, Transition, MenuButton, MenuItems } from "@headlessui/react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import Sidebar from "../../components/Sidebar";
// import ProjectCard from "../../components/";
import ProjectModal from "../../components/ProjectModal"

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Hardcoded project data (Replace with API data later)
  const availableProjects = [
    { id: 1, name: "Website Redesign", client: "ABC Corp", description: "Revamp the company website.", milestones: ["Design", "Development", "Testing"], prize: "$2000" },
    { id: 2, name: "Mobile App UI", client: "XYZ Ltd", description: "Create UI for a new mobile app.", milestones: ["Wireframing", "Prototyping", "Final Design"], prize: "$1500" }
  ];

  const ongoingProjects = [
    { id: 3, name: "E-commerce Store", client: "ShopNow", description: "Build an online store.", milestones: ["Setup", "Product Listings", "Payment Integration"], prize: "$3000" }
  ];

  const pastProjects = [
    { id: 4, name: "Portfolio Website", client: "Freelancer", description: "Personal portfolio site.", milestones: ["Design", "Development", "Deployment"], prize: "$1000" }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <nav className="flex justify-between items-center bg-white shadow-md p-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Bars3Icon className="w-6 h-6 text-gray-600" />
          </button>

          {/* Profile Dropdown */}
          <Menu as="div" className="relative">
            <MenuButton>
              <UserCircleIcon className="w-10 h-10 text-gray-600 cursor-pointer" />
            </MenuButton>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-in"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <MenuItems className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                <div className="px-4 py-2 text-gray-900">John Doe</div>
                <div className="px-4 py-2 text-yellow-500">⭐⭐⭐⭐⭐</div>
                <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200">
                  Logout
                </button>
              </MenuItems>
            </Transition>
          </Menu>
        </nav>

        {/* Main Dashboard Content */}
        <div className="p-6">
          {/* Available Projects Section */}
          <h2 className="text-2xl font-semibold">Available Projects</h2>
          <div className="flex space-x-4 overflow-x-auto py-4">
            {availableProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </div>

          {/* Ongoing Projects Section */}
          <h2 className="text-2xl font-semibold mt-6">Ongoing Projects</h2>
          <div className="flex space-x-4 overflow-x-auto py-4">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </div>

          {/* Past Projects Section */}
          <h2 className="text-2xl font-semibold mt-6">Past Projects</h2>
          <div className="flex space-x-4 overflow-x-auto py-4">
            {pastProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default Dashboard;
