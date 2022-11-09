import React, { useState, useEffect } from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import hubspotWhiteLogo from '../../../assets/img/hubspotWhiteLogo.svg'
import {ImFacebook} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {SiTiktok} from 'react-icons/si';
import mediumIcon from '../../../assets/img/mediumicons.svg'

const popularFeatures =[
  {title:'Free Meeting Scheduler App', route:'schedule-meeting'},
  {title:'Social Media Tools', route:'social-inbox'},
  {title:'Email Tracking Software', route:'email-tracking'},
  {title:'Sales Email Automation', route:'sales-automation'},
  {title:'Ads Software', route:'ads'},
  {title:'Email Marketing Software', route:'email'},
  {title:'Lead Management Software', route:'lead-management'},
  {title:'Pipeline Management Tools', route:'pipeline-management'},
  {title:'Free Website Builder', route:'drag-and-drop-website-builder'},
  {title:'Sales Email Templates', route:'email-templates-sales'},
  {title:'Help Desk Software', route:'help-desk'},
  {title:'Free Online Form Builder', route:'forms'},
  {title:'Free Chatbot Builder', route:'chatbot-builder'},
  {title:'Free Live Chat Software', route:'live-chat'},
  {title:'Marketing Analytics', route:'analytics'},
  {title:'Free Landing Page Builder', route:'landing-pages'},
  {title:'Free Web Hosting', route:'web-hosting'},
]

const tools = [
  {title:'Website Grader', route:'https://website.grader.com/'},
  {title:'Make My Persona', route:'make-my-persona'},
  {title:'Email Signature Generator', route:'email-signature-generator'},
  {title:'Blog Ideas Generator', route:'blog-topic-generator'},
  {title:'Invoice Template Generator', route:'invoice-template-generator'},
  {title:'Marketing Plan Generator', route:'marketing-plan-template-generator'},
  {title:'Free Business Templates', route:'business-templates'},
  {title:'Industry Benchmark Data', route:'industry-data'},
  {title:'Software Comparisons', route:'comparisons'},
  {title:'Library', route:'comparisons'},
  {title:'Website Themes & Templates', route:'marketplace'},
]

const company = [
  {title:'About Us', route :'our-story'},
  {title:'Careers', route :'careers'},
  {title:'Management Team', route :'management'},
  {title:'Board of Directors', route :'board-of-directors'},
  {title:'Investor Relations', route :'https://ir.hubspot.com/'},
  {title:'Blog', route :'https://blog.hubspot.com/'},
  {title:'Contact Us', route :'contact'},
]

const partners = [
  {title:'All Partner Programs', route:'partners'},
  {title:'Solutions Partner Program', route:'solutions'},
  {title:'App Partner Program', route:'app'},
  {title:'HubSpot for Startups', route:'startups'},
  {title:'Affiliate Program', route:'affiliates'}
]

const Footer = () => {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className={`${styles.footer_layout}`}>
          <div className={`${styles.layout_left}`}>
            <h2>Popular Features</h2>
            <ul>
              {popularFeatures.map((obj,index) => {
                return (
                   <li key={index}>
                  <Link to={`${obj.route}`}>{obj.title}</Link>
                </li>
                )
              })}
            </ul>
          </div>
          <div className={`${styles.layout_right}`}>
            <div>
              <h2>Free Tools</h2>
              <ul>
                {
                  tools.map((obj, index)=>{
                    return (
                      <li key={index}><Link to={`${obj.route}`}>{obj.title}</Link></li>
                    )                
                  })
                }
              </ul>
            </div>
            <div>
              <h2>Company</h2>
              <ul>
                  {
                    company.map((obj, index)=>{
                      return(
                        <li key={index}><Link to={`${obj.route}`}>{obj.title}</Link></li>
                      )
                    })
                  }
              </ul>
            </div>
            <div>
              <section>
                <div>
                  <h2>Customers</h2>
                  <ul>
                    <li><Link to={"https://help.hubspot.com/"}>Customer Support</Link></li>
                    <li><Link to={"/hubspot-user-groups"}>Join a Local User Group</Link></li>
                  </ul>
                </div>
              </section>
              <section>
                <h2>Partners</h2>
                <ul>
                    {partners.map((obj, index)=>{
                      return(
                        <li key={index}><Link to={`${obj.route}`}>{obj.title}</Link></li>
                      )
                    })}
                </ul>
              </section>
            </div>
          </div>
        </div>
        <div className={`${styles.footer_contacts}`}>
          <div></div>
          <div>
            <ul>
              <li><Link to={""}><ImFacebook/></Link></li>
              <li><Link to={""}><BsInstagram/></Link></li>
              <li><Link to={""}><BsYoutube/></Link></li>
              <li><Link to={""}><BsTwitter/></Link></li>
              <li><Link to={""}><FaLinkedinIn/></Link></li>
              <li><Link to={""}>
                    <img src={mediumIcon} alt="" />
                </Link></li>
              <li><Link to={""}><SiTiktok/></Link></li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className={`${styles.footer_bottom}`}>
          <div>
            <Link to={"/"}>
            <img src={hubspotWhiteLogo} alt="" />
            </Link>
            <p>Copyright © 2022 HubSpot, Inc.</p>
          </div>
          <div>
            <ul>
              <li><Link to={"legal-stuff"}>Legal Stuff</Link></li>
              <li><Link to={"privacy-policy"}>Privacy Policy</Link></li>
              <li><Link to={"security"}>Security</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer