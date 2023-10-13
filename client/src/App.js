import React, { useState } from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Offers from "./Components/Offers/Offers";
import Popular from "./Components/Popular/Popular";
import RecommendationForm from "./RecommendationForm";
import RecommendationResult from "./RecommendationResult";

import { Link, Element } from "react-scroll";

const App = () => {
  const [budget, setBudget] = useState(null);
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Footer />
      <div className="App">
        <h1>Resort Recommendation</h1>
        <RecommendationForm setBudget={setBudget} />
        {budget && <RecommendationResult budget={budget} />}
      </div>
    </>
  );
};

export default App;
