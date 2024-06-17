import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/logo.jpg"

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img src={Logo} alt="Logo" className="responsive-logo" />
      </div>
      <div className="auth-form">
        <h2>Create Account</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <div className="auth-links">
          <Link to="/login">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
