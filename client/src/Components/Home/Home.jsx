import React from "react";
import "./home.css";

const Home = () => {
  const aboutUrl = "https://msuud.github.io/about-host/About/about.html";
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Oasis Bliss Retreat</h1>
          <p className="subTitle">
            "Discover Tranquility, Embrace Bliss: Your Oasis Awaits!"
          </p>

          <button className="btn">
            <a href={aboutUrl} target="_blank">
              Explore Now
            </a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="CheckinDiv">
            <label htmlFor="checkin">Check In Date</label>
            <input type="date" placeholder="Check in Date" />
          </div>

          <div className="CheckOutDiv">
            <label htmlFor="checkout">Check Out Date</label>
            <input type="date" placeholder="Check out Date" />
          </div>

          <div className="personDiv">
            <label htmlFor="person">No. of Person</label>
            <input type="text" placeholder="No. of person" />
          </div>

          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
