import React from "react";
import "../../Styles/ServicePageNew.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import GetSecured from "../../Components/GetSecured";
import Footer from "../../Components/Footer";
import Transition from "../Transition";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../assets/ServicePage/compliance.png";
import img2 from "../../assets/ServicePage/preparedness.png";
import img3 from "../../assets/ServicePage/riskreduction.png";
import img4 from "../../assets/ServicePage/breach.png";
import img5 from "../../assets/ServicePage/advisory.png";
import img6 from "../../assets/ServicePage/review.png";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    title: "Compliance Clarity",
    img: img1,
    description: ` Understand and align with global data protection regulations 
like GDPR, HIPAA, and PCI DSS. `,
  },
  {
    title: "Legal Preparedness",
    img: img2,
    description: ` Be legally ready for cyber incidents, audits, or data breaches 
through well-defined protocols and evidence-handling.`,
  },
  {
    title: "Risk Reduction",
     img: img3,
    description: ` Avoid legal penalties, brand damage, and operational disruption 
through proactive legal strategy.`,
  },
  {
    title: "Breach Notification Guidance",
     img: img4,
    description: ` Get expert support on breach disclosure timelines, 
regulatory filings, and customer communication.`,
  },
  {
    title: "Incident Legal Advisory ",
     img: img5,
    description: ` Receive on-demand legal counsel during active incidents to 
protect sensitive communications and guide response.`,
  },
  {
    title: "Contract & Policy Review ",
     img: img6,
    description: `Strengthen security clauses, third-party agreements, and 
internal policies to reduce legal exposure. `,
  },
];
const needs = [
  {
    title: "Evolving Cyber Laws",
    description: `Cyber laws are evolving quickly, and non-compliance can lead to fines, lawsuits, and reputational harm.`,
  },
  {
    title: "Lack of Legal Frameworks",
    description: `Many businesses lack legal frameworks to guide incident response or digital evidence handling.`,
  },
  {
    title: "Increased Regulatory Scrutiny",
    description: `Regulatory bodies are increasing scrutiny on breach notification and data usage.`,
  },
  {
    title: "Compliance Obligations After Incidents",
    description: `Cyber incidents often trigger contractual and statutory obligations.`,
  },
  {
    title: "Critical Role of Legal Documentation",
    description: `Legal documentation is essential during forensic investigations and post-breach litigation.`,
  },
];

const steps = [
  {
    title: "egal Risk Assessment ",
    description: `– Evaluate exposure to cyber regulations and contractual 
liabilities.`,
  },
  {
    title: "Policy & Documentation Review",
    description: `Analyze and refine data privacy policies, security 
clauses, and incident response plans.`,
  },
  {
    title: "Incident Legal Support",
    description: ` Provide immediate counsel during breaches to ensure 
privilege, proper communication, and lawful handling. `,
  },
  {
    title: "Compliance Alignment",
    description: `Assist in aligning cybersecurity operations with legal 
mandates through custom frameworks. `,
  },
  {
    title: "Post-Incident Forensics & Representation",
    description: `– Support digital investigations, prepare 
reports, and offer legal representation if needed. `,
  },
];

const reasons = [
  {
    title: "Specialized Legal Expertise",
    description: `Staffed with legal experts specializing in cybersecurity, privacy, and technology law.`,
  },
  {
    title: "Comprehensive Support",
    description: `Combines legal advisory with real-time incident support and post-breach analysis.`,
  },
  {
    title: "Regulatory Compliance Assurance",
    description: `Ensures compliance with international, federal, and sector-specific data regulations.`,
  },
  {
    title: "Global Advisory Capability",
    description: `Offers cross-border breach advisory and multilingual documentation preparation.`,
  },
  {
    title: "Seamless Team Integration",
    description: `Integrates with your IT and security teams to provide cohesive, timely legal guidance.`,
  },
  {
    title: "Proven Industry Trust",
    description: `Trusted by enterprises, legal firms, and government entities for cyberlaw strategy and response.`,
  },
];


// gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

function CyberlegalSupport() {
  const navigate = useNavigate();
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
            <div className="content ">
              <button className="service-title-tag about-title-tag">
                About Cyber Legal Support
              </button>
              <h1>
                Cyber Legal Support
                <br />
                <span>Bridging Law and Cybersecurity </span>
              </h1>
              <p>
                Navigating today’s digital landscape requires more than just
                technical defense—it demands legal resilience. XecureOne’s
                Cyberlegal Support services help organizations stay compliant,
                prepare for cyber incidents, and respond with precision when
                legal matters arise. We bridge the gap between cybersecurity,
                privacy law, and regulatory obligations so that you remain
                protected in the courtroom as well as the boardroom.
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
                  What is <span>Cyberlegal Support?</span>
                </h3>
                <div className="para-content">
                  <p>
                    Cyber legal support refers to legal assistance and guidance
                    related to digital crimes, online disputes, and
                    cybersecurity issues. It helps individuals and businesses
                    understand and comply with cyber laws and regulations.
                    Includes handling cases of hacking, data breaches, online
                    fraud, and cyber harassment. Covers drafting and reviewing
                    IT policies, contracts, and compliance documents. Assists in
                    responding to cyber incidents, investigations, and evidence
                    collection. Provides representation in court or with
                    authorities for cybercrime matters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sp-third-section">
            <div className="sp-circle-bg-3"></div>
            <div className="sp-circle-bg-4"></div>
            <h2>
              Benefits Of <span>Cyber Legal Support</span>
            </h2>
            <div className="benefits-container">
              {benefits.map((benefit, index) => (
                <div className="benefit-card" key={index}>
                  <div className="circle-benefits-card">
                    <img src={benefit.img} />
                  </div>
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
                Determining The Need For Our <span>Cyber legal Support</span>
              </h2>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis maxime reprehenderit provident omnis, voluptatibus
                quo ut aut, quidem praesentium, voluptatem porro quam labore
                similique tempora soluta? Incidunt at quas quisquam.
              </p> */}
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
              <h2>Cyber legal Support</h2>
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
            <h2 className="why-us-title">
              Why XecureOne’s Cyberlegal Support is Best ?
            </h2>
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

export default Transition(CyberlegalSupport);
