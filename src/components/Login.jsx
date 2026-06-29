import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('mrnoahayo@gmail.com');
  const [password, setPassword] = useState('********');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <main className="login-main">
        <h1 className="welcome-text">Welcome Back</h1>
        
        <div className="login-card">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                required 
              />
            </div>
            
            <div className="input-group">
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
                required 
              />
            </div>
            
            <button type="submit" className="login-submit-btn">LogIn</button>
          </form>
          
          <p className="signup-redirect">
            Don't have an account? <a href="#signup">Sign up</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;