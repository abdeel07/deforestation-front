import React, { useState } from "react";

const tabs = [
	{
		id: "tab1",
		tab: "Forest Restoration",
		title: "Reviving Lost Forests",
		content:
			"Forest restoration involves replanting trees in areas where forests have been cut down or degraded. This process not only helps in bringing back lost biodiversity but also aids in combating climate change by increasing carbon sequestration. Effective forest restoration requires careful planning to choose the right species and ensure the sustainability of new forests.",
	},
	{
		id: "tab2",
		tab: "Sustainable Agriculture",
		title: "Balancing Farming and Forests",
		content:
			"Sustainable agriculture practices are crucial in reducing deforestation caused by expanding agricultural lands. Techniques such as agroforestry, where trees are grown alongside crops, and permaculture, which mimics natural ecosystems, are effective in maintaining ecological balance. These practices not only preserve forests but also enhance soil health and agricultural productivity.",
	},
	{
		id: "tab3",
		tab: "Conservation Policies",
		title: "Legal Frameworks for Forest Protection",
		content:
			"Implementing robust conservation policies is key to protecting forests. This includes enforcing laws against illegal logging, setting up protected areas, and regulating land use. Community involvement and indigenous rights are also vital, as these groups are often the most effective stewards of forested areas. International cooperation and treaties can further bolster these efforts.",
	},
	{
		id: "tab4",
		tab: "Climate Change Mitigation",
		title: "Forests as Climate Change Allies",
		content:
			"Forests play a significant role in mitigating climate change. By absorbing carbon dioxide, they act as carbon sinks, thereby helping in the reduction of global warming. Efforts to reduce emissions from deforestation and forest degradation (REDD+) are crucial in climate change mitigation strategies. These efforts are often supported by international funding and carbon credit systems.",
	},
	{
		id: "tab5",
		tab: "Community Engagement",
		title: "Empowering Local Communities",
		content:
			"Involving local communities in forest conservation is crucial for sustainable outcomes. Initiatives like community forestry, where locals are given the right to manage forest resources, have shown great success. Education and awareness programs about the importance of forests can also foster a sense of responsibility and encourage sustainable practices.",
	},
	// Add more tabs as needed
];

const SolutionsSection = () => {
	const [activeTab, setActiveTab] = useState(tabs[0].id);

	return (
		<section
			id="solutions"
			className="py-12 bg-green-200 flex flex-col justify-center items-center"
		>
			<div className="uppercase tracking-wide py-4 text-xl  text-indigo-500 font-semibold">
				Potential Solutions
			</div>

			<div className=" flex max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden my-8">
				{/* Tabs */}
				<div className="w-1/3 bg-gray-100 p-4">
					<ul className="flex flex-col">
						{tabs.map((tab) => (
							<li key={tab.id} className="mb-2">
								<button
									className={`w-full text-left px-4 py-2 text-sm font-semibold rounded-md 
                            ${
								activeTab === tab.id
									? "bg-white shadow"
									: "hover:bg-gray-200"
							}`}
									onClick={() => setActiveTab(tab.id)}
								>
									{tab.tab}
								</button>
							</li>
						))}
					</ul>
				</div>

				{/* Content */}
				<div className="w-2/3 bg-white p-4">
					{tabs.map((tab) => (
						<div
							key={tab.id}
							className={`tab-content ${
								activeTab === tab.id ? "block" : "hidden"
							}`}
						>
							<h3 className="text-lg font-bold mb-3">
								{tab.title}
							</h3>
							<p>{tab.content}</p>
						</div>
					))}
				</div>
			</div>
		
		</section>
		
	);
};

export default SolutionsSection;
