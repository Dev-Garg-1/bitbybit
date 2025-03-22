import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import ClientDashboard from "./pages/ClientDashboard";
import Dashboard from "./pages/freelancer/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ClientDashboard from "./pages/_client/ClientDashboard";
import Dashboard from "./pages/freelancer/Dashboard";

function App() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/freelancer" element={<Dashboard />} />
        {/* {token && role === 'freelancer' ? (
          <Route path="/freelancer" element={<FreelancerDashboard />} />
        ) : token && role === 'client' ? (
          <Route path="/client" element={<ClientDashboard />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )} */}
        <Route path="/admin" element={<AdminDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
