import React from "react";
import Header from "./components/Header";
import NewsSection from "./components/NewsSection";
import RegionalSection from "./components/RegionalSection";
import CommentApi from "./components/CommentApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NewsSection />
                  <RegionalSection />
                  <CommentApi />
                </>
              }
            />
            <Route path="/posts/:postId" element={<PostDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
