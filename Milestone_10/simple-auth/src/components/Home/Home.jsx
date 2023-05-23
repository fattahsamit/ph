import React from "react";
import Lottie from "lottie-react";
import authAnimation from "../../assets/auth.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-5">
      <h2 className="text-center mb-8">
        Please{" "}
        <Link to={"/login"} className="text-primary">
          Login
        </Link>{" "}
        to gain access
      </h2>
      <Lottie
        className="max-w-md mx-auto"
        animationData={authAnimation}
        loop={true}
      />
    </div>
  );
};

export default Home;
