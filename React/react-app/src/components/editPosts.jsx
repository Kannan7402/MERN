import React from 'react';

function EditPost() {
  return (
    <div>
      <h2>Edit Post</h2>
      <form>
        <input type="text" placeholder="Edit post title" />
        <textarea placeholder="Edit post content"></textarea>
        <button type="submit">Save Post</button>
      </form>
    </div>
  );
}

export default EditPost;
