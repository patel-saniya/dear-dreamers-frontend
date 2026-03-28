import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/SignupLogin.css";
import astroImage from "../assets/images/babyastro.png";

// ✅ ADD THIS LINE
const API_URL = process.env.REACT_APP_API_URL;

function SignupLogin() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ---------------- INPUT HANDLER ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ===================== SIGNUP =====================
  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    const params = new URLSearchParams();
    params.append("name", formData.name);
    params.append("lastName", formData.lastName);
    params.append("age", formData.age);
    params.append("email", formData.email);
    params.append("password", formData.password);

    try {
      const response = await fetch(
        `${API_URL}/DearDreamersApp/SignupServlet`, // ✅ FIXED
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
        }
      );

      const text = await response.text();

      if (text.toLowerCase().includes("successful")) {
        setSuccessMsg(
          `Hello ${formData.name}! 🎉 Your account has been created successfully.`
        );
        setShowModal(true);
      } else {
        setError(text);
      }
    } catch (err) {
      console.error(err);
      setError("Signup failed. Server not reachable.");
    }
  };

  // ===================== LOGIN =====================
  const handleLogin = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append("email", formData.email);
    params.append("password", formData.password);

    try {
      const response = await fetch(
        `${API_URL}/DearDreamersApp/LoginServlet`, // ✅ FIXED
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          credentials: "include", // IMPORTANT for session
          body: params.toString(),
        }
      );

      const text = await response.text();

      if (text.toLowerCase().includes("successful")) {
        navigate("/home");
      } else {
        setError(text);
      }
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again.");
    }
  };

  // ---------------- CLOSE MODAL ----------------
  const closeModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsSignup(false);
  };

  return (
    <div className="signup-login">
      <div className="container">
        <div className="tabs">
          <label
            className={isSignup ? "active" : ""}
            onClick={() => setIsSignup(true)}
          >
            Signup
          </label>
          <label
            className={!isSignup ? "active" : ""}
            onClick={() => setIsSignup(false)}
          >
            Login
          </label>
        </div>

        <div className="forms">
          {isSignup ? (
            <form onSubmit={handleSignup}>
              <h3>Signup</h3>

              <input name="name" placeholder="First Name" value={formData.name} onChange={handleChange} required />
              <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              <input type="number" name="age" min="2" max="6" placeholder="Child Age" value={formData.age} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

              {error && <p className="error-msg">{error}</p>}

              <button type="submit">Signup</button>
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <h3>Login</h3>

              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

              {error && <p className="error-msg">{error}</p>}

              <button type="submit">Login</button>
            </form>
          )}

          <div className="image-astro">
            <img src={astroImage} alt="astro" />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Signup Successful 🎉</h2>
            <p>{successMsg}</p>
            <button className="ok-btn" onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupLogin;