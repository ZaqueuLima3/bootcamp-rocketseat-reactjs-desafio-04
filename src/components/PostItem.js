import React from 'react';

import PostComment from './PostComment';

function Postitem({ data, image }) {
  return (
    <div className="post-item-wrapper">
      <div className="post">
        <div className="user-info">
          <img className="img-profile" src={image} alt="user profile" />
          <div>
            <strong>{data.name}</strong>
            <small>{data.date}</small>
          </div>
        </div>

        <div className="post-text">
          <p>{data.msg}</p>
        </div>

        {data.comments.map(comment => (
          <PostComment key={comment.id} data={comment}/>
        ))}
      </div>
    </div>
  );
}

export default Postitem;
