import React from "react";
import "../Styles/Aboutpage.css";
import { useState, useEffect } from "react";
import { GoPlus, GoX } from "react-icons/go";
import Transition from "./Transition";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import WhyChooseUs from "../Components/WhyChooseUs";
import GetSecured from "../Components/GetSecured";
import Footer from "../Components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import trust from "../assets/Trust.png";
import Confidentiality from "../assets/Confidential.png";
import integrity from "../assets/Integrity.png";
import excellence from "../assets/Excellence.png";
import logo from "../assets/blacklogo.png";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services tailored to your needs. Contact us for details, and we'll guide you through the process.",
  },
  {
    question: "Who can benefit from your services?",
    answer:
      "Our services are designed for individuals and businesses alike, ensuring a safe and secure digital environment.",
  },
  {
    question: "How do I know which service I need?",
    answer:
      "Our experts can help you choose the right service based on your requirements, and we'll guide you through the process.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Just reach out to us and we'll guide you through the process, ensuring a seamless experience.",
  },
  {
    question: "Do you provide post-assessment support",
    answer:
      "Yes, we offer comprehensive post-assessment support to all our clients, ensuring they receive the best possible support.",
  },
];
gsap.registerPlugin(ScrollTrigger);

function AboutPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  const toggleStep = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };
  // HomePage animate
  useEffect(() => {
    let ctxs = gsap.context(() => {
      const tla = gsap.timeline();

      tla.to(".about-page-fixed", {
        opacity: 0,
        duration: 0.5,
        display: "none",
        ease: "ease",
      });
    });
    return () => ctxs.revert();
  }, []);

  return (
    <div>
      <div className="content-about">
        <div className="about-page-fixed"></div>
        <div className="aboutpage-overall-container">
          <div className="ap-first-section">
            <div className="pages-circle">
              <div className="pages-circle-container">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="10"
                        result="blur"
                      />
                      <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                  </defs>
                </svg>
                <div className="gradients-containers">
                  <div className="g1"></div>
                  <div className="g2"></div>
                </div>
              </div>
            </div>

            <div>
              <button className="about-title-tag">About XecureOne</button>
              <h1>
                XecureOne <br></br>
                <span> Where Security Meets Innovation.</span>
              </h1>
              <p>
                XecureOne is your trusted cybersecurity partner, perfectly
                suited for businesses seeking top-tier protection without the
                need for an in-house security team. We specialize in securing
                your digital landscape with innovative, cutting-edge solutions
                that deliver proactive defense and peace of mind.
              </p>
            </div>
            <div className="btn">
              <div
                className="let-connect-btn"
                onClick={() => navigate("/contact")}
              >
                Let`s Connect
              </div>
              <div
                className="our-service-btn"
                onClick={() => {
                  navigate("/", {
                    state: { scrollTo: "explore-services-section" },
                  });
                }}
              >
                Our Services
              </div>
            </div>
          </div>

          <div className="ap-second-section whoweare-section">
            <div className="a-circle-bg-1"></div>
            <div className="whoweare">
              <div className="card whoweare-card">
                <div className="blur-circle circle1 whoweare-circle1"></div>
                {/* <div className="blur-circle circle2 whoweare-circle2"></div> */}
                <div className="blur-circle circle3 whoweare-circle3"></div>
              </div>
              <div className="whoweare-content">
                <div className="who-title">
                  <div className="circle-who">
                    <img src={logo}></img>
                  </div>
                  <h1 className="heading">XecureOne.</h1>
                </div>
                <h3 className="sub-heading">Who we are?</h3>
                <div className="para-content">
                  <p>
                    XecureOne is a trusted cybersecurity partner dedicated to
                    protecting businesses of all sizes in a constantly evolving
                    cyber environment. Our team of certified experts harnesses
                    advanced technologies, proven methodologies, and a
                    client-focused approach to deliver tailored,
                    enterprise-grade security solutions. We go beyond just
                    safeguarding systems — we guard your business’s reputation,
                    data integrity, and future growth. At XecureOne, innovation
                    meets reliability with a steadfast commitment to proactive
                    defense, continuous monitoring, and compliance assurance.
                  </p>
                </div>
              </div>
            </div>
            <div className="whoweare-img">
              <div className="whoweare-img-in"></div>
            </div>
          </div>

          <div className="ap-third-section">
            <div className="a-circle-bg-2"></div>

            <div className="mission-overall">
              <div className="title-tag blue-tag mission-tag">
                <p>Our Mission</p>
              </div>
              <div className="custom-box">
                <div class="wrap-box"></div>
                <p>
                  "Our mission is to safeguard the digital world with precision,
                  intelligence, and trust. We deliver cutting-edge cybersecurity
                  solutions that adapt, learn, and evolve—protecting what
                  matters most. From enterprises to individuals, we stand
                  committed to building resilient digital frontiers. "
                </p>
              </div>
            </div>
            <div className="vision-overall">
              <div className="title-tag blue-tag vision-tag">
                <p>Our Vision</p>
              </div>
              <div className="custom-box">
                <div class="wrap-box"></div>
                <p>
                  "We envision a world where cybersecurity is seamless,
                  intelligent, and empowering. We strive to redefine digital
                  trust—transforming protection into innovation. Our mission is
                  to build secure ecosystems where businesses and individuals
                  thrive without fear. "
                </p>
              </div>
            </div>
          </div>

          <div className="ap-fourth-section">
            <div className="a-circle-bg-3"></div>
            <div className="a-circle-bg-4"></div>
            <div className="heading">
              <h2>
                Our Core <span>Values.</span>
              </h2>
              <p>
                Our expert team ensures your data and systems stay secure, so
                you can focus on growing confidently.
              </p>
            </div>
            <div className="core-values-box">
              <div className="core-box core-box1">
                <div className="card core-card">
                  <div className="blur-circle circle1 "></div>
                  <div className="blur-circle circle2 "></div>
                  {/* <div className="blur-circle circle3 whoweare-circle3"></div> */}
                </div>
                <div className="core-box-content">
                  <div className="circle-core-logo">
                    <img src={trust} />
                  </div>
                  <h3>Trust</h3>
                  <p>
                    Fostering lasting bonds through transparency and
                    dependability.
                  </p>
                </div>
              </div>
              <div className="core-box core-box2">
                
              </div>
              <div className="core-box core-box3">
                <div className="card core-card">
                  {/* <div className="blur-circle circle1 "></div> */}
                  <div className="blur-circle circle2 "></div>
                  <div className="blur-circle circle3 whoweare-circle3"></div>
                </div>
                <div className="core-box-content">
                  <div className="circle-core-logo">
                    <img src={integrity} />
                  </div>
                  <h3>Integrity</h3>
                  <p>
                    Committing to the highest ethical standards in everything we
                    do.
                  </p>
                </div>
              </div>
              <div className="core-box core-box4">
                <div className="card core-card">
                  {/* <div className="blur-circle circle1 "></div> */}
                  <div className="blur-circle circle2 "></div>
                  <div className="blur-circle circle3 whoweare-circle3"></div>
                </div>
                <div className="core-box-content">
                  <div className="circle-core-logo">
                    <img src={Confidentiality} />
                  </div>
                  <h3>Confidentiality</h3>
                  <p>
                    Protecting your data with unwavering commitment and care.
                  </p>
                </div>
              </div>
              <div className="core-box core-box5"></div>
              <div className="core-box core-box6">
                <div className="card core-card">
                  <div className="blur-circle circle1 "></div>
                  <div className="blur-circle circle2 "></div>
                  {/* <div className="blur-circle circle3 whoweare-circle3"></div> */}
                </div>
                <div className="core-box-content">
                  <div className="circle-core-logo">
                    <img src={excellence} />
                  </div>
                  <h3>Excellence</h3>
                  <p>
                    Delivering top-tier quality and service every single time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="purple-color-hline"> </div> */}
        </div>
        <div className="ap-fiveth-section expertteam-section">
          <div className="expert-team">
            <div className="title-tag blue-tag expertteam-tag">
              <p>Our Expert Team.</p>
            </div>

            <div className="expert-team-box-all">
              <div className="expert-box">
                <div className="e-circle"></div>
                <div className="e-box e-box1">
                  <p className="e-heading">Certified Ethical Hackers (CEH)</p>
                </div>
              </div>
              <div className="expert-box">
                <div className="e-circle"></div>
                <div className="e-box e-box1">
                  <p className="e-heading">
                    Offensive Security Certified Professionals (OSCP)
                  </p>
                </div>
              </div>
              <div className="expert-box">
                <div className="e-circle"></div>
                <div className="e-box e-box1">
                  <p className="e-heading">
                    Certified Information Systems Security Professionals (CISSP)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutpage-overall-container">
          <div className="ap-sixeth-section why-choose-section">
            <WhyChooseUs />
          </div>

          {/* <div className="purple-color-hline"> </div> */}
          <div className="ap-seventh-section our-journey">
            <div className="a-circle-bg-5"></div>
            <div className="journey-photo">
              <div className="journey-photo-in"></div>
            </div>
            <div className="journey-content">
              <h2>Our Journey</h2>
              <p>
                To be the foremost trusted cybersecurity partner globally,
                setting the gold standard in ethical hacking,
                <span>
                  cyber resilience, and digital trust for industries worldwide.
                </span>
              </p>
            </div>
          </div>
          <div className="ap-eight-section faq-section">
            <div className="a-circle-bg-6"></div>
            <div className="faq-left">
              <div className="title-tag faq-tag">
                <p>FAQ</p>
              </div>
              <h1>
                Frequently
                <br />
                <span>Asked Questions.</span>
              </h1>
              <p className="sub-text">
                Have questions? Our FAQ section has you covered with quick
                answer to the most common inquiries.
              </p>
            </div>
            <div className="faq-right">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faqs faq${index + 1} ${
                    expandedIndex === index ? "expanded" : ""
                  }`}
                  onClick={() => toggleStep(index)}
                >
                  <div className="faq-content">
                    <h3 className="f-heading">{item.question}</h3>
                    <p
                      className={`f-sub-heading ${
                        expandedIndex === index ? "visible" : "hidden"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>

                  <div className="down-arrow">
                    <GoPlus
                      className={`down-arrow-icon ${
                        expandedIndex === index ? "rotated" : ""
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ap-ninth-section get-secured">
            <GetSecured />
          </div>
        </div>
        <div className="ap-last-section footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Transition(AboutPage);
