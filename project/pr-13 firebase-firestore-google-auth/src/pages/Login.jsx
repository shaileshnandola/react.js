import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, google } from "../../firebaseconfig";
import "./Login.css";

const Login = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, google);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome ${user.displayName}`);
    } catch (err) {
      console.error("Login error:", err);
      alert("Google sign-in failed.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to My App</h2>
        <p>Sign in using your Google account</p>
        <button className="google-btn" onClick={handleLogin}>
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
