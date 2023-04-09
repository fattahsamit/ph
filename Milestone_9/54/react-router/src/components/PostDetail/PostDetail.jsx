import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const { id, useId, title, body } = post;
  //   console.log(post);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>{id}</h3>
      <h3>Title: {title}</h3>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetail;
