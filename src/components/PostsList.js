import React from 'react';

import PostItem from './PostItem';

import posts from '../data/posts';


function PostsList() {
  return (
    posts.map(post => (
      <PostItem key={post.id} data={post} image={post.image} />
    ))
  );
}

export default PostsList;