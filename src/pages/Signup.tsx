import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import '../styles/Signup.css';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.signup(username, password);
      history.push('/dashboard');
    } catch (err) {
      setError('Failed to create an account');
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;