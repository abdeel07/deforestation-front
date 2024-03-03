import React, { useState, useRef, useEffect } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import left from "../assets/svgs/left.svg";
import right from "../assets/svgs/right.svg";
import { FaShareAlt } from "react-icons/fa";
import axios from "axios";
import { Link } from 'react-router-dom';
// import FormForLatest from "./FormForLatest";

const latestNews = [
	{
		href: "#uk",
		imageUrl: "https://www.conserve-energy-future.com/wp-content/uploads/2013/03/deforestation-logging-cut-forests.jpg",
		alt: "News",
		heading: "United Kingdom",
		subtitle: "Subtitle",
		newsInput:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, temporibus.",
		icon: 'like',
		icon2: 'share'
	},
	{
		href: "#usa",
		imageUrl: "https://news.mit.edu/sites/default/files/images/202309/MIT-Deforestation-Crisis-01-press.jpg",
		alt: "News",
		heading: "United States",
		subtitle: "Subtitle",
		newsInput:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, temporibus.",
		icon: 'like',
		icon2: 'share'
	},
	{
		href: "#eu",
		imageUrl: "https://sentientmedia.org/wp-content/uploads/2022/07/Madagascar_Deforestation.jpg",
		alt: "News",
		heading: "European Union",
		subtitle: "Subtitle",
		newsInput:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, temporibus.",
		icon: 'like',
		icon2: 'share'
	},

	{
		href: "#spain",
		imageUrl: "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/03/Untitled-1024-%C3%97-768px-2.jpg",
		alt: "News",
		heading: "Spain",
		subtitle: "Subtitle",
		newsInput:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, temporibus.",
		icon: 'like',
		icon2: 'share'
	},

	{
		href: "#germany",
		imageUrl: "https://pachamama.org/hubfs/images/gryffyn-m-axE5o1Xh7_Q-unsplash%20(1)-1.jpg",
		alt: "News",
		heading: "Germany",
		subtitle: "subtitle",
		newsInput:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, temporibus.",
		icon: 'like',
		icon2: 'share'
	},

	{
		href: "#japan",
		imageUrl: "https://t3.ftcdn.net/jpg/01/04/18/04/360_F_104180448_x8CMAaiOu5EsLF75rhOJM3IB1httlJcY.jpg",
		alt: "News",
		heading: "Japan",
		subtitle: "Subtitle",
		newsInput:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, temporibus.",
		icon: 'like',
		icon2: 'share'
	},

	{
		href: "#russia",
		imageUrl: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/10/deforestation.jpg",
		alt: "News",
		heading: "Russia",
		subtitle: "Subtitle",
		newsInput:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, temporibus.",
		icon: 'like',
		icon2: 'share'
	},

	{
		href: "#china",
		imageUrl: "https://www.ucsusa.org/sites/default/files/styles/thumbnail/public/images/tfci-drivers-riau-one-tree.jpg?itok=hyGhHqCA",
		alt: "News",
		heading: "China",
		subtitle: "Subtitle",
		newsInput:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, temporibus.",
		icon: 'like',
		icon2: 'share'
	},

	// ... other news items
];

const NewsSection = () => {
	const [newsItems, setNewsItems] = useState([]);
	const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
	const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);
	const newsRef = useRef(null);

	const fetchLatestNews = async () => {
		try {
			const response = await axios.get('http://localhost:8080/api/posts/type/Latest');
			const latestNews = response.data.map(newsItem => ({
				...newsItem,
				imageUrl: newsItem.imageUrl,
				href: `/news/${newsItem.id}`,
				alt: newsItem.heading,
				heading: newsItem.heading,
				newsInput: newsItem.newsInput,
				icon: 'like',
				icon2: 'share'
			}));
			setNewsItems(latestNews);
		} catch (error) {
			console.error('Failed to fetch latest news:', error);
		}
	};

	useEffect(() => {
		fetchLatestNews(); // Fetch latest news when component mounts
	}, []);

	const scroll = (direction) => {
		const scrollAmount = direction === "left" ? -200 : 200;
		newsRef.current.scrollBy({
			top: 0,
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	const checkScrollButtons = () => {
		const position = newsRef.current.scrollLeft;
		const maxScrollLeft =
			newsRef.current.scrollWidth - newsRef.current.clientWidth;
		setIsLeftButtonDisabled(position === 0);
		setIsRightButtonDisabled(Math.round(position) === maxScrollLeft);
	};

	useEffect(() => {
		const newsContainer = newsRef.current;
		newsContainer.addEventListener("scroll", checkScrollButtons);
		return () =>
			newsContainer.removeEventListener("scroll", checkScrollButtons);
	}, []);

	const getIconComponent = (iconName) => {
		switch (iconName) {
			case 'like':
				return <AiTwotoneLike />;
			case 'share':
				return <FaShareAlt />;
			default:
				return null; // Default case if the icon is not recognized
		}
	};

	return (
		<section id="news" className="p-12" style={{ marginTop: "50px" }}>
			<div className="container">
				<div className="action-buttons">
					<div className="uppercase tracking-wide text-xl  text-indigo-500 font-semibold">
						Latest News
					</div>
					<button
						onClick={() => scroll("left")}
						disabled={isLeftButtonDisabled}
						id="action-button--previous"
						className="action-button--horizontal-scroll flex justify-center items-center"
					>
						<img
							src={left}
							alt="Left"
							className="h-8 w-8 transform rotate-90"
						/>
					</button>
					<button
						onClick={() => scroll("right")}
						disabled={isRightButtonDisabled}
						id="action-button--next"
						className="action-button--horizontal-scroll flex justify-center items-center"
					>
						<img
							src={right}
							alt="Right"
							className="h-6 w-6 transform -rotate-90"
						/>
					</button>
				</div>
				<div
					ref={newsRef}
					id="all-news"
					className="flex gap-16 overflow-auto snap-x snap-mandatory"
				>
					{
						latestNews.map((item, index) => (
							<Link
								key={index}
								to={`/posts/details`}
								state={{ item }}
								className="news-item-link"
							>

								<div className="news">
									<h2 className="text-lg font-mono">
										{item.heading}
									</h2>
									{/* <div className="text-md">{item.subtitle}</div> */}

									<img
										className="rounded-lg h-20"
										src={item.imageUrl}
										alt={item.alt}
									/>
									<div className="text-sm">
										{item.newsInput}
									</div>
									<div className="text-sm flex flex-row">
										{getIconComponent(item.icon)} {/* Dynamically render icons */}
										{getIconComponent(item.icon2)}
									</div>
								</div>
							</Link>
						))
					}

					{newsItems.map((item, index) => (
						<Link
							key={index}
							to={`/posts/details`}
							state={{ item }}
							className="news-item-link"
						>
							<div className="news">
								<h2 className="text-lg font-mono">
									{item.heading}
								</h2>
								{/* <div className="text-md">{item.subtitle}</div> */}

								<img
									className="rounded-lg h-20"
									src={item.imageUrl}
									alt={item.alt}
								/>
								<div className="text-sm">
									{item.newsInput}
								</div>
								<div className="text-sm flex flex-row ">
									{item.icon} {/* First icon */}
									{item.icon2}
								</div>
							</div>
						</Link>
					))}
				</div>
				<div>
					{/* <button onClick={handleAddNewsClick} className="bg-green-600 text-white p-2 rounded-md hover:bg-white hover:text-gray-600 border border-green-600 transition-colors duration-100">
        Add News
      </button>
      {isFormVisibles && (
        <FormForLatest onFormSubmits={handleFormSubmit} onCloseForms={handleCloseForms} />
      )} */}
				</div>
			</div>
		</section>
	);
};

export default NewsSection;
