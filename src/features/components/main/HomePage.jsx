import React from "react";
import styles from "./main.module.css";
import { Link } from "react-router-dom";
import {BsCheckCircleFill} from 'react-icons/bs'
import {RiTrademarkFill} from 'react-icons/ri'
import {BiRegistered} from 'react-icons/bi'
import {GoPlus} from 'react-icons/go'
import homeBrandHero from "../../../assets/img/home_hero_branding.webp";
import marketing from "../../../assets/img/marketingHub.svg";
import sales from "../../../assets/img/salesHub.svg";
import services from "../../../assets/img/serviceHub.svg";
import cms from "../../../assets/img/cmsHub.svg";
import operations from "../../../assets/img/operationsHub.svg";

import usergroup from "../../../assets/img/usergroup.svg";
import monthly from "../../../assets/img/monthly.svg";
import certified from "../../../assets/img/certified.svg";
import registered from "../../../assets/img/registered.svg";
import integrations from "../../../assets/img/integrations.webp";
import languages from "../../../assets/img/languages.svg";
import social from "../../../assets/img/social.svg";
import customers from "../../../assets/img/customers.svg";

import wwf from "../../../assets/img/wwf.webp";
import trello from "../../../assets/img/trello.webp";
import reddit from "../../../assets/img/reddit.webp";
import ww from "../../../assets/img/ww.webp";
import soundcloud from "../../../assets/img/soundcloud.webp";
import momentive from "../../../assets/img/momentive.webp";
import doordash from "../../../assets/img/doordash.webp";
import eventbrite from "../../../assets/img/eventbrite.webp";

import happyCustomers from "../../../assets/img/happyCustomer.webp"


const HomePage = () => {
  return (
    <>

    {/* HOME BRAND SECTION */}
      <div className={`${styles.home_brand_section}`}>
        <div>
          <div>
            <div className={`${styles.homePage_left}`}>
              <p>HUBSPOT CRM PLATFORM</p>
              <h1>
                Powerful, <br /> not overpowering
              </h1>
              <p>
                Finally, a CRM platform that’s both powerful and easy to use.
                Create delightful customer experiences. Have a delightful time
                doing it.
              </p>
              <div>
                <Link to={""}>Get a demo</Link>
                <Link to={""}> Get started free</Link>
              </div>
              <p>
                Get started with free tools, or get <br /> more with our premium
                software.
              </p>
            </div>

            <div className={`${styles.homePage_right}`}>
              <div>
                <img src={homeBrandHero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HOME PRODUCT SECTION */}
      <div className={`${styles.home_product_section}`}>
        <div className={`${styles.homeProduct_top}`}>
          <h2>The CRM Platform Your Whole Business Will Love</h2>
          <p>
            HubSpot’s CRM platform has all the tools and integrations you need
            for marketing, sales, content management, and customer service. Each
            product in the platform is powerful alone, but the real magic
            happens when you use them together.
          </p>
          <div>
            <Link to={""}>Get free CRM</Link>
            <Link to={"/crm-platform-demo"}>Demo premium CRM</Link>
          </div>
        </div>
        <div className={`${styles.homeProduct_bottom}`}>
            <div className={`${styles.homeProduct_card}`}>
              <div>
                <img src={marketing} alt="" />
                <h3>Marketing Hub <RiTrademarkFill/></h3>
              </div>
              <div>
                <p>Marketing software to help you grow traffic,
                   convert more visitors, and run complete
                    inbound marketing campaigns at scale.</p>
                <div>
                  <p>Popular Features</p>
                  <div>
                    <ul>
                      <li><BsCheckCircleFill/>Lead generation</li>
                      <li><BsCheckCircleFill/>Marketing automation</li>
                      <li><BsCheckCircleFill/>Analytics</li>
                    </ul>
                  </div>
                  <div>
                    <Link>Get Started</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.homeProduct_card}`}>
              <div>
                <img src={sales} alt="" />
                <h3>Sales Hub <BiRegistered/></h3>
              </div>
              <div>
                <p>Sales CRM software to help you get deeper
                   insights into prospects, automate the tasks
                    you hate, and close more deals faster.</p>
                <div>
                  <p>Popular Features</p>
                  <div>
                    <ul>
                      <li><BsCheckCircleFill/>Advanced CRM</li>
                      <li><BsCheckCircleFill/>Meeting scheduling</li>
                      <li><BsCheckCircleFill/>Payments</li>
                    </ul>
                  </div>
                  <div>
                    <Link>Get Started</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.homeProduct_card}`}>
              <div>
                <img src={services} alt="" />
                <h3>Service Hub <RiTrademarkFill/></h3>
              </div>
              <div>
                <p>Customer service software to help you connect 
                  with customers, exceed expectations, and turn
                   them into promoters who grow your business.</p>
                <div>
                  <p>Popular Features</p>
                  <div>
                    <ul>
                      <li><BsCheckCircleFill/>Tickets</li>
                      <li><BsCheckCircleFill/>Customer feedback</li>
                      <li><BsCheckCircleFill/>Knowledge base</li>
                    </ul>
                  </div>
                  <div>
                    <Link>Get Started</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.homeProduct_card}`}>
              <div>
                <img src={cms} alt="" />
                <h3>CMS Hub<BiRegistered/></h3>
              </div>
              <div>
                <p>Content management software that’s flexible
                   for marketers, powerful for developers, and
                    gives customers a personalized, secure experience.</p>
                <div>
                  <p>Popular Features</p>
                  <div>
                    <ul>
                      <li><BsCheckCircleFill/>Drag-and-drop editor</li>
                      <li><BsCheckCircleFill/>SEO recommendations</li>
                      <li><BsCheckCircleFill/>Website themes</li>
                    </ul>
                  </div>
                  <div>
                    <Link>Get Started</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.homeProduct_card}`}>
              <div>
                <img src={operations} alt="" />
                <h3>Operations Hub<BiRegistered/></h3>
              </div>
              <div>
                <p>Operations software that syncs your apps,
                   cleans and curates customer data, and automates processes
                    — so all your systems and teams work better together.</p>
                <div>
                  <p>Popular Features</p>
                  <div>
                    <ul>
                      <li><BsCheckCircleFill/>Data sync</li>
                      <li><BsCheckCircleFill/>Programmable automation</li>
                      <li><BsCheckCircleFill/>Data quality automation</li>
                    </ul>
                  </div>
                  <div>
                    <Link>Get Started</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* HOME COMMUNITY BAR SECTION */}
      <div className={`${styles.home_community_section}`}>
        <div className={`${styles.homeCommunityTop}`}>
          <div>
            <h2>Learn and grow with award-winning support and a thriving community behind you.</h2>
            <p>You don't have to go it alone. Master the inbound
               methodology and get the most out of your tools with
               HubSpot's legendary customer support team and a
               community of thousands of marketing and sales pros just like you.</p>
          </div>
        </div>
        <div className={`${styles.homeCommunityBottom}`}>
          <div>
            <div className={`${styles.homeCommunityBoard} ${styles.borderBottomRight}`}>
              <div>
                <img src={usergroup} alt="" />
              </div>
              <div>
                <p>150 <GoPlus/></p>
                <p>HubSpot user groups</p>
              </div>
            </div>
            <div className={`${styles.homeCommunityBoard} ${styles.borderBottomRight}`}>
              <div>
                <img src={monthly} alt="" />
              </div>
              <div>
                <p>7M <GoPlus/></p>
                <p>monthly visits</p>
              </div>
            </div>
            <div className={`${styles.homeCommunityBoard}  ${styles.borderBottomRight}`}>
              <div>
                <img src={certified} alt="" />
              </div>
              <div>
                <p>453K <GoPlus/></p>
                <p>certified professionals</p>
              </div>
            </div>
            <div className={`${styles.homeCommunityBoard} ${styles.borderBottom}`}>
              <div>
                <img src={registered} alt="" />
              </div>
              <div>
                <p>70K</p>
                <p>registered attendees</p>
              </div>
            </div>
            <div className={`${styles.homeCommunityBoard} ${styles.borderRight}`}>
              <div>
                <img src={integrations} alt="" />
              </div>
              <div>
                <p>1,160 <GoPlus/></p>
                <p>integrations</p>
              </div>
            </div>
            <div className={`${styles.homeCommunityBoard} ${styles.borderRight}`}>
              <div>
                <img src={languages} alt="" />
              </div>
              <div>
                <p>6</p>
                <p>languages</p>
              </div>
            </div>
            <div className={`${styles.homeCommunityBoard} ${styles.borderRight}`}>
              <div>
                <img src={social} alt="" />
              </div>
              <div>
                <p>3.1M <GoPlus/></p>
                <p>social followers</p>
              </div>
            </div>
            <div className={`${styles.homeCommunityBoard}`}>
              <div>
                <img src={customers} alt="" />
              </div>
              <div>
                <p>150,000 <GoPlus/></p>
                <p>customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CUSTOMERS SECTION */}
      <div className={`${styles.homeCustomers}`}>
        <div>
          <div className={`${styles.home_customers_left}`}>
            <h2>150,000+</h2>
            <p>customers in over <strong>120</strong>  countries growing their businesses with HubSpot</p>
          </div>
          <div className={`${styles.home_customers_right}`}>
            <div className={`${styles.customers_brands}`}>
              <img src={wwf} alt="" />
            </div>
            <div className={`${styles.customers_brands}`}>
              <img src={trello} alt="" />
            </div>
            <div className={`${styles.customers_brands}`}>
              <img src={reddit} alt="" />
            </div>
            <div className={`${styles.customers_brands}`}>
              <img src={ww} alt="" />
            </div>
            <div className={`${styles.customers_brands}`}>
              <img src={soundcloud} alt="" />
            </div>
            <div className={`${styles.customers_brands}`}>
              <img src={momentive} alt="" />
            </div>
            <div className={`${styles.customers_brands}`}>
              <img src={doordash} alt="" />
            </div>
            <div className={`${styles.customers_brands}`}>
              <img src={eventbrite} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* HOME MODULE SECTION */}
      <div className={`${styles.home_module_section}`}>
        <div>
          <div className={`${styles.home_module_left}`}>
            <h2>Start Growing With HubSpot Today</h2>
            <p>With tools to make every part of your process more
               human and a support team excited to help you,
                getting started with inbound has never been easier.</p>
                <div>
                  <Link to={""}>Get a demo</Link>
                  <Link to={""}>Get started free</Link>
                </div>
                <span>Get started with free tools, or get more with our premium software.</span>
          </div>
          <div className={`${styles.home_module_right}`}>
            <img src={happyCustomers} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
