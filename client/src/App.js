import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Offers from "./Components/Offers/Offers";
import Popular from "./Components/Popular/Popular";

const App = () => {
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
