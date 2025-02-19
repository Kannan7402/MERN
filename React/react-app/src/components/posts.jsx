import React from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

function Posts() {
  const { id } = useParams(); // To access the dynamic post ID

  return (
    <div>
      <h1>Post {id}</h1>
      {/* Link to edit the post */}
      <nav>
        <ul>
          <li>
            <Link to="editPosts">Edit Post</Link>
          </li>
          <li>
            <Link to="comments/edit">Edit Comment</Link>
          </li>
        </ul>
      </nav>

      {/* The nested routes (EditPost or EditComment) will be displayed here */}
      <Outlet />
    </div>
  );
}

export default Posts;
