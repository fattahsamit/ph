import React from "react";

const Friend = ({ ring }) => {
  return (
    <div>
      <h4>Friend</h4>
      {ring && (
        <p>
          <small>Ring: {ring}</small>
        </p>
      )}
    </div>
  );
};

export default Friend;
