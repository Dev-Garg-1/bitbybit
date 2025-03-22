import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import FreelancerDashboard from './pages/FreelancerDashboard';
import ClientDashboard from './pages/ClientDashboard';

function App() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/freelancer" element={<FreelancerDashboard/>} />


        {/* {token && role === 'freelancer' ? (
          <Route path="/freelancer" element={<FreelancerDashboard />} />
        ) : token && role === 'client' ? (
          <Route path="/client" element={<ClientDashboard />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )} */}
      </Routes>
    </Router>
  );
}

export default App;
