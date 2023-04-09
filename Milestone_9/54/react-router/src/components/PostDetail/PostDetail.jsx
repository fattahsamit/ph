import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const { id, useId, title, body } = post;
  //   console.log(post);

  return (
    <div>
      <h3>{id}</h3>
      <h3>Title: {title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostDetail;
