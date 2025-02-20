import React from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

function Posts() {
  const { id } = useParams(); // To access the dynamic post ID

  return (
    <div>
      <h1>Post {id}</h1>

      <nav>
        <ul>
          <li>
            <Link to={`/posts/${id}/editPosts`}>Edit Post</Link>
          </li>
          <li>
            <Link to={`/posts/${id}/editComment`}>Edit Comment</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Posts;
