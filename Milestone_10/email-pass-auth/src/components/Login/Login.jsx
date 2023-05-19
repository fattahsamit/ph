import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // validation
    setError("");
    setSuccess("");
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Please add atleast 2 uppercase");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add a special character");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("User logged in successfully");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="w-25 mx-auto">
      <h2>Please Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        <small>
          New to this website? Please <Link to="/register">Register</Link>
        </small>
      </p>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default Login;
