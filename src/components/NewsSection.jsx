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
		imageUrl: "https://picsum.photos/200/200?random=1",
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
		imageUrl: "https://picsum.photos/200/200?random=2",
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
		imageUrl: "https://picsum.photos/200/200?random=3",
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
		imageUrl: "https://picsum.photos/200/200?random=4",
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
		imageUrl: "https://picsum.photos/200/200?random=5",
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
		imageUrl: "https://picsum.photos/200/200?random=6",
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
		imageUrl: "https://picsum.photos/200/200?random=7",
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
		imageUrl: "https://picsum.photos/200/200?random=8",
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
