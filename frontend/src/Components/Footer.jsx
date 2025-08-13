import React from "react";
import { useEffect } from "react";
import "../Styles/Footer.css";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scale } from "framer-motion";
import logo from "../assets/blacklogo.png";
import { useNavigate } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);
function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="footers">
        <div className="footer-container-custom">
          <div className="circle-bg-footer"></div>

          <div className="top-footer">
            <div className="footer-profile">
              <div className="circle">
                <img src={logo}></img>
              </div>
              {/* <img src={logo} className='logo-img'></img> */}
              <h1>
                Xecure<span>One</span>
              </h1>
              <p>
                At XecureOne, we deliver advanced cybersecurity solutions to
                safeguard your business from evolving digital threats. Our
                mission is to protect your data, ensure compliance, and give you
                complete peace of mind.
              </p>
              <div className="social-media">
                <div
                  className="call social-logo"
                  onClick={() => {
                    window.location.href = "tel:+917708939021";
                  }}
                >
                  <IoCall />
                </div>
                <div
                  className="insta social-logo"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/xecureone?igsh=MXV3ZDVpNHIydGdzbA==",
                      "_blank"
                    )
                  }
                >
                  <RiInstagramFill className="insta-icon" />
                </div>
                <div
                  className="email social-logo"
                  onClick={() => {
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=support@xecureone.com&su=Inquiry&body=Hello%20I%20want%20to%20know%20more%20about%20your%20services",
                      "_blank"
                    );
                  }}
                >
                  <MdMarkEmailUnread />
                </div>
                <div
                  className="linkedin social-logo"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/xecureone",
                      "_blank"
                    )
                  }
                >
                  <ImLinkedin2 />
                </div>
                <div
                  className="whatsapp social-logo"
                  onClick={() =>
                    window.open("https://wa.me/917994695366", "_blank")
                  }
                >
                  <IoLogoWhatsapp />
                </div>
              </div>
            </div>
            <div className="footer-right">
              <div className="two-flex">
                <div className="footer-services">
                  <h2>Services</h2>
                  <div className="list-flex">
                    <Link
                      to="/CyberLegelSupport"
                      style={{ textDecoration: "none" }}
                      className="f-service-link"
                    >
                      Cyberlegal Support
                    </Link>
                    <Link
                      to="/CyberSecurityTraining"
                      style={{ textDecoration: "none" }}
                      className="f-service-link"
                    >
                      CyberSecurity Training
                    </Link>
                    <Link
                      to="/ThreatIntelligence"
                      style={{ textDecoration: "none" }}
                      className="f-service-link"
                    >
                      Threat Intelligence
                    </Link>
                    <Link
                      to="/MalwareAnalysis"
                      style={{ textDecoration: "none" }}
                      className="f-service-link"
                    >
                      Malware Analysis
                    </Link>
                    <Link
                      to="/EndpointSecurity"
                      style={{ textDecoration: "none" }}
                      className="f-service-link"
                    >
                      Endpoint Security
                    </Link>
                    <Link
                      to="/NextGenerationFirewall"
                      style={{ textDecoration: "none" }}
                      className="f-service-link"
                    >
                      Next-Gen Firewall
                    </Link>
                    <Link
                      to="/EmailSecurity"
                      style={{ textDecoration: "none" }}
                      className="f-service-link"
                    >
                      Email Security Proactive
                    </Link>
                    <Link
                      to="/PenTesting"
                      style={{ textDecoration: "none" }}
                      className="f-service-link"
                    >
                      Penetration Testing
                    </Link>
                    <Link
                      to="/SecureCodeReview"
                      style={{ textDecoration: "none" }}
                      className="f-service-link"
                    >
                      Secure Code Review
                    </Link>
                  </div>
                </div>
                <div className="footer-menu">
                  <h2>Menu</h2>
                  <div className="list-flex">
                    <Link
                      to="/"
                      style={{ textDecoration: "none" }}
                      className="f-menu-link"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      style={{ textDecoration: "none" }}
                      className="f-menu-link"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      style={{ textDecoration: "none" }}
                      className="f-menu-link"
                    >
                      Contact
                    </Link>
                    {/* <Link to="/vspt" style={{textDecoration:"none"}} className="f--link" >Services</Link> */}
                  </div>
                </div>
              </div>
              <div className="get-in-touch">
                <p>
                  Have anything on mind to discuss? We are here to help you!
                </p>
                <div
                  className="get-intouch-button"
                  onClick={() => navigate("/contact")}
                >
                  <p>Get In Touch</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-line"></div>
          <div className="bottom-text">
            <h2 onClick={() => navigate("/")}>XecureOne</h2>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
