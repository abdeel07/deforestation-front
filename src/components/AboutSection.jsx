// src/components/AboutSection.js
import React from "react";

const AboutSection = () => {
	return (
		<section id="about" className="py-12 bg-green-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="uppercase tracking-wide py-4 text-xl  text-indigo-500 font-semibold">
					About Deforestation
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{/* Each column is wrapped in a div */}
					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<div className="p-6">
							<a
								href="#about-deforestation"
								className="block text-lg leading-tight font-medium text-black hover:underline"
							>
								Understanding the Impact
							</a>
							<p className="mt-2 text-gray-500">
								Deforestation leads to a significant loss of
								biodiversity, alters water cycles, and
								contributes to climate change. Learn more about
								how we can mitigate these effects and protect
								our forests.
							</p>
						</div>
					</div>

					{/* Repeat for each column */}
					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<div className="p-6">
							<a
								href="#causes-deforestation"
								className="block text-lg leading-tight font-medium text-black hover:underline"
							>
								The Causes of Deforestation
							</a>
							<p className="mt-2 text-gray-500">
								Deforestation is driven by a variety of factors
								including agriculture, logging, urban expansion,
								and mining activities. Each contributes to the
								degradation of our forest ecosystems.
							</p>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<div className="p-6">
							<a
								href="#impact-biodiversity"
								className="block text-lg leading-tight font-medium text-black hover:underline"
							>
								The Impact on Biodiversity
							</a>
							<p className="mt-2 text-gray-500">
								Forests are home to more than half of
								terrestrial species. When forests are destroyed,
								it leads to declines in wildlife populations and
								extinction.
							</p>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<div className="p-6">
							<a
								href="#combating-deforestation"
								className="block text-lg leading-tight font-medium text-black hover:underline"
							>
								Combating Deforestation
							</a>
							<p className="mt-2 text-gray-500">
								Combating deforestation requires a multi-faceted
								approach, including conservation laws,
								sustainable forestry practices, reforestation,
								and support for indigenous communities.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
