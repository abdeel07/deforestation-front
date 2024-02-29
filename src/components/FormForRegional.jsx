import React, { useState } from 'react';

const FormForRegional = ({ onFormSubmit, onCloseForm }) => {
  const [heading, setHeading] = useState('');
  const [newsInput, setNewsInput] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [articleType, setArticleType] = useState('Regional'); // Default to REGIONAL
  const [imageUrl, setImageUrl] = useState('https://picsum.photos/200/200?random=7');

  const handleInputChange = (e) => {
    setNewsInput(e.target.value);
  };

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const articleData = {
      heading,
      newsInput,
      type: articleType,
      imageUrl,
    };

    try {
      // Make a POST request to your backend API
      const response = await fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articleData),
      });

      // Check if the request was successful
      if (response.ok) {
        onFormSubmit();
        window.alert('Article submitted successfully!');
      } else {
        // Handle errors
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }

    // Close the form after submitting
    onCloseForm();
  };

  return (
    <section id="impact" className="bg-gray-200 p-6">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center">
              <div className="uppercase tracking-wide py-4 text-xl text-indigo-500 font-semibold">
                Regional News
              </div>
              <div className="flex items-center justify-start gap-2.5">
                <button
                  className="w-[30px] h-[30px] leading-[30px] text-[15px] rounded-md text-center bg-green-600 text-white hover:bg-white hover:text-gray-600  border border-green-600  transition-colors duration-100"
                  onClick={() => setPageNumber(pageNumber - 1)}
                >
                  -
                </button>
                <span className="text-lg">{pageNumber}</span>
                <button
                  className="w-[30px] h-[30px] leading-[30px] text-[15px] rounded-md text-center bg-green-600 text-white hover:bg-white hover:text-gray-600  border border-green-600  transition-colors duration-100"
                  onClick={() => setPageNumber(pageNumber + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="heading"
                name="heading"
                value={heading}
                onChange={handleHeadingChange}
                placeholder="Enter heading..."
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="articleType" className="block text-gray-700 text-sm font-bold mb-2">
                Post Type:
              </label>
              <select
                id="articleType"
                value={articleType}
                onChange={(e) => setArticleType(e.target.value)}
                className="border p-2 w-full"
              >
                <option value="Regional">Regional</option>
                <option value="Latest">Latest</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="text"
                value={newsInput}
                onChange={handleInputChange}
                placeholder="Enter regional news..."
                className="border p-2 w-full"
              />
              <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">
                  Image URL:
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Enter image URL..."
                  className="border p-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white p-2 rounded-md hover:bg-white hover:text-gray-600 border border-green-600 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormForRegional;
