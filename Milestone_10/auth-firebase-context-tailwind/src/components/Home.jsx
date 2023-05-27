import React, { useContext } from "react";
import { UserContext } from "../providers/AuthProviders";

const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h2>This is Home {user && <span>{user.displayName}</span>}</h2>
    </div>
  );
};

export default Home;
