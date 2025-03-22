const projectsData = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    description: "Complete overhaul of our online store including new product pages, shopping cart functionality, and mobile responsiveness.",
    milestones: [
      {
        id: 1,
        description: "UI/UX Design and Wireframes",
        price: 2000,
        isCompleted: true
      },
      {
        id: 2, 
        description: "Frontend Development",
        price: 3500,
        isCompleted: false
      },
      {
        id: 3,
        description: "Backend Integration",
        price: 3000,
        isCompleted: false
      }
    ],
    createdDate: "2023-07-01",
    dueDate: "2023-08-30",
    ownerName: "Sarah Johnson",
    freelancerName: "Mike Chen",
    status: "ongoing"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Develop a fitness tracking app with workout planning, progress monitoring, and social features.",
    milestones: [
      {
        id: 1,
        description: "App Design and Prototyping",
        price: 2500,
        isCompleted: true
      },
      {
        id: 2,
        description: "Core Features Development",
        price: 4000,
        isCompleted: true
      },
      {
        id: 3,
        description: "Testing and Deployment",
        price: 1500,
        isCompleted: false
      }
    ],
    createdDate: "2023-06-15",
    dueDate: "2023-07-15",
    ownerName: "David Smith",
    freelancerName: "Anna Rodriguez",
    status: "done"
  },
  {
    id: 3,
    title: "Brand Identity Design",
    description: "Create a complete brand identity including logo, color palette, typography, and brand guidelines.",
    milestones: [
      {
        id: 1,
        description: "Research and Concept Development",
        price: 1000,
        isCompleted: false
      },
      {
        id: 2,
        description: "Logo and Visual Elements Design",
        price: 2000,
        isCompleted: false
      },
      {
        id: 3,
        description: "Brand Guidelines Documentation",
        price: 1500,
        isCompleted: false
      }
    ],
    createdDate: "2023-07-10",
    dueDate: "2023-09-15",
    ownerName: "Emily Brown",
    freelancerName: "James Wilson",
    status: "pending"
  }
];

export default projectsData;
