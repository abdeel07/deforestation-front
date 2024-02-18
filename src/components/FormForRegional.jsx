import React, { useState, useEffect } from 'react';

const FormForRegional = ({ onFormSubmit, onCloseForm }) => {
  const [heading, setHeading] = useState('');
  const [newsInput, setNewsInput] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    // Fetch a random image URL from Unsplash API
    fetch('https://source.unsplash.com/random')
      .then((response) => {
        setSelectedImage(response.url);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleInputChange = (e) => {
    setNewsInput(e.target.value);
  };

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('newsInput', newsInput);
    formData.append('selectedImage', selectedImage);

    try {
      // Make a POST request to your backend API
      const response = await fetch('http://localhost:8080/deforestation/regionalnews', {
        method: 'POST',
       
        body: formData,
      });

      // Check if the request was successful
      if (response.ok) {
        const responseData = await response.json();
        console.log('Response from backend:', responseData);
        // You can handle the response as needed
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
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={newsInput}
                onChange={handleInputChange}
                placeholder="Enter regional news..."
                className="border p-2 w-full"
              />
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                  Image:
                </label>
                <img src={selectedImage} alt="Random" className="border p-2 w-full" style={{ width: '250px', height: '200px' }} />
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
