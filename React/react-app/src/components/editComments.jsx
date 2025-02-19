import React from 'react';

function EditComment() {
  return (
    <div>
      <h2>Edit Comment</h2>
      <form>
        <textarea placeholder="Edit your comment"></textarea>
        <button type="submit">Save Comment</button>
      </form>
    </div>
  );
}

export default EditComment;
