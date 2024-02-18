import React, { useState, useEffect } from 'react';

const CommentApi = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from the Spring Boot backend
    fetch('http://localhost:8080/do/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">User Reviews</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="mb-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentApi;
