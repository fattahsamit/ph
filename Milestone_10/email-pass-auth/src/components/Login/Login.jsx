import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef, useState } from "react";
import app from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passRef = useRef();

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
      .then(() => {
        // const loggedUser = result.user;
        setSuccess("User logged in successfully");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const showPassword = () => {
    const pass = passRef.current.type;
    console.log(pass);
    if (pass === "password") {
      passRef.current.type = "text";
    } else {
      passRef.current.type = "password";
    }
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please provide your email address to reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert("Please check your email");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
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
            ref={emailRef}
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
            ref={passRef}
            required
          />
          <button className="btn" onClick={showPassword}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>
          </button>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        <small>
          Forgot Password? Please
          <button
            onClick={handleResetPassword}
            to="/register"
            className="btn btn-link"
          >
            Reset Password
          </button>
        </small>
      </p>
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
