import React from "react";
import "../index.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="overlay">
        <div className="login-container">
          {/* Form bên trái */}
          <div className="login-form glass">
            <h1>Login</h1>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />

              <div className="remember-row">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me?</label>
              </div>

              <button type="submit" className="login-btn">LOGIN</button>
              <a href="/" className="forgot">Forgot Password?</a>
            </form>
          </div>

          {/* Quote bên phải */}
          <div className="login-quote">
            <h1>
              THE GOAL OF LIFE IS <br />
              LIVING IN AGREEMENT <br />
              WITH NATURE.
            </h1>
            <div className="social-icons">
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

export default LoginPage;
