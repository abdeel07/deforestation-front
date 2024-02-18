import React, { useState, useEffect } from 'react';

const CommentPopup = ({ comment, setComment, onClose, onSubmit }) => {
  const [showCommentApi, setShowCommentApi] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleAddComment = () => {
    setLoading(true);
  
    fetch('http://localhost:8080/do/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment), // Send comment directly as a string
    })
      .then(response => {
        if (response.ok) {
          console.log("Comment added successfully");
          return response.json(); // assuming the backend sends a response with details
        } else {
          throw new Error('Failed to add comment');
        }
      })
      .then(data => {
        onSubmit(comment);
        setShowCommentApi(true);
      })
      .catch(error => {
        console.error('Error adding comment:', error);
        // Handle the error gracefully, e.g., show a user-friendly error message
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  useEffect(() => {
    if (!showCommentApi) {
      setComment(''); // Clear the comment
    }
  }, [showCommentApi, setComment]);

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal panel */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write your comment..."
              className="w-full h-32 p-2 border rounded-md"
            />
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={handleAddComment}
            disabled={loading}
            className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
            <button onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;
