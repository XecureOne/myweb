import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import "../Styles/Homepage.css";
import { BsPatchCheckFill } from "react-icons/bs";
import WhyChooseUs from "../Components/WhyChooseUs";
import { IoStar } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../Components/Footer";
import Transition from "./Transition";
import { GoPlus, GoX } from "react-icons/go";
import GetSecured from "../Components/GetSecured";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import penetrationTesting from "../assets/ServiceImg/penetrationtesting.png";
import endpoint from "../assets/ServiceImg/endpoint.png";
import malware from "../assets/ServiceImg/malwareanalysis.png";
import emailsecurity from "../assets/ServiceImg/emailsecurity.png";
import firewall from "../assets/ServiceImg/firewall.png";
import codereview from "../assets/ServiceImg/codereview.png";
import cybersecuritytraining from "../assets/ServiceImg/securityTraining.png";
import support from "../assets/ServiceImg/support.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import dot from "../assets/dot.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import partner1 from "../assets/OurPartner/img1.jpg";
import partner2 from "../assets/OurPartner/img2.jpg";
import partner3 from "../assets/OurPartner/img3.jpg";
import partner4 from "../assets/OurPartner/img4.jpg";
import partner5 from "../assets/OurPartner/img5.jpg";
import partner6 from "../assets/OurPartner/img6.jpg";
import partner7 from "../assets/OurPartner/img7.jpg";
import partner8 from "../assets/OurPartner/img8.png";
const testimonials = [
  {
    name: "Kg Digital",
    // title: "IT Director",
    feedback:
      "We used to worry about data safety, but XecureOne handles it all. Their approachable team is always just a call or WhatsApp away, making us feel protected. They’ve truly simplified our work life.",
  },
  {
    name: "CyberFort",
    // title: "Security Analyst",
    feedback:
      "At CyberFort, XecureOne’s expert penetration testing exposed and fixed critical flaws in our systems. They now manage our data security, explain everything clearly, and are always ready to help. We operate safely and confidently with XecureOne by our side. — CyberFort Academy Team",
  },
  {
    name: "YoursTutor",
    // title: "CTO",
    feedback:
      "At YoursTutor, protecting student data was a challenge—until XecureOne stepped in. They uncovered hidden flaws, fixed them thoroughly, and now our student information is completely secure. Their quick support lets us focus on teaching without worry. — YoursTutor Team",
  },
  {
    name: "Assistinfotech",
    // title: "Network Admin",
    feedback:
      "At Assist Infotech, protecting sensitive insurance data is crucial. XecureOne fixed vulnerabilities and secured all assets. With their constant support, quick response, and clear guidance, we now focus on business confidently, knowing our data and reputation are safe. — Team Assist Infotech",
  },
  {
    name: "NewU",
    // title: "Network Admin",
    feedback:
      "Working with XecureOne was an absolute game-changer for our app launch. They provided expert assistance in testing our new application, identifying issues early, and ensuring a smooth rollout.",
  },
];
const stepsData = [
  {
    title: "INSIGHTFUL CONSULTATION",
    description: `We start by gaining a deep understanding of your business objectives, 
unique cybersecurity challenges, and current security posture. This 
collaborative session lays the foundation for a customized protection plan. `,
  },
  {
    title: "COMPREHENSIVE ASSESSMENT",
    description: `Through thorough analysis and evaluation, we identify vulnerabilities and 
potential risks in your systems, networks, and processes—empowering you 
with clear visibility into your security landscape. `,
  },
  {
    title: "TAILORED IMPLEMENTATION",
    description: `We design and deploy targeted cybersecurity solutions that align precisely 
with your business goals, ensuring seamless integration and maximum 
protection without disrupting your operations. `,
  },
  {
    title: "PROACTIVE MONITORING ",
    description: `Around-the-clock monitoring allows us to detect and respond to threats in 
real time, shielding your organization from emerging cyber risks before they 
impact your business.`,
  },
  {
    title: "CONTINUOUS IMPROVEMENT",
    description: `Cybersecurity is a journey, not a destination. We continuously refine and 
enhance your security posture through regular reviews, updates, and 
adapting to evolving threats—keeping you one step ahead.  `,
  },
];
const partnerLogos = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
];

function HomePage() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate(location.pathname, {
      state: { scrollTo: sectionId },
    });
  };

  const toggleStep = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };
  const location = useLocation();
  // scroll fixed effect with window
  useEffect(() => {
    const scrollEl = scrollRef.current;
    const container = containerRef.current;

    const scrollWidth = scrollEl.scrollWidth;
    const viewportWidth = scrollEl.clientWidth;
    const horizontalScrollLength = scrollWidth - viewportWidth;

    const ctx = gsap.context(() => {
      gsap.to(scrollEl, {
        x: -horizontalScrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `${scrollEl.scrollWidth}`, 

          scrub: true,
          pin: true,
          anticipatePin: 2,
        },
      });
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const hasScrolledRef = useRef(false);

  useEffect(() => {
    if (location.state?.scrollTo && !hasScrolledRef.current) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        hasScrolledRef.current = true;
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          navigate(location.pathname, { replace: true, state: {} });
        }, 100);
      }
    } else if (!location.state?.scrollTo && !hasScrolledRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location, navigate]);

  return (
    <div>
      <div className="content-of-home">
        <div className="homepage-overall-container">
          <div className="hp-first-section">
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
            <div className="content">
              <h1>
                Secure Your Business, <br></br>
                <span>SafeGuard What Matters Most.</span>
              </h1>
              <p>
                XecureOne delivers personalized cybersecurity solutions crafted
                to safeguard your digital assets, stop data breaches before they
                happen, and keep your business fully compliant with
                ever-evolving industry standards.
              </p>
            </div>
            <div className="btn">
              <div
                className="explore-btn"
                onClick={() => scrollToSection("explore-services-section")}
              >
                Explore Services
              </div>
              <div
                className="get-free-btn"
                onClick={() => scrollToSection("get-consultation-section")}
              >
                Get a Free Consultation
              </div>
            </div>
          </div>

          {/* <div id="scroll-container"> */}
          <section id="explore-services-section">
            <div
              className="hp-second-section service-section"
              ref={containerRef}
            >
              <div className="secondsec-left">
                <div className="outside-box">
                  <div className="circle-bg-6"></div>

                  <div className="inside-box">
                    {/* <img src={cybersecurity}></img> */}
                  </div>
                </div>
              </div>
              <div className="secondsec-right">
                <div className="title-tag">
                  <p>Our Service</p>
                </div>

                <div className="heading-tag">
                  <h2>
                    SafeGuard Today,<br></br>
                    <span>Strengthen Tomorrow</span>
                  </h2>
                </div>

                <div className="all-service" ref={scrollRef}>
                  <div
                    className="services service1"
                    onClick={() => {
                      navigate("/PenTesting");
                    }}
                  >
                    <div className="card service-card">
                      <div className="blur-circle circle1"></div>
                      <div className="blur-circle circle2"></div>
                      <div className="blur-circle circle3"></div>
                      <div className="service-content">
                        <div className="heading">
                          <div className="circle-logo">
                            <img src={penetrationTesting}></img>
                          </div>
                          <h2>Penetration Testing</h2>
                        </div>
                        <p className="sub-heading">
                          Simulating real-world attacks to discover
                          vulnerabilities before hackers do.
                        </p>
                        <p className="type-p">
                          <span>Types :</span> Web, Mobile, Network, Wireless
                        </p>
                        <div className="benefits">
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Certified testers (CEH/OSCP) with expertise in
                              realistic attack simulations.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Comprehensive coverage including all key platforms
                              and technologies.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Detailed remediation reports and actionable
                              insights to strengthen your defenses.
                            </p>
                          </div>
                        </div>
                        {/* <div className="price-duration">
                          <div className="price">
                            <p>View More</p>
                          </div>
                        </div> */}
                        <div
                          className="viewmore"
                          onClick={() => {
                            navigate("/PenTesting");
                          }}
                        >
                          <p>View More</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="services service2"
                    onClick={() => navigate("/EndpointSecurity")}
                  >
                    <div className="card service-card">
                      <div className="blur-circle circle1"></div>
                      <div className="blur-circle circle2"></div>
                      <div className="blur-circle circle3"></div>
                      <div className="service-content">
                        <div className="heading">
                          <div className="circle-logo">
                            <img src={endpoint}></img>
                          </div>
                          <h2>Endpoint Security</h2>
                        </div>
                        <p className="sub-heading">
                          Comprehensive protection for devices such as
                          computers, mobile phones, and servers.
                        </p>
                        <p className="type-p">
                          <span>Types : </span> Desktops, Laptops, Mobile
                          Devices, Servers
                        </p>
                        <div className="benefits">
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Real-time threat detection with advanced antivirus
                              and Endpoint Detection and Response (EDR).{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Multi-layered protection against malware,
                              ransomware, and unauthorized access.
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Device control and encryption tailored for your
                              business environment.
                            </p>
                          </div>
                        </div>
                        {/* <div className="price-duration">
                          <div
                            className="price"
                            onClick={() => navigate("/EndpointSecurity")}
                          >
                            <p>
                              ₹ 50,000 <span>/ Test</span>
                            </p>
                          </div>
                          <div className="duration">
                            <p>
                              {" "}
                              5 - 7<span> Days</span>
                            </p>
                          </div>
                        </div> */}
                        <div
                          className="viewmore"
                          onClick={() => navigate("/EndpointSecurity")}
                        >
                          <p>View More</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="services service3"
                    onClick={() => navigate("/MalwareAnalysis")}
                  >
                    <div className="card service-card">
                      <div className="blur-circle circle1"></div>
                      <div className="blur-circle circle2"></div>
                      <div className="blur-circle circle3"></div>
                      <div className="service-content">
                        <div className="heading">
                          <div className="circle-logo">
                            <img src={malware}></img>
                          </div>
                          <h2>Malware Analysis </h2>
                        </div>
                        <p className="sub-heading">
                          Identifying and neutralizing malicious software
                          threats.
                        </p>
                        <p className="type-p">
                          <span>Types : </span>Signature-based, Behavioral,
                          Heuristic, Sandbox Analysis
                        </p>
                        <div className="benefits">
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Expert analysis using state-of-the-art tools and
                              methodologies.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Rapid identification and containment of emerging
                              malware threats.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Proactive threat intelligence integration to
                              anticipate attacker tactics.
                            </p>
                          </div>
                        </div>
                        {/* <div className="price-duration">
                          <div
                            className="price"
                            onClick={() => navigate("/MalwareAnalysis")}
                          >
                            <p>
                              ₹ 50,000 <span>/ Test</span>
                            </p>
                          </div>
                          <div className="duration">
                            <p>
                              {" "}
                              5 - 7<span> Days</span>
                            </p>
                          </div>
                        </div> */}
                        <div
                          className="viewmore"
                          onClick={() => navigate("/MalwareAnalysis")}
                        >
                          <p>View More</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="services service4"
                    onClick={() => navigate("/EmailSecurity")}
                  >
                    <div className="card service-card">
                      <div className="blur-circle circle1"></div>
                      <div className="blur-circle circle2"></div>
                      <div className="blur-circle circle3"></div>
                      <div className="service-content">
                        <div className="heading">
                          <div className="circle-logo">
                            <img src={emailsecurity}></img>
                          </div>
                          <h2>Email Security</h2>
                        </div>
                        <p className="sub-heading">
                          AI-enhanced protection against phishing, spam, and
                          email-borne attacks.
                        </p>
                        <p className="type-p">
                          <span>Types : </span>Phishing Detection, Spam
                          Filtering, Email Encryption
                        </p>
                        <div className="benefits">
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Advanced machine learning to detect evolving email
                              threats.
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Integration with existing email platforms for
                              seamless protection.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Reduced false positives, ensuring business
                              communications remain uninterrupted.{" "}
                            </p>
                          </div>
                        </div>
                        {/* <div className="price-duration">
                          <div
                            className="price"
                            onClick={() => navigate("/EmailSecurity")}
                          >
                            <p>
                            ₹ 50,000 <span>/ Test</span>
                          </p>
                          </div>
                          <div className="duration">
                          <p>
                            {" "}
                            5 - 7<span> Days</span>
                          </p>
                        </div>
                        </div> */}
                        <div
                          className="viewmore"
                          onClick={() => navigate("/EmailSecurity")}
                        >
                          <p>View More</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="services service5"
                    onClick={() => navigate("/NextGenerationFirewall")}
                  >
                    <div className="card service-card">
                      <div className="blur-circle circle1"></div>
                      <div className="blur-circle circle2"></div>
                      <div className="blur-circle circle3"></div>
                      <div className="service-content">
                        <div className="heading">
                          <div className="circle-logo">
                            <img src={firewall}></img>
                          </div>
                          <h2>Next-Generation Firewall (NGFW) </h2>
                        </div>
                        <p className="sub-heading">
                          Multi-layered defenses that inspect and filter
                          traffic.
                        </p>
                        <p className="type-p">
                          <span>Types : </span>Application Awareness, Intrusion
                          Prevention, VPN Support
                        </p>
                        <div className="benefits">
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Deep packet inspection with advanced intrusion
                              prevention.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Granular control over user access and application
                              usage.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Scalable solutions adaptable to businesses of all
                              sizes.
                            </p>
                          </div>
                        </div>
                        {/* <div className="price-duration">
                          <div
                            className="price"
                            onClick={() => navigate("/NextGenerationFirewall")}
                          >
                            <p>
                            ₹ 50,000 <span>/ Test</span>
                          </p>
                            <p>View More</p>
                          </div>
                          <div className="duration">
                          <p>
                            {" "}
                            5 - 7<span> Days</span>
                          </p>
                        </div>
                        </div> */}
                        <div
                          className="viewmore"
                          onClick={() => navigate("/NextGenerationFirewall")}
                        >
                          <p>View More</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="services service6"
                    onClick={() => navigate("/SecureCodeReview")}
                  >
                    <div className="card service-card">
                      <div className="blur-circle circle1"></div>
                      <div className="blur-circle circle2"></div>
                      <div className="blur-circle circle3"></div>
                      <div className="service-content">
                        <div className="heading">
                          <div className="circle-logo">
                            <img src={codereview}></img>
                          </div>
                          <h2>Secure Code Review </h2>
                        </div>
                        <p className="sub-heading">
                          Ensuring your application code is free of exploitable
                          security flaws.
                        </p>
                        <p className="type-p">
                          <span>Types : </span> Manual Review, Automated Static
                          Analysis, Hybrid Approaches
                        </p>
                        <div className="benefits">
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Experienced reviewers applying secure coding
                              standards and best practices.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Detailed vulnerability identification including
                              OWASP Top 10 and beyond.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Clear reporting with practical remediation
                              guidance integrated into your development
                              lifecycle.
                            </p>
                          </div>
                        </div>
                        {/* <div className="price-duration">
                          <div
                            className="price"
                            onClick={() => navigate("/SecureCodeReview")}
                          >
                            <p>
                              ₹ 50,000 <span>/ Test</span>
                            </p>
                            <p>View More</p>
                          </div>
                          <div className="duration">
                            <p>
                              {" "}
                              5 - 7<span> Days</span>
                            </p>
                          </div>
                        </div> */}
                        <div
                          className="viewmore"
                          onClick={() => navigate("/SecureCodeReview")}
                        >
                          <p>View More</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="services service7"
                    onClick={() => navigate("/CyberSecurityTraining")}
                  >
                    <div className="card service-card">
                      <div className="blur-circle circle1"></div>
                      <div className="blur-circle circle2"></div>
                      <div className="blur-circle circle3"></div>
                      <div className="service-content">
                        <div className="heading">
                          <div className="circle-logo">
                            <img src={cybersecuritytraining}></img>
                          </div>
                          <h2>Cybersecurity Training </h2>
                        </div>
                        <p className="sub-heading">
                          Upskilling teams with the latest cyber defense
                          techniques and compliance best practices.
                        </p>
                        <p className="type-p">
                          <span>Types : </span> Phishing Simulations, Awareness
                          Workshops, Compliance Training
                        </p>
                        <div className="benefits">
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Customized training aligned with your business
                              risks and compliance needs.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Hands-on, practical programs to strengthen
                              employee vigilance.{" "}
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Continuous learning supported by up-to-date
                              content and assessments.{" "}
                            </p>
                          </div>
                        </div>
                        {/* <div className="price-duration">
                          <div
                            className="price"
                            onClick={() => navigate("/CyberSecurityTraining")}
                          >
                            <p>
                            ₹ 50,000 <span>/ Test</span>
                          </p>
                            <p>View More</p>
                          </div>
                          <div className="duration">
                          <p>
                            {" "}
                            5 - 7<span> Days</span>
                          </p>
                        </div>
                        </div> */}
                        <div
                          className="viewmore"
                          onClick={() => navigate("/CyberSecurityTraining")}
                        >
                          <p>View More</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="services service8"
                    onClick={() => navigate("/CyberLegelSupport")}
                  >
                    <div className="card service-card">
                      <div className="blur-circle circle1"></div>
                      <div className="blur-circle circle2"></div>
                      <div className="blur-circle circle3"></div>
                      <div className="service-content">
                        <div className="heading">
                          <div className="circle-logo">
                            <img src={support}></img>
                          </div>
                          <h2>Cyber Legal Support </h2>
                        </div>
                        <p className="sub-heading">
                          Expert guidance to navigate the complexities of cyber
                          law and incident response
                        </p>
                        <p className="type-p">
                          <span>Types : </span>Data Privacy Compliance, Incident
                          Reporting, Legal Advisory
                        </p>
                        <div className="benefits">
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              In-depth knowledge of national and international
                              cyber laws.
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Support for regulatory compliance and breach
                              notification requirements.
                            </p>
                          </div>
                          <div>
                            <BsPatchCheckFill className="check-logo" />
                            <p>
                              Strategic incident management minimizing legal
                              exposure.{" "}
                            </p>
                          </div>
                        </div>
                        {/* <div className="price-duration">
                          <div
                            className="price"
                            onClick={() => navigate("/CyberLegelSupport")}
                          >
                            <p>View More</p>
                          </div>
                          
                        </div> */}
                        <div
                          className="viewmore"
                          onClick={() => navigate("/CyberLegelSupport")}
                        >
                          <p>View More</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* </div> */}
            </div>
          </section>
          {/* </div> */}
          {/* <div className="purple-color-hline"> </div> */}

          <div className="hp-third-section why-choose-section">
            <div className="circle-bg1"></div>
            <WhyChooseUs />
          </div>

          {/* <div className="purple-color-hline"> </div> */}

          <div className="hp-fourth-section client-testimonials">
            <div className="circle-bg-2"></div>
            <div className="heading">
              <div className="title-tag client-tag">
                <p>Client Testimonials</p>
              </div>
              <p className="sub-heading">
                See what our Clients have to say
                <span> about our cybersecurity service.</span>
              </p>
            </div>
            <div className="slider-container">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={3} // default: desktop large screens
                breakpoints={{
                  0: { slidesPerView: 1 }, // mobile
                  900: { slidesPerView: 2 }, // tablet
                  1200: { slidesPerView: 3 }, // desktop
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl =
                    ".swiper-button-prev-custom";
                  swiper.params.navigation.nextEl =
                    ".swiper-button-next-custom";
                  swiper.params.pagination.el = ".custom-pagination";
                }}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination",
                }}
                autoplay={{ delay: 5000 }}
                loop
                className="client-boxall"
              >
                {testimonials.map((client, index) => (
                  <SwiperSlide key={index}>
                    <div className="boxs box1">
                      <div className="card boxs-card">
                        <div className="blur-circle circle1 parallax-circle"></div>
                        <div className="blur-circle circle2 parallax-circle"></div>
                        <div className="blur-circle circle3 parallax-circle"></div>
                      </div>
                      <img src={dot} className="dot-icon" alt="dot" />
                      <div className="profile">
                        <div className={`logo logo${index}`}></div>
                        <div className="profile-details">
                          <h3 className="p-heading">{client.name}</h3>
                          <p className="p-sub-heading">{client.title}</p>
                        </div>
                      </div>
                      <div className="para-descrip">
                        <p>“{client.feedback}”</p>
                      </div>
                      <div className="stars">
                        <IoStar className="stat-icon" />
                        <IoStar className="stat-icon" />
                        <IoStar className="stat-icon" />
                        <IoStar className="stat-icon" />
                        <IoStar className="stat-icon" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Bottom Navigation + Pagination */}
              <div className="custom-pagination"></div>
              <div className="navigation">
                <div className="swiper-button-prev-custom">
                  <MdOutlineKeyboardArrowLeft />
                </div>
                <div className="swiper-button-next-custom">
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="purple-color-hline"></div> */}

          <div className="hp-fiveth-section step-bt-process">
            <div className="circle-bg-3"></div>
            <div className="circle-bg-4"></div>
            <div className="heading">
              <h2>
                Our Proven Process to Secure <span>What Matters Most.</span>
              </h2>
              <p>
                At XecureOne, protecting your most valuable assets is our
                mission. Our comprehensive, client-focused process ensures
                robust cybersecurity tailored to your unique needs—providing
                confidence and peace of mind at every step.
              </p>
            </div>
            <div className="steps-all">
              {stepsData.map((step, index) => (
                <div className="step-animate" key={index}>
                  <div
                    className={`steps step${index + 1} ${
                      expandedIndex === index ? "expanded" : ""
                    }`}
                    onClick={() => toggleStep(index)}
                  >
                    <div className="step-content">
                      <div className="title-tag step-tag">
                        <p>Step {index + 1}</p>
                      </div>
                      <div className="s-content">
                        <h3 className="c-heading">{step.title}</h3>
                        <p
                          className={`c-sub-heading ${
                            expandedIndex === index ? "visible" : "hidden"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="down-arrow">
                      <GoPlus
                        className={`down-arrow-icon ${
                          expandedIndex === index ? "rotated" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hp-sixth-section our-partner">
            <div className="title-tag blue-tag partner-tag">
              <p>Our Partner.</p>
            </div>
            <div className="partner-box-container">
              <div className="partner-box-all scroll-animation">
                {[...partnerLogos, ...partnerLogos].map((imgSrc, index) => (
                  <div className="partner-box" key={index}>
                    <img
                      src={imgSrc}
                      alt={`Partner logo ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <section id="get-consultation-section">
            <div className="hp-seventh-section">
              <div className="circle-bg-5"></div>
              <GetSecured />
            </div>
          </section>

          <div className="hp-last-section footer-section">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transition(HomePage);
