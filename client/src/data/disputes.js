const disputes = [
    {
      id: "1",
      projectId: "101",
      raisedBy: "Freelancer A",
      against: "Client X",
      status: "Pending",
      votes: { client: 1, freelancer: 2 },
      assignedModerators: ["Mod1", "Mod2", "Mod3"],
      createdAt: "2024-08-26"
    },
    {
      id: "2",
      projectId: "102",
      raisedBy: "Client Y",
      against: "Freelancer B",
      status: "Resolved",
      votes: { client: 2, freelancer: 1 },
      assignedModerators: ["Mod2", "Mod3", "Mod4"],
      createdAt: "2024-08-24"
    },
    {
      id: "3",
      projectId: "103",
      raisedBy: "Freelancer C",
      against: "Client Z",
      status: "Ongoing",
      votes: { client: 3, freelancer: 3 },
      assignedModerators: ["Mod1", "Mod4", "Mod5"],
      createdAt: "2024-08-23"
    },
    {
      id: "4",
      projectId: "104",
      raisedBy: "Freelancer D",
      against: "Client W",
      status: "Pending",
      votes: { client: 0, freelancer: 2 },
      assignedModerators: ["Mod2", "Mod5", "Mod6"],
      createdAt: "2024-08-22"
    },
    {
      id: "5",
      projectId: "105",
      raisedBy: "Client V",
      against: "Freelancer E",
      status: "Resolved",
      votes: { client: 1, freelancer: 4 },
      assignedModerators: ["Mod3", "Mod6", "Mod7"],
      createdAt: "2024-08-21"
    },
    {
      id: "6",
      projectId: "106",
      raisedBy: "Freelancer F",
      against: "Client U",
      status: "Ongoing",
      votes: { client: 2, freelancer: 3 },
      assignedModerators: ["Mod4", "Mod7", "Mod8"],
      createdAt: "2024-08-20"
    },
    {
      id: "7",
      projectId: "107",
      raisedBy: "Client T",
      against: "Freelancer G",
      status: "Pending",
      votes: { client: 3, freelancer: 1 },
      assignedModerators: ["Mod5", "Mod8", "Mod9"],
      createdAt: "2024-08-19"
    },
    {
      id: "8",
      projectId: "108",
      raisedBy: "Freelancer H",
      against: "Client S",
      status: "Resolved",
      votes: { client: 4, freelancer: 2 },
      assignedModerators: ["Mod6", "Mod9", "Mod10"],
      createdAt: "2024-08-18"
    },
    {
      id: "9",
      projectId: "109",
      raisedBy: "Client R",
      against: "Freelancer I",
      status: "Ongoing",
      votes: { client: 1, freelancer: 1 },
      assignedModerators: ["Mod7", "Mod10", "Mod1"],
      createdAt: "2024-08-17"
    },
    {
      id: "10",
      projectId: "110",
      raisedBy: "Freelancer J",
      against: "Client Q",
      status: "Pending",
      votes: { client: 2, freelancer: 0 },
      assignedModerators: ["Mod8", "Mod1", "Mod2"],
      createdAt: "2024-08-16"
    }
];
  
export default disputes;
