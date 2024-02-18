// src/components/HeroSection.js
import React from "react";
import heroImage from "../assets/images/hero4.png"; // Update the path as needed

const HeroSection = () => {
	return (
		<div
			style={{ backgroundImage: `url(${heroImage})` }}
			className="bg-cover bg-center h-screen text-white text-center p-12 flex items-center justify-center flex-col "
		>
			<div className="backdrop-blur p-6 rounded-3xl border-2 border-white">
				<h2 className="text-4xl font-bold ">Protect Our Forests</h2>
				<p className="p-6  my-4  max-w-lg leading-relaxed rounded-xl text-xl">
					Join us in the fight against deforestation and help preserve
					our planet's green lungs.
				</p>
				<button className="bg-white text-green-800 font-bold py-2 px-4 rounded hover:bg-green-600 hover:text-white transition-colors">
					Learn More
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
