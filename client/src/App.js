import React, { useState } from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Popular from "./Components/Popular/Popular";

import { Link, Element } from "react-scroll";

const App = () => {
  const [budget, setBudget] = useState(null);
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Footer />
    </>
  );
};

export default App;
