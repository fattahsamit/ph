import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  //   console.log(post);
  const { id, title, body } = post;

  return (
    <div className="post">
      <h3>{title}</h3>
      <h4>{body}</h4>
      <button>
        <Link to={`/post/${id}`}>Details</Link>
      </button>
    </div>
  );
};

export default Post;
