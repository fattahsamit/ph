import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  //   console.log(post);

  return (
    <div>
      <h3>{id}</h3>
      <h3>Title: {title}</h3>
      <h4>{body}</h4>
    </div>
  );
};

export default PostDetail;
