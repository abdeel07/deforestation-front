import React, { useState, useRef, useEffect } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import left from "../assets/svgs/left.svg";
import right from "../assets/svgs/right.svg";
import { FaShareAlt } from "react-icons/fa";
import axios from "axios";
// import FormForLatest from "./FormForLatest";


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
				imgSrc: newsItem.imageUrl,
				href: `/news/${newsItem.id}`,
				alt: newsItem.heading,
				title: newsItem.heading,
				description: newsItem.newsInput,
				icon: <AiTwotoneLike />,
				icon2: <FaShareAlt />
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

	return (
		<section id="news" className="p-12">
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
					{newsItems.map((item, index) => (
						<a key={index} href={item.href}>
							<div className="news">
								<h2 className="text-lg font-mono">
									{item.title}
								</h2>
								{/* <div className="text-md">{item.subtitle}</div> */}

								<img
									className="rounded-lg h-20"
									src={item.imgSrc}
									alt={item.alt}
								/>
								<div className="text-sm">
									{item.description}
								</div>
								<div className="text-sm flex flex-row ">
									{item.icon} {/* First icon */}
									{item.icon2}
								</div>
							</div>
						</a>
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
