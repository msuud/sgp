import React from "react";
import "./pack.css";

function RecommendationResult({ budget }) {
  let amenities = "";

  if (budget < 3000) {
    amenities = "Amenities: Dine-In Services";
  } else if (budget >= 3000 && budget <= 6000) {
    amenities =
      "Amenities: Dine-In Services, Gym Access, Pool Access, Fishing (Half-Day), Bird Watching, Beach Bonfire, Stargazing";
  } else {
    amenities =
      "Amenities: Spa and Massages, Exclusive Dining Experience, Outdoor Movie Night, Stargazing, Tennis";
  }

  return (
    <div id="recommendation" className="recommendation">
      <h2>
        Your Recommended Package : <br />
        <br />
      </h2>
      <p id="amenities">{amenities}</p>
    </div>
  );
}

export default RecommendationResult;
