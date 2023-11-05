import React from "react";
import "./popular.css";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

import img1 from "../../Assets/Room1.jpg";
import img2 from "../../Assets/Room2.jpg";
import img3 from "../../Assets/VintageSuite.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "ROYAL SUITE",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "COZY ROOM",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "VINTAGE SUITE",
  },
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Rooms & Suites</h2>
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle }) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Image Title" />

                  <div className="overlayInfo">
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>

                  <div className="destText flex">
                    <h5>{destTitle}</h5>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Oasis Bliss
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
