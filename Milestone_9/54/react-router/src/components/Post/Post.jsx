import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  //   console.log(post);
  const { id, title, body } = post;

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post">
      <h3>{title}</h3>
      <h4>{body}</h4>
      <Link to={`/post/${id}`}>Details</Link>

      <Link to={`/post/${id}`}>
        <button>Details</button>
      </Link>

      <button onClick={handleNavigation}>With Button Handler</button>
    </div>
  );
};

export default Post;
