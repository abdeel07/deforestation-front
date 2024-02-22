import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import AboutSection from "./components/AboutSection";
import RegionalSection from "./components/RegionalSection";
import SolutionsSection from "./components/SolutionsSection";
import Footer from "./components/Footer";
import CommentApi from "./components/CommentApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <NewsSection />
                  <AboutSection />
                  <RegionalSection />
                  <SolutionsSection />
                  <CommentApi />
                </>
              }
            />
            <Route path="/posts/:postId" element={<PostDetails />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
