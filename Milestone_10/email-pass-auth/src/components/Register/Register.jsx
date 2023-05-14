import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  return (
    <div>
      <h4>Please Register</h4>
      <form>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email Address"
        />
        <br />
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Your Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
