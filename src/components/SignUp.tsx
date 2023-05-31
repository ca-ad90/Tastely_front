import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/register', {
        name,
        email,
        password,
      });

      console.log('User registered:', response.data);
      // Optionally, you can redirect the user to another page after successful registration
      // For example, you can use the `useHistory` hook from react-router-dom
      // history.push('/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <div className="social-buttons">
          <button className="social-button" onClick={() => console.log('Signing up with Google')}>
            Sign up with Google
          </button>
          <button className="social-button" onClick={() => console.log('Signing up with Facebook')}>
            Sign up with Facebook
          </button>
          <button className="social-button" onClick={() => console.log('Signing up with Apple')}>
            Sign up with Apple
          </button>
        </div>
      </div>
      <div className="signup-card">
        <h2 className="signup-title">Register</h2>
        <form className="signup-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
