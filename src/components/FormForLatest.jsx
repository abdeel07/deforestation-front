// All detail for reginal news adding 
import React, { useState } from 'react';
const FormForLatest = ({ onFormSubmits, onCloseForms }) => {
    
    const [headings, setHeading] = useState('');
  const [newsInputs, setNewsInput] = useState('');
  const [selectedImages, setSelectedImages] = useState(null);
  const handleInputChange = (e) => {
    setNewsInput(e.target.value);
  };
  const handleImageChange = (e) => {
    const files = e.target.files[0];
    setSelectedImages(files);
  };

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the submitted news input here (e.g., send to a server, update state, etc.)
    console.log('Submitted news:', newsInputs, 'Heading:', headings);
    // You can add further logic to handle the submitted news input, e.g., send it to the backend
    onFormSubmits({ headings, newsInputs, selectedImages });
    // Close the form after submitting
    onCloseForms();
  };

  return (
    <section id="impact" className="bg-gray-200 p-6">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center">
              <div className="uppercase tracking-wide py-4 text-xl text-indigo-500 font-semibold">
               Latest News
              </div>
           </div>
            <div className="mb-4">
        {/* <label htmlFor="heading" className="block text-gray-700 text-sm font-bold mb-2">
          Heading:
        </label> */}
        <input
          type="text"
          id="heading"
          name="heading"
          value={headings}
          onChange={handleHeadingChange}
          placeholder="Enter heading..."
          className="border p-2 w-full"
        />
      </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={newsInputs}
                onChange={handleInputChange}
                placeholder="Enter regional news..."
                className="border p-2 w-full"
              />
                 <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                Upload Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="border p-2 w-full"
              />
            </div>
              <button
                type="submit"
                className="bg-green-600 text-white p-2 rounded-md hover:bg-white hover:text-gray-600 border border-green-600 transition-colors duration-100"
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

export default FormForLatest;
