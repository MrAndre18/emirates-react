import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.scss';

const PostItem = ({ post }) => {
  return (
    <div className="post">
      <Link
        to={'/' + post.category.path}
        className='post-category'
      >
        <span className="post-category__text">
          {post.category.name}
        </span>
      </Link>

      <p className="post-name">
        {post.name}
      </p>
    </div>
  );
};

export default PostItem;