import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Register = () => {
  // const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    // Prevent page refresh
    event.preventDefault();
    setSuccess("");
    setError("");
    // Collect form data
    const email = event.target.email.value;
    const password = event.target.pass.value;
    const name = event.target.name.value;
    console.log(name, email, password);
    // Validate
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add atleast two numbers");
      return;
    } else if (password.length < 6) {
      setError("Please add atleast 6 characters in your password");
      return;
    }
    // Create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        event.target.reset();
        setSuccess("User has been created successfully!");
        sendVerificationEmail(loggedUser);

        updateUserData(loggedUser, name);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const sendVerificationEmail = (user) => {
    sendEmailVerification(user).then(() => {
      // Email verification sent!
      (result) => {
        console.log(result);
        alert("please verify your email address");
      };
    });
  };

  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name,
      photoURL: "https://i.insider.com/63d93b280a08ae0018a62b4f?width=300",
    })
      .then(() => {
        // Profile updated!
        console.log("User name updated");
      })
      .catch((error) => {
        // An error occurred
        setError(error.message);
      });
  };

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    // setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    // console.log(event.target.value);
  };

  return (
    <div className="w-50 mx-auto">
      <h4>Please Register</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="w-50 mb-4 rounded ps-2"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
        <br />
        <input
          className="w-50 mb-4 rounded ps-2"
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email Address"
          required
        />
        <br />
        <input
          className="w-50 mb-4 rounded ps-2"
          onBlur={handlePasswordBlur}
          type="password"
          name="pass"
          id="pass"
          placeholder="Your Password"
          required
        />
        <br />
        <p>
          <small>
            Already have an account? Please <Link to="/login">Login</Link>
          </small>
        </p>
        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>

        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
