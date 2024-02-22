import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentApi = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/comments')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">User Reviews</h2>
      <ul>
        {comments.map(c => (
          <li key={c.id} className="mb-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h5>Post: {c.postHeading || 'Post unavailable'}</h5>
              <h5>User: {c.userEmail || 'User unavailable'}</h5>
              <p className="text-gray-700">{c.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentApi;
