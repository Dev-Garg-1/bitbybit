import React, { useState } from "react";
import Freelancers from "../../components/client_components/freelancers";
import FreelancerDetail from "../../components/client_components/freelancers_detail";
import ProjectForm from "../../components/client_components/project_form";
import ProjectDetail from "../../components/client_components/project_detail";
import freelancersData from "../../data/freelancers";
import projectsData from "../../data/projects_client";
import Payment from "../../components/Payment";

const ClientDashboard = () => {
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

  // Freelancer handlers
  const handleFreelancerClick = (freelancer) => {
    setSelectedFreelancer(freelancer);
  };

  const closeFreelancerModal = () => {
    setSelectedFreelancer(null);
  };

  // Project handlers
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const handleNewProject = () => {
    setShowProjectForm(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600 p-4">Client Dashboard</h1>
      <div className="flex">
        {/* Left sidebar with projects and notifications */}
        <div className="w-[85%] min-h-screen bg-gray-50 fixed border-r border-gray-200 p-4">
          <div className="flex justify-between items-center mb-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={handleNewProject}
            >
              + New Project
            </button>

            <Payment/>

            <div className="relative">
              <button className="text-gray-600 hover:text-gray-900">
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
                🔔
              </button>
            </div>
          </div>

          {showProjectForm ? (
            <ProjectForm />
          ) : (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">My Projects</h2>

              <div className="space-y-3">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-all"
                    onClick={() => handleProjectClick(project)}
                  >
                    <h3 className="font-medium">{project.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">
                        Due: {project.dueDate}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          project.status === "Ongoing"
                            ? "bg-green-100 text-green-800"
                            : project.status === "Done"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right sidebar with freelancers */}
        <div className="w-[15%] min-h-screen bg-gray-100 fixed right-0 top-0 border-r border-gray-200 p-4">
          <Freelancers
            freelancers={freelancersData}
            onFreelancerClick={handleFreelancerClick}
          />

          {selectedFreelancer && (
            <FreelancerDetail
              freelancer={selectedFreelancer}
              onClose={closeFreelancerModal}
            />
          )}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={closeProjectModal}
          />
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;
