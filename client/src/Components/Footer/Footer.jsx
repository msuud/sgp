import React from "react";
import "./footer.css";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Oasis Bliss
              </h1>
            </a>
          </div>

          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="Information">
            <b>Oasis Bliss Resort</b> , 123 Serenity Lane Tranquility City,
            Blissful State Zip Code: 97856
          </span>
          <br />
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Resort & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+1 6353 22 8601</span>
          <span className="email">
            <a href="mailto:oasisbliss@gmail.com">oasisbliss@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
