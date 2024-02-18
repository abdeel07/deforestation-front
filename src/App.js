import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import AboutSection from "./components/AboutSection";
import RegionalSection from "./components/RegionalSection";
import SolutionsSection from "./components/SolutionsSection";
import Footer from "./components/Footer";
import CommentApi from "./components/CommentApi";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<HeroSection />
				<NewsSection />
				<AboutSection />
				<RegionalSection />
				<SolutionsSection />
				<CommentApi/>
				<Footer/>
			</main>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
