import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;