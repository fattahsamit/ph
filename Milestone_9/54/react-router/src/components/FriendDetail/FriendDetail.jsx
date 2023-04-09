import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  console.log(friend);
  const { name, phone, email } = friend;

  return (
    <div>
      <h4>Name: {name}</h4>
      <p>Phone: {phone}</p>
      <p>E-mail: {email}</p>
    </div>
  );
};

export default FriendDetail;
