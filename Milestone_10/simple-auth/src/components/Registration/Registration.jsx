import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Registration</h2>
      <form className="max-w-md mx-auto flex flex-col">
        <div className="mb-4 flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            className="input input-bordered input-primary"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-1">
            Email address
          </label>
          <input
            type="email"
            className="input input-bordered input-primary"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="password" className="text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="input input-bordered input-primary"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-1/2 mx-auto mb-3">
          Register
        </button>
        <small className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-primary">
            Login
          </Link>{" "}
          here
        </small>
      </form>
    </div>
  );
};

export default Registration;
