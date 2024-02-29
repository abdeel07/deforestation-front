// src/components/Header.js
import React, { useState, useEffect } from "react";
// import logoImage from "../assets/images/logo/logo.png"; // Import your logo image
import Login from './Login';
import SignUp from './SignUp';
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const Header = () => {
	const { isLoggedIn, logout, userId } = useAuth();

	const [isScrolled, setIsScrolled] = useState(false);
	const [showLoginPopup, setShowLoginPopup] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			setIsScrolled(offset > window.innerHeight); // Adjust this value as needed
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleLogout = async () => {
		if (userId) { // Ensure there's a userId before attempting to logout
			try {
				const response = await axios.post(`http://localhost:8080/api/users/logout/${userId}`);
				if (response.status === 200) {
					logout(); // Update the AuthContext
					alert("Logout successful");
					// Perform additional actions as needed
				} else {
					console.error("Logout failed:", response.data);
				}
			} catch (error) {
				console.error("Logout error:", error.response ? error.response.data : error.message);
			}
		}
	};

	return (
		<header
			className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out bg-white shadow-lg}`}
			style={{
				backgroundColor: "white",
				boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
				padding: "1rem",
			}}
		>
			<div className="container mx-auto flex justify-between items-center p-1">
				{/* <img
					src={logoImage}
					alt="Logo"
					className=" h-10 sm:h-14	w-auto"
				/> */}
				{/* Logo image */}
				<div></div>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<a
								href="#about"
								className={`${isScrolled
									? "bg-green-600 text-white hover:bg-white hover:text-gray-600  border border-green-600"
									: "bg-white text-green-800 hover:bg-green-600 hover:text-white"
									}  font-bold py-1 px-4 rounded-md transition-colors duration-200`}
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#impact"
								className={`${isScrolled
									? "bg-green-600 text-white hover:bg-white hover:text-gray-600  border border-green-600"
									: "bg-white text-green-800 hover:bg-green-600 hover:text-white"
									}  font-bold py-1 px-4 rounded-md transition-colors duration-200`}
							>
								Impact
							</a>
						</li>
						<li>
							<a
								href="#solutions"
								className={`${isScrolled
									? "bg-green-600 text-white hover:bg-white hover:text-gray-600  border border-green-600"
									: "bg-white text-green-800 hover:bg-green-600 hover:text-white"
									}  font-bold py-1 px-4 rounded-md transition-colors duration-200`}
							>
								Solutions
							</a>
						</li>
						{!isLoggedIn ? (
							<li>
								<a
									href="#login"
									className="bg-green-600 text-white py-1 px-4 rounded-md hover:bg-white hover:text-gray-600 border border-green-600 transition-colors duration-200 font-bold"
									onClick={() => setShowLoginPopup(true)}
								>
									Login
								</a>
							</li>
						) : (
							<li>
								<button
									onClick={handleLogout}
									className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-white hover:text-red-600 border border-red-600 transition-colors duration-200 font-bold"
								>
									Logout
								</button>
							</li>
						)}

						<li>
							<a
								href="#signup"
								className={`${isScrolled
									? "bg-green-600 text-white hover:bg-white hover:text-gray-600  border border-green-600"
									: "bg-white text-green-800 hover:bg-green-600 hover:text-white"
									}  font-bold py-1 px-4 rounded-md transition-colors duration-200`}
								onClick={() => setShowSignUp(true)}
							>
								Register
							</a>
						</li>

					</ul>
				</nav>
				{showLoginPopup && <Login onClose={() => setShowLoginPopup(false)} />}
				{showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}

			</div>
		</header>
	);
};

export default Header;
