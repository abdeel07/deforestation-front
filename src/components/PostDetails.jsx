import React from 'react'
import { useLocation } from 'react-router-dom';

function PostDetails() {
    const location = useLocation();
    const item = location.state?.item;

    if (!item) {
        return <div>No News Item Found. Please navigate from the homepage.</div>;
    }

    return (
        <div className="container mx-auto p-4" style={{ marginTop: "100px" }}>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                    {/* Display the image if it exists */}
                    {item.imageUrl && (
                        <img
                            src={item.imageUrl}
                            alt="News"
                            className="object-cover w-full h-64 rounded-md"
                            style={{ objectFit: "contain" }}
                        />
                    )}
                </div>
                <div>
                    {/* Display the title */}
                    <h2 className="text-2xl font-bold mb-2">{item.heading}</h2>
                    {/* Display the newsInput */}
                    <p className="text-gray-700">{item.newsInput}</p>
                </div>
            </div>
        </div>
    )
}

export default PostDetails