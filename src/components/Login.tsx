import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Login submitted:', email, password);

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });

      console.log('User logged in:', response.data);
      setLoginStatus('success');
      navigate('/discover');
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginStatus('failure');
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Tastely</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label htmlFor="email" className="login-form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="login-form-input"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password" className="login-form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="login-form-input"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="login-forgot-password">
              <a href="/">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
          <p className="login-info">
            Don't have an account?{' '}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
          <div className="alternative-login">
            <p>Or login with:</p>
            <div className="alternative-login-buttons">
              <button className="alternative-login-button">Facebook</button>
              <button className="alternative-login-button">Google</button>
              <button className="alternative-login-button">Apple</button>
            </div>
          </div>
        </div>
        {loginStatus === 'success' && <p>Login successful!</p>}
        {loginStatus === 'failure' && <p>Login failed. Please try again.</p>}
      </div>
    </div>
  );
};

export default Login;
