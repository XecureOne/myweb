import React from "react";
import "../../Styles/ServicePageNew.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import GetSecured from "../../Components/GetSecured";
import Footer from "../../Components/Footer";
import Transition from "../Transition";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/ServicePage/compliance.png";
import img2 from "../../assets/ServicePage/preparedness.png";
import img3 from "../../assets/ServicePage/riskreduction.png";
import img4 from "../../assets/ServicePage/breach.png";
import img5 from "../../assets/ServicePage/advisory.png";
import img6 from "../../assets/ServicePage/review.png";

const benefits = [
  {
    title: "Phishing & Spoofing Protection",
    img: img1,
    description: `Detect and block phishing emails, domain spoofing, and executive impersonation using real-time link analysis and email header validation.`,
  },
  {
    title: "Malware & Ransomware Filtering",
    img: img2,
    description: `Analyze attachments and embedded URLs with sandboxing and signatureless threat detection to prevent ransomware delivery.`,
  },
  {
    title: "Authentication Enforcement",
    img: img3,
    description: `Deploy DMARC, SPF, and DKIM to ensure only verified senders reach your inbox—minimizing spoofing and domain misuse.`,
  },
  {
    title: "Data Loss Prevention (DLP)",
    img: img4,
    description: `Automatically scan outbound emails for sensitive content, encrypt messages, or block them entirely to prevent accidental or malicious leaks.`,
  },
  {
    title: "Real-Time Threat Analysis",
    img: img5,
    description: `Leverage machine learning and up-to-date threat intel to detect emerging email-borne threats even in zero-day formats.`,
  },
  {
    title: "User Awareness Integration",
    img: img6,
    description: `Integrate user-focused defense with phishing simulations and interactive training to build a vigilant workforce.`,
  },
];

const needs = [
  {
    title: "Email as the Primary Attack Vector",
    description: `Email is the most common delivery method for phishing, malware, and ransomware 
attacks. `,
  },
  {
    title: "The Starting Point for Most Cyberattacks",
    description: `Nearly 90% of cyberattacks begin with a deceptive or malicious email.`,
  },
  {
    title: "Regulatory Compliance Requirements",
    description: `Compliance regulations like GDPR, HIPAA, and ISO 27001 require organizations to 
protect communication channels.`,
  },
  {
    title: "Human Error Vulnerabilities",
    description: `Human error remains a major risk factor—users unknowingly click on malicious links 
or share confidential data. `,
  },
  {
    title: "Limits of Traditional Spam Filters",
    description: `Traditional spam filters are not sufficient to stop modern, targeted threats like BEC or 
spear phishing.`,
  },
];
const steps = [
  {
    title: "Assessment & Integration",
    description: `Review current email infrastructure (cloud or on-prem), 
user behaviors, and vulnerabilities. Deploy secure email gateways and configure 
policies tailored to your threat profile.`,
  },
  {
    title: "Authentication Configuration",
    description: ` Set up SPF, DKIM, and DMARC protocols to validate 
sender identity and block spoofed emails.`,
  },
  {
    title: "Threat Filtering & DLP Rules",
    description: `Apply multi-engine filtering, sandboxing, and AI
driven detection to quarantine threats. Enforce DLP policies to monitor outbound 
traffic.`,
  },
  {
    title: "User Awareness Simulation",
    description: `Run regular phishing simulation campaigns and 
interactive training to build employee awareness and responsiveness. `,
  },
  {
    title: "Reporting & Refinement ",
    description: `Generate real-time dashboards and scheduled reports to 
track threats, fine-tune rules, and ensure continued compliance and performance. `,
  },
];

const reasons = [
  {
    title: "Advanced Multi-Layered Filtering",
    description: `Employs advanced multi-layered filtering with machine learning and threat 
intelligence correlation. `,
  },
  {
    title: "Seamless Platform Integration",
    description: `Seamlessly integrates with major platforms like Microsoft 365, Google Workspace, 
and hybrid email environments.`,
  },
  {
    title: "Holistic 360° Email Security",
    description: ` Balances technical defenses with human-centric training for a 360° approach to email 
security. `,
  },
  {
    title: "Detection of Sophisticated Threats",
    description: `Detects sophisticated BEC, spear phishing, and account takeover attempts through 
behavior and intent analysis.`,
  },
  {
    title: "Comprehensive Reporting & Visibility",
    description: `Offers rich reporting, message tracing, and threat intelligence feeds for SOC visibility 
and auditing.`,
  },
  {
    title: "Scalable, High-Performance Protection ",
    description: `Chosen by both global enterprises and fast-growing businesses for scalable, high
performance email protection. 
`,
  },
];

// gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

function EmailSecurityProactive() {
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
  const navigate = useNavigate();
  return (
    <div>
      <div className="content-endpoint-service">
        <div className="about-page-fixed"></div>
        <div className="servicepage-overall-container">
          <div className="ap-first-section sp-first-section ">
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
              <button className="service-title-tag about-title-tag">
                About Email Service
              </button>
              <h1>
                Email Security
                <br />
                <span>Your First Line of Defense Starts Here </span>
              </h1>
              <p>
                Email is not just a communication tool—it's one of the most
                targeted attack surfaces in modern enterprises. At XecureOne,
                our multi-layered email security platform safeguards your
                organization against phishing, malware, spoofing, and business
                email compromise (BEC). We deploy intelligent threat filtering,
                robust authentication protocols, and user training to secure
                email end-to-end—keeping your people and data protected at all
                times.
              </p>
            </div>
            <div className="btn">
              <div className="let-connect-btn" onClick={() => navigate("/contact")}>Let's Connect</div>
            </div>
          </div>

          <div className="sp-second-section service-second-section">
            <div className="sp-circle-bg-1"></div>

            <div className="about-service">
              <div className="card about-service-card">
                <div className="blur-circle circle1 whoweare-circle1"></div>
                {/* <div className="blur-circle circle2 whoweare-circle2"></div> */}
                <div className="blur-circle circle3 whoweare-circle3"></div>
              </div>
              <div className="aboutservice-content">
                <h3 className="sub-heading">
                  What is <span>Email security?</span>
                </h3>
                <div className="para-content">
                  <p>
                    Email security is the practice of protecting email accounts,
                    communications, and data from cyber threats. It involves
                    measures to prevent phishing, spam, malware, and
                    unauthorized access. Techniques include spam filters,
                    encryption, multi-factor authentication, and email
                    authentication protocols like SPF, DKIM, and DMARC. It helps
                    ensure the confidentiality, integrity, and authenticity of
                    email messages. Email security also protects organizations
                    from data breaches and financial fraud. Its goal is to keep
                    email a safe and trusted communication channel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sp-third-section">
            <div className="sp-circle-bg-3"></div>
            <div className="sp-circle-bg-4"></div>
            <h2>
              Benefits Of <span>Email Security</span>
            </h2>
            <div className="benefits-container">
              {benefits.map((benefit, index) => (
                <div className="benefit-card" key={index}>
                  <div className="circle-benefits-card"> <img src={benefit.img} /></div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sp-fourth-section">
          <div className="sp-circle-bg-5"></div>

          <div className="emn-section">
            <div className="heading">
              <h2>
                Determining The Need For Our{" "}
                <span>Email Services</span>
              </h2>
 
            </div>

            <div className="emn-grid">
              {needs.map((need, idx) => (
                <div className="emn-card" key={idx}>
                  <h3>{need.title}</h3>
                  <p>{need.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sp-fifth-section">
          <div className="five-step-section">
            <div className="five-step-title">
              <p>5-Step Process for</p>
              <h2>Effective Email Security</h2>
            </div>
            <div className="five-step-container">
              {steps.map((step, idx) => (
                <div
                  className={`five-step-card-wrapper ${
                    idx % 2 === 1 ? "right" : "left"
                  }`}
                  key={idx}
                >
                  <div className="five-step-card-all">
                    <div className="five-step-card">
                      <div className="five-step-card-desc">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                      <div className="five-step-number">
                        <span>{idx + 1}</span>
                      </div>
                    </div>
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className={`five-step-connector ${
                        idx % 2 === 0 ? "to-right" : "to-left"
                      }`}
                    >
                      {/* <div className="progress-line"></div> */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sp-sixth-section">
          <div className="sp-circle-bg-6"></div>

          <div className="why-us-section">
            <h2 className="why-us-title">Why XecureOne’s Email Security is Best  ?</h2>
            <div className="why-us-grid">
              {reasons.map((reason, idx) => (
                <div className="why-us-card" key={idx}>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sp-seventh-section get-secured-now">
          <div className="sp-circle-bg-7"></div>

          <GetSecured />
        </div>
        <div className="last-section footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Transition(EmailSecurityProactive);
