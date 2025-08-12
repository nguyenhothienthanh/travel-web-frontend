import React from "react";
import "../index.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-overlay">
        <div className="signup-container">
          
          {/* Form bên trái */}
          <div className="signup-form signup-glass">
            <h1>Sign Up</h1>
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />

              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Password</label>
              <input type="password" placeholder="Create a password" required />

              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" required />

              <button type="submit" className="signup-btn">SIGN UP</button>

              <p className="switch-auth">
                Already have an account? <a href="/login">Login</a>
              </p>
            </form>
          </div>

          {/* Quote bên phải */}
          <div className="signup-quote">
            <h1>
              THE GOAL OF LIFE IS <br />
              LIVING IN AGREEMENT <br />
              WITH NATURE.
            </h1>
            <div className="signup-social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignupPage;
