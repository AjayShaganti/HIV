import React from "react";
import "../Styles/Login.css";
import Image from "../Assets/login.png";
import Facebook from "../Assets/faceboook.png";
import Google from "../Assets/google.png";
import Twitter from "../Assets/twitter.png";


function Login() {
  return (
    <div class="login-container">
      <div class="left-section">
        <img src={Image} alt="login" className="left-section-img" />
        <p className="left-section-description">
          No judgment, No hassle just accurate results Choose our HIV
          self-testing kit
        </p>
      </div>
      <div class="right-section">
        <form>
          <div className="right-section-heading">
            <div className="right-section-title">Login</div>
            <div className="right-section-sub-title">
              Don't have a account?<a href="register.js"> Create Account</a>
            </div>
          </div>

          <div class="input-container">
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Username"
            />
            <br></br>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="forgotpassword">
            <input
              type="checkbox"
              id="rememberme"
              name="rememberme"
              className="check-box"
            />
            <label for="rememberme" className="check-box">
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="social">
            <p>or login with</p>
            <br></br>
            <div className="icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="social-icon"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={Twitter} alt="Twitter" />
              </a>
              <a
                href="https://www.gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={Google} alt="Google" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
