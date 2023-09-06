import React from 'react';
import PostItem from '../PostItem/PostItem';
import './PostsList.scss';

const PostsList = ({ posts }) => {
  return (
    <div className="posts">
      <h2 className="posts-title">
        
      </h2>

      <ul className="posts-list">
        {posts.map((post, index) =>
          <li key={index} className="posts-item">
            <PostItem post={post} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default PostsList;