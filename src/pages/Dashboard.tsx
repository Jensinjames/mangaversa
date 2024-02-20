import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <h1>Welcome, {user.username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;