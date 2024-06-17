import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/logo.jpg"

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img src={Logo} alt="Logo" className="responsive-logo" />
      </div>
      <div className="auth-form">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <div className="auth-links">
          <Link to="/forgot-password">Forgot your password?</Link>
          <Link to="/signup">Create account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
