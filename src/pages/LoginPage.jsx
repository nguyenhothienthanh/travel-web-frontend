import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useBreakpoints } from "../hooks/UseIsMobile";
import "../index.css";

const LoginPage = () => {
  const { isMobile, isTablet, isDesktop, isLarge } = useBreakpoints();

  // Tính toán style dựa vào kích thước
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
    <div className="login-page">
      <div className="overlay">
        <div className="login-container" style={containerStyle}>
          {/* Form bên trái */}
          <div className="login-form glass" style={formStyle}>
            <h1 style={titleStyle}>Login</h1>
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
            <h1 style={quoteStyle}>
              THE GOAL OF LIFE IS <br />
              LIVING IN AGREEMENT <br />
              WITH NATURE.
            </h1>
            <div className="social-icons" style={{ justifyContent: isMobile ? "center" : "flex-start" }}>
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
