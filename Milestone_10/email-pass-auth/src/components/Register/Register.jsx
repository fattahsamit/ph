import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  // const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    // Prevent page refresh
    event.preventDefault();
    setSuccess("");
    // Collect form data
    const email = event.target.email.value;
    const password = event.target.pass.value;
    console.log(email, password);
    // Create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        event.target.reset();
        setSuccess("User has been created successfully!");
      })
      .catch((error) => {
        console.error(error.message);
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
        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>

        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
