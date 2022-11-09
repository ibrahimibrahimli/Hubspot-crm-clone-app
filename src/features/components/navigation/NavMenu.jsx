import React, { useState, useEffect } from "react";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgArrowLongRight } from "react-icons/cg";
import logo_long from "../../../assets/img/logo_Long.svg";
import logo_short from "../../../assets/img/logo_Short.svg";
import marketing from "../../../assets/img/marketingHub.svg";
import sales from "../../../assets/img/salesHub.svg";
import services from "../../../assets/img/serviceHub.svg";
import cms from "../../../assets/img/cmsHub.svg";
import operations from "../../../assets/img/operationsHub.svg";
import education from "../../../assets/img/education.svg";
import message from "../../../assets/img/message.svg";
import service from "../../../assets/img/service.svg";
import users from "../../../assets/img/users.svg";

const NavMenu = () => {
  const [scrool, setScrool] = useState(false);
  const [visibleSoft, setVisibleSoft] = useState(false);
  const [visibleSources, setVisibleSources] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handle_scrool_controller);
  }, []);

  const handle_scrool_controller = () => {
    const scroolTop = window.scrollY;
    if (scroolTop > 54) {
      setScrool(true);
    } else {
      setScrool(false);
    }
  };

  const visible_software = () => {
    setTimeout(() => {
      setVisibleSoft(true);
    }, 500);
  };
  const unVisible_software = () => {
    setTimeout(() => {
      setVisibleSoft(false);
    }, 1500);
  };

  const visible_sources = () => {
    setTimeout(() => {
      setVisibleSources(true);
    }, 500);
  };

  const unVisible_sources = () => {
    setTimeout(() => {
      setVisibleSources(false);
    }, 1500);
  };

  return (
    <>
      <div className={`${styles.nav_menu}`}>
        <div>
          <div
            className={scrool ? `${styles.logo_short}` : `${styles.logo_long}`}
             >
              <Link to={"/"}>
                <img src={scrool ? `${logo_short}` : `${logo_long}`} alt="" />
              </Link>
            
          </div>
          <div
            className={
              scrool ? `${styles.nav_menu_long}` : `${styles.nav_menu_short}`
            }
            >
            <ul>
              <li
                className={
                  visibleSoft
                    ? `${styles.visible_soft}`
                    : `${styles.unVisible_soft}`
                }
                onMouseEnter={visible_software}
                onMouseLeave={unVisible_software}
              >
                <Link to={""}>Software</Link>
                <RiArrowDropDownLine />
                <span></span>
                <div className={`${styles.softwareMoreMenu}`}>
                  <h3>The HubSpot CRM Platform</h3>
                  <p>
                    All of HubSpot’s marketing, sales CRM, customer service,
                    CMS, and operations software on one platform.
                  </p>
                  <div className={`${styles.moreMenuButtons}`}>
                    <Link to={""}>
                      <div>
                        <p>Free HubSpot CRM</p>
                        <CgArrowLongRight />
                      </div>
                    </Link>
                    <Link to={""}>
                      <div>
                        <p>Overview of all products</p>
                        <CgArrowLongRight />
                      </div>
                    </Link>
                  </div>
                  <div className={`${styles.marketingHub}`}>
                    <Link to={""}>
                      <div>
                        <img src={marketing} alt="" />
                      </div>
                      <div>
                        <h4>Marketing Hub</h4>
                        <p>
                          Marketing automation software.
                          <span>
                            {" "}
                            Free and premium plans
                            <CgArrowLongRight />
                          </span>
                        </p>
                      </div>
                    </Link>
                    <Link to={""}>
                      <div>
                        <img src={sales} alt="" />
                      </div>
                      <div>
                        <h4>Sales Hub</h4>
                        <p>
                          Sales CRM software.
                          <span>
                            {" "}
                            Free and premium plans
                            <CgArrowLongRight />
                          </span>
                        </p>
                      </div>
                    </Link>
                    <Link to={""}>
                      <div>
                        <img src={services} alt="" />
                      </div>
                      <div>
                        <h4>Service Hub</h4>
                        <p>
                          Customer service software.
                          <span>
                            {" "}
                            Free and premium plans
                            <CgArrowLongRight />
                          </span>
                        </p>
                      </div>
                    </Link>
                    <Link to={""}>
                      <div>
                        <img src={cms} alt="" />
                      </div>
                      <div>
                        <h4>CMS Hub</h4>
                        <p>
                          Content management software.
                          <span>
                            {" "}
                            Free and premium plans
                            <CgArrowLongRight />
                          </span>
                        </p>
                      </div>
                    </Link>
                    <Link to={""}>
                      <div>
                        <img src={operations} alt="" />
                      </div>
                      <div>
                        <h4>Operations Hub</h4>
                        <p>
                          Operations software.
                          <span>
                            Free and premium plans
                            <CgArrowLongRight />
                          </span>
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to={""}>
                      <h3>App Marketplace</h3>
                      <p>
                        Connect your favorite apps to HubSpot.
                        <span>
                          {" "}
                          See all integrations
                          <CgArrowLongRight />
                        </span>
                      </p>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to={""}>Pricing</Link>
              </li>
              <li
                className={
                  visibleSources
                    ? `${styles.visibleSources}`
                    : `${styles.unVisibleSources}`
                }
                onMouseEnter={visible_sources}
                onMouseLeave={unVisible_sources}
              >
                <Link to={""}>Resources</Link>
                <RiArrowDropDownLine />
                <span></span>
                <div className={`${styles.sourceMenu}`}>
                  <div>
                    <div>
                      <div>
                        <img src={education} alt="" />
                      </div>
                      <div>
                        <h3>Education</h3>
                        <p>
                          <Link to={""}>Blog</Link>
                        </p>
                        <p>
                          <Link to={""}>Ebooks, Guides & More</Link>
                        </p>
                        <p>
                          <Link to={""}>Free Courses & Certifications</Link>
                        </p>
                        <p>
                          <Link to={""}>Inbound Methodology</Link>
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={message} alt="" />
                      </div>
                      <div>
                        <h3>Why HubSpot ?</h3>
                        <p>
                          <Link to={""}>Case Studies</Link>
                        </p>
                        <p>
                          <Link to={""}>Why Choose HubSpot?</Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <img src={service} alt="" />
                      </div>
                      <div>
                        <h3>Services</h3>
                        <p>
                          <Link to={""}>Onboarding & Consulting Services</Link>
                        </p>
                        <p>
                          <Link to={""}>Hire a Service Provider</Link>
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <img src={users} alt="" />
                      </div>
                      <div>
                        <h3>User Resources</h3>
                        <p>
                          <Link to={""}>Partner Programs</Link>
                        </p>
                        <p>
                          <Link to={""}>Developer Tools</Link>
                        </p>
                        <p>
                          <Link to={""}>Community</Link>
                        </p>
                        <p>
                          <Link to={""}>HubSpot Ecosystem</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={"crm-platform-demo"}>Get a demo</Link>
              </li>
              <li>
                <Link to={"signup-hubspot"}>Get started free</Link>
              </li>   
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
