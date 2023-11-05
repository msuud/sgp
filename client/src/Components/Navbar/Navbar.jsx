import React, { useState } from "react";
import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const loginPageUrl = "https://msuud.github.io/login-page-host/login.html";
  const packageUrl =
    "https://msuud.github.io/package-host/Package/package.html";

  const signUpUrl = "https://msuud.github.io/signup-host/signup.html";

  //Code to toggle/show navbar
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //Code to remove navBar
  const removeNav = () => {
    setActive("navBar");
  };

  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              OasisBliss
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href={packageUrl} target="_blank" className="navLink">
                Package
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a
                  href={loginPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Login
                </a>
              </button>
              <button className="btn loginBtn">
                <a href={signUpUrl} target="_blank" rel="noopener noreferrer">
                  Sign Up
                </a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
