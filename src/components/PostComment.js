import React from 'react';

function PostComment({ data }) {
  return (
    <div className="comment-wrapper">
      <img className="img-profile" src={data.image} alt="user profile" />
      <div className="comment-text">
        <p><strong>{data.name}</strong> {data.msg}</p>
      </div>
    </div>
  );
}

export default PostComment;