import React, { useState } from "react";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";
import { RiGlobeFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

const Navi = () => {
  const [width, setWidth] = useState([0, false]);
  const [langVisible, setLangVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  const setInputWidth = () => {
    if (width[1]) {
      setWidth([1, true]);
      if (width[0] === 1) {
        setWidth([0, false]);
      }
    } else {
      setWidth([0, true]);
    }
  };

  const handleLanguageVisible = () => {
    setTimeout(() => {
      setLangVisible(true);
     }, 500);
  };

  const handleLanguageUnvisible = () => {
    setTimeout(() => {
      setLangVisible(false);
    }, 1500);
  };

  const handleAboutVisible = () => {
    setTimeout(() => {
     setAboutVisible(true);
    }, 500);
    
  };

  const handleAboutUnvisible = () => {
    setTimeout(() => {
      setAboutVisible(false);
    }, 1500);
  };
  return (
    <>
      <div className={`${styles.nav_bar}`}>
        <div>
          <ul>
            <li className={`${styles.nav_group}`}>
              <div
                className={
                  langVisible
                    ? `${styles.langVisible}`
                    : `${styles.langUnvisible}`
                }
                onMouseEnter={handleLanguageVisible}
                onMouseLeave={handleLanguageUnvisible}
              >
                <RiGlobeFill />
                <p>English</p>
                <RiArrowDropDownLine />
                <span></span>
                <div>
                  <ul>
                    <li>
                      <a href="#">日本語</a>
                    </li>
                    <li>
                      <a href="#">Deutsch</a>
                    </li>
                    <li>
                      <a href="#">English</a>
                    </li>
                    <li>
                      <a href="#">Espanol</a>
                    </li>
                    <li>
                      <a href="#">Portugues</a>
                    </li>
                    <li>
                      <a href="#">Français</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={`${styles.nav_group}`}>
              <div>
                <IoIosContact />
                <p> Contact Sales</p>
              </div>
            </li>
          </ul>

          <ul>
            <li
              className={
                width[1] === true ? `${styles.longWith}` : `${styles.shortWith}`
              }
              onClick={setInputWidth}
            >
              <AiOutlineSearch />
              <input
                name="search"
                type="search"
                id="search"
                placeholder="Search..."
              />
            </li>
            <li>
              <Link to={"/login"}>Log in</Link>
            </li>
            <li>
              <Link>Customer Support</Link>
            </li>
            <li
              onMouseEnter={handleAboutVisible}
              onMouseLeave={handleAboutUnvisible}
              className={
                aboutVisible
                  ? `${styles.aboutVisible}`
                  : `${styles.aboutUnvisible}`
              }
            >
              <div>
                <button>
                  <span>About</span>
                  <RiArrowDropDownLine />
                </button>
              </div>
              <span></span>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Managment Team</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navi;
