import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google Login</button>
    </div>
  );
};

export default Login;
