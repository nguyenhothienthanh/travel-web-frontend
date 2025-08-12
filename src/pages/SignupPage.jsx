import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useBreakpoints } from "../hooks/UseIsMobile";
import "../index.css";

const SignupPage = () => {
  const { isMobile, isTablet, isDesktop, isLarge } = useBreakpoints();

  const containerStyle = {
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "30px" : isTablet ? "60px" : "150px",
    padding: isMobile ? "10px" : "20px",
  };

  const formStyle = {
    width: isMobile ? "100%" : "100%",
    padding: isMobile ? "20px" : "40px",
    fontSize: isMobile ? "14px" : isTablet ? "15px" : "16px",
  };

  const titleStyle = {
    fontSize: isMobile ? "24px" : isTablet ? "28px" : "32px",
  };

  const quoteStyle = {
    fontSize: isMobile ? "18px" : isTablet ? "22px" : "35px",
    textAlign: isMobile ? "center" : "left",
  };

  return (
    <div className="signup-page">
      <div className="signup-overlay">
        <div className="signup-container" style={containerStyle}>
          
          {/* Form bên trái */}
          <div className="signup-form signup-glass" style={formStyle}>
            <h1 style={titleStyle}>Sign Up</h1>
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
            <h1 style={quoteStyle}>
              THE GOAL OF LIFE IS <br />
              LIVING IN AGREEMENT <br />
              WITH NATURE.
            </h1>
            <div
              className="signup-social-icons"
              style={{ justifyContent: isMobile ? "center" : "flex-start" }}
            >
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
