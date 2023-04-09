import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  //   console.log(friend);
  const { name, email, phone, id } = friend;

  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>E-mail: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/friend/${id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default Friend;
