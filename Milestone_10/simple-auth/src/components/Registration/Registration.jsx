import React, { useState } from "react";

const Registration = () => {
  return (
    <div className="w-9/12 mx-auto my-5">
      <h2 className="text-2xl font-bold mb-4 text-center">Registration</h2>
      <form className="max-w-md mx-auto">
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
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
