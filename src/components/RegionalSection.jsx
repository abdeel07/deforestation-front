// src/components/ImpactSection.js
import React, { useState, useEffect } from 'react';
// import impact from "../assets/images/impact.png";
import { IoShareSocial } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";
import FormForRegional from "./FormForRegional";
import Login from './Login';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import { BiLike } from "react-icons/bi";
import CommentPopup from './CommentPopup';
import { Link } from 'react-router-dom';

const ImpactSection = () => {

	const [isFormVisible, setFormVisibility] = useState(false);
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showLoginPopup, setShowLoginPopup] = useState(false);
	const { isLoggedIn } = useAuth();
	const [isCommentPopupVisible, setCommentPopupVisibility] = useState(false);

	const [selectedPostId, setSelectedPostId] = useState(null);

	const [newsItems, setNewsItems] = useState([]);

	useEffect(() => {
		// Fetch regional news when the component mounts
		fetchRegionalNews();
	}, []);

	const fetchRegionalNews = async () => {
		try {
			const response = await axios.get('http://localhost:8080/api/posts/type/Regional');

			if (response.status === 200) {
				console.log('Fetched regional news:', response.data);
				setNewsItems(response.data);
			} else {
				throw new Error('Failed to fetch regional news');
			}
		} catch (error) {
			console.error('Error fetching regional news:', error);
		}
	};

	const handleAddNewsClick = () => {
		setFormVisibility(true);
	};
	const handleCloseForm = () => {
		setFormVisibility(false);
	};
	const handleFormSubmit = () => {
		fetchRegionalNews();
	};
	const handleCommentClick = (postId) => {
		setSelectedPostId(postId);
		setCommentPopupVisibility(true);
	};

	return (
		<>
			<section id="impact" className="bg-gray-200  p-6">
				<div className="container mx-auto">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between items-center">
							<div className="uppercase tracking-wide py-4 text-xl  text-indigo-500 font-semibold">
								Regional News
							</div>
							<div class="flex items-center justify-start gap-2.5">
								<button class="w-[30px] h-[30px] leading-[30px] text-[15px] rounded-md text-center bg-green-600 text-white hover:bg-white hover:text-gray-600  border border-green-600  transition-colors duration-100">
									1
								</button>
								<button class="w-[30px] h-[30px] leading-[30px] text-[15px] rounded-md text-center bg-green-600 text-white hover:bg-white hover:text-gray-600  border border-green-600  transition-colors duration-100">
									2
								</button>
								<button class="w-[30px] h-[30px] leading-[30px] text-[15px] rounded-md text-center bg-green-600 text-white hover:bg-white hover:text-gray-600  border border-green-600  transition-colors duration-100">
									3
								</button>
								<button class="w-[30px] h-[30px] leading-[30px] text-[15px] rounded-md text-center bg-green-600 text-white hover:bg-white hover:text-gray-600  border border-green-600  transition-colors duration-100">
									<svg width="15" height="15" viewBox="0 0 32 32" className="m-auto">
										<path
											fill="currentColor"
											d="M21.188 9.281L19.78 10.72L24.063 15H4v2h20.063l-4.282 4.281l1.407 1.438L27.905 16z"
										></path>
									</svg>
								</button>
							</div>
						</div>


						<div className="overflow-hidden flex flex-col gap-4">

							<div className="rounded-lg shadow-lg border border-gray-300 bg-white p-4 flex gap-4 items-start justify-between">
								<img
									src="https://picsum.photos/200/200?random=1"
									className=" h-[100px] object-contain rounded-md border border-solid shadow-md"
									alt="news"
								/>

								<div className="flex-grow flex flex-col gap-2">
									<a href="/">
										<h5 className=" text-xl leading-[33px] text-black font-medium">
											Lorem ipsum dolor sit amet.
										</h5>
									</a>

									<div className="text-base text-justify leading-6 text-secondary">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatum?</p>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis laboriosam ipsum, doloribus sint voluptatibus numquam tempora excepturi nisi cum recusandae ipsa asperiores dicta illum debitis quae deserunt dolorem ullam?</p>
									</div>
									<div className="flex gap-4">
										<Link
											to="/posts/details" // Assuming you have a route for displaying details
											state={{
												item: {
													heading: "Lorem ipsum dolor sit amet.",
													newsInput: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis laboriosam ipsum, doloribus sint voluptatibus numquam tempora excepturi nisi cum recusandae ipsa asperiores dicta illum debitis quae deserunt dolorem ullam?",
													imageUrl: "https://picsum.photos/200/200?random=1",
													// Include any other relevant data for the news item
												}
											}}
											className="underline text-green-600 hover:text-green-800 font-bold transition-colors duration-200"
										>
											View Details
										</Link>
										<a
											href="/"
											className="underline text-green-600 hover:text-green-800 font-bold transition-colors duration-200"
										>
											Add Bookmark
										</a>
									</div>

									<div className='flex flex-row mb-5'>
										<BiLike className="mr-2" />
										<IoShareSocial className="mr-2" />
										{/* Button to open comment popup */}
										<button onClick={handleCommentClick} className="mr-2" >Comment</button>
										<RiStarSLine /> <RiStarSLine /> <RiStarSLine />
									</div>

								</div>
							</div>

							<div className="rounded-lg shadow-lg border border-gray-300 bg-white p-4 flex gap-4 items-start justify-between">
								<img
									src="https://picsum.photos/200/200?random=2"
									className=" h-[100px] object-contain rounded-md border border-solid shadow-md"
									alt="news"
								/>

								<div className="flex-grow flex flex-col gap-2">
									<a href="/">
										<h5 className=" text-xl leading-[33px] text-black font-medium">
											Lorem ipsum dolor sit amet.
										</h5>
									</a>

									<div className="text-base text-justify leading-6 text-secondary">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatum?</p>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis laboriosam ipsum, doloribus sint voluptatibus numquam tempora excepturi nisi cum recusandae ipsa asperiores dicta illum debitis quae deserunt dolorem ullam?</p>
									</div>
									<div className="flex gap-4">
										<Link
											to="/posts/details" // Assuming you have a route for displaying details
											state={{
												item: {
													heading: "Lorem ipsum dolor sit amet.",
													newsInput: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis laboriosam ipsum, doloribus sint voluptatibus numquam tempora excepturi nisi cum recusandae ipsa asperiores dicta illum debitis quae deserunt dolorem ullam?",
													imageUrl: "https://picsum.photos/200/200?random=2",
													// Include any other relevant data for the news item
												}
											}}
											className="underline text-green-600 hover:text-green-800 font-bold transition-colors duration-200"
										>
											View Details
										</Link>
										<a
											href="/"
											className="underline text-green-600 hover:text-green-800 font-bold transition-colors duration-200"
										>
											Add Bookmark
										</a>
									</div>


									<div className='flex flex-row mb-5'>
										<BiLike className="mr-2" />
										<IoShareSocial className="mr-2" />
										{/* Button to open comment popup */}
										<button onClick={handleCommentClick} className="mr-2" >Comment</button>
										<RiStarSLine /> <RiStarSLine /> <RiStarSLine />  <RiStarSLine />  <RiStarSLine />
									</div>

								</div>
							</div>

							<div className="rounded-lg shadow-lg border border-gray-300 bg-white p-4 flex gap-4 items-start justify-between">
								<img
									src="https://picsum.photos/200/200?random=3"
									className=" h-[100px] object-contain rounded-md border border-solid shadow-md"
									alt="news"
								/>

								<div className="flex-grow flex flex-col gap-2">
									<a href="/">
										<h5 className=" text-xl leading-[33px] text-black font-medium">
											Lorem ipsum dolor sit amet.
										</h5>
									</a>

									<div className="text-base text-justify leading-6 text-secondary">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatum?</p>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis laboriosam ipsum, doloribus sint voluptatibus numquam tempora excepturi nisi cum recusandae ipsa asperiores dicta illum debitis quae deserunt dolorem ullam?</p>
									</div>
									<div className="flex gap-4">
										<Link
											to="/posts/details" // Assuming you have a route for displaying details
											state={{
												item: {
													heading: "Lorem ipsum dolor sit amet.",
													newsInput: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis laboriosam ipsum, doloribus sint voluptatibus numquam tempora excepturi nisi cum recusandae ipsa asperiores dicta illum debitis quae deserunt dolorem ullam?",
													imageUrl: "https://picsum.photos/200/200?random=3",
													// Include any other relevant data for the news item
												}
											}}
											className="underline text-green-600 hover:text-green-800 font-bold transition-colors duration-200"
										>
											View Details
										</Link>
										<a
											href="/"
											className="underline text-green-600 hover:text-green-800 font-bold transition-colors duration-200"
										>
											Add Bookmark
										</a>
									</div>


									<div className='flex flex-row mb-5'>
										<BiLike className="mr-2" />
										<IoShareSocial className="mr-2" />
										{/* Button to open comment popup */}
										<button onClick={handleCommentClick} className="mr-2" >Comment</button>
										<RiStarSLine /> <RiStarSLine />
									</div>
								</div>
							</div>

							{
								newsItems.map((item, index) => (
									<div className="rounded-lg shadow-lg border border-gray-300 bg-white p-4 flex gap-4 items-start justify-between">
										<img
											src={item.imageUrl}
											className=" h-[100px] object-contain rounded-md border border-solid shadow-md"
											alt="news"
										/>
										<div className="flex-grow flex flex-col gap-2">
											<a href="/">
												<h5 className=" text-xl leading-[33px] text-black font-medium">
													{item.heading}
												</h5>
											</a>

											<div className="text-base text-justify leading-6 text-secondary">
												<p>{item.newsInput}</p>
											</div>
											<div className="flex gap-4">
												<Link
													to={`/posts/details`}
													state={{ item }}
													className="underline text-green-600 hover:text-green-800 font-bold transition-colors duration-200"
												>
													View Details
												</Link>
												<a
													href="/"
													className="underline text-green-600 hover:text-green-800 font-bold transition-colors duration-200"
												>
													Add Bookmark
												</a>
											</div>


											<div className='flex flex-row mb-5'>
												{item.nbLike}
												<BiLike className="mr-2" />
												<IoShareSocial className="mr-2" />
												{/* Button to open comment popup */}
												<button onClick={() => handleCommentClick(item.id)} className="mr-2">Comment</button>
												<RiStarSLine /> <RiStarSLine /><RiStarSLine /> <RiStarSLine /><RiStarSLine />
											</div>
										</div>
									</div>
								))
							}
						</div>
						<div>



							{isLoggedIn ? (
								isCommentPopupVisible && (
									<CommentPopup
										postId={selectedPostId}
										onClose={() => setCommentPopupVisibility(false)}
										onSubmit={() => {
											setCommentPopupVisibility(false);
										}}
									/>
								)
							) : (
								// Render an alert or a user-friendly message if the user is not logged in
								<div className="p-4 bg-gray-200 rounded-md">
									<p className="text-center text-lg text-gray-700">
										Please log in to comment on the post.
									</p>
								</div>
							)}

							<button onClick={handleAddNewsClick} className="bg-green-600 text-white p-2 rounded-md hover:bg-white hover:text-gray-600 border border-green-600 transition-colors duration-100">
								Add News
							</button>
							{isLoggedIn ? (
								isFormVisible && (
									<FormForRegional
										onFormSubmit={handleFormSubmit}
										onCloseForm={handleCloseForm}
									/>
								)
							) : (
								<>
									{showLoginPopup && <Login onClose={() => setShowLoginPopup(false)} />}
									{/* You can replace the alert with a more user-friendly login prompt */}
									{!showLoginPopup && <div className="p-4 bg-gray-200 rounded-md">
										<p className="text-center text-lg text-gray-700">
											Please log in to add news.
										</p>
									</div>}
								</>
							)}



						</div>
					</div>

				</div>
			</section >
		</>
	);
};

export default ImpactSection;
