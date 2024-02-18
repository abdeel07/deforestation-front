// src/components/Header.js
import React, { useState, useEffect } from "react";
import logoImage from "../assets/images/logo/logo.png"; // Import your logo image
import Login from './Login';
import SignUp from './SignUp';
const Header = () => {
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

	return (
		<header
			className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"
				}`}
		>
			<div className="container mx-auto flex justify-between items-center p-1">
				<img
					src={logoImage}
					alt="Logo"
					className=" h-10 sm:h-14	w-auto"
				/>
				{/* Logo image */}
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
						<li>
							<a
								href="#login"
								className={`
      ${isScrolled
										? "bg-green-600 text-white hover:bg-white hover:text-gray-600 border border-green-600"
										: "bg-white text-green-800 hover:bg-green-600 hover:text-white"
									}
      font-bold py-1 px-4 rounded-md transition-colors duration-200
    `}
								onClick={() => setShowLoginPopup(true)}
							>
								Login
							</a>
						</li>

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
