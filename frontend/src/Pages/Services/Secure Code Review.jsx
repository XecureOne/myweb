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
    title: "Hardens Applications Before Deployment",
    img: img1,
    description: `Detects coding flaws, insecure configurations, and architectural weaknesses early.`,
  },
  {
    title: "Supports DevSecOps Integration",
    img: img2,
    description: `Embed security directly into your CI/CD pipelines and developer workflows.`,
  },
  {
    title: "Reduces Time to Market",
    img: img3,
    description: `Minimize late-stage rework and release delays caused by vulnerabilities.`,
  },
  {
    title: "Protects Sensitive Data",
    img: img4,
    description: `Ensures secure handling of passwords, tokens, encryption, and personal data.`,
  },
  {
    title: "Boosts Client Confidence",
    img: img5,
    description: `Code reviewed by certified professionals becomes a value-add for your customers.`,
  },
  {
    title: "Improves Overall Code Quality",
    img: img6,
    description: `Enforces clean, efficient, and consistent coding standards.`,
  },
];

const needs = [
  {
    title: "Code is the New Battlefield",
    description: `Attackers target APIs, microservices, and SaaS platforms directly. `,
  },
  {
    title: "Rapid Development Cycles",
    description: `Agile releases often trade off security for speed.`,
  },
  {
    title: "Insecure Third-Party Components ",
    description: `Open-source and commercial libraries may contain exploitable bugs.`,
  },
  {
    title: "Cloud-Native Complexity ",
    description: `Misconfigured cloud functions or insecure IAM policies can be fatal.`,
  },
  {
    title: "Talent Gap in Secure Coding",
    description: `Developers aren’t always trained in secure development practices.`,
  },
  {
    title: "Growing Legal Liabilities",
    description: `Insecure apps can result in regulatory fines, lawsuits, and class actions. `,
  },
  {
    title: "Rising Cost of Breaches",
    description: `Post-exploit remediation is exponentially more expensive than pre-launch review. `,
  },
  {
    title: "Application Security is a Differentiator ",
    description: `Customers are increasingly demanding proof of code security.`,
  },
];
const steps = [
  {
    title: "Engagement Kickoff and Code Scope Definition ",
    description: `Identify codebases, frameworks, sensitive modules, and third-party integrations.`,
  },
  {
    title: "Automated Static Code Analysis",
    description: `Scan for known flaws, outdated libraries, and bad coding patterns.`,
  },
  {
    title: " Manual Secure Code Audit",
    description: `Expert analysis of business logic, data validation, authentication, and authorization.`,
  },
  {
    title: "Detailed Reporting and Severity Tagging ",
    description: `Comprehensive vulnerability list with OWASP, CVSS scores, and remediation 
guidance.`,
  },
  {
    title: "Secure Dev Collaboration and Closure ",
    description: `Consult with developers to explain findings, implement fixes, and improve practices.`,
  },
];

const reasons = [
  {
    title: " Hybrid Audit Methodology ",
    description: ` Automated tools combined with expert manual inspection.`,
  },
  {
    title: "Language and Platform Agnosticism",
    description: `Support for over 25+ languages and frameworks. `,
  },
  {
    title: "OWASP + SANS Alignment ",
    description: `Our findings are mapped to globally accepted standards.`,
  },
  {
    title: "Dev-Friendly Reports ",
    description: `Actionable, easy-to-follow reports tailored for developer consumption.`,
  },
  {
    title: "CI/CD Friendly Integrations ",
    description: `Seamless into GitLab, Jenkins, Bitbucket, and more.`,
  },
  {
    title: "End-to-End Security Partner ",
    description: `We support you from discovery through resolution and verification. 
`,
  },
];

// gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

function SecurecodeReview() {
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
            <div className="content">
              <button className="service-title-tag about-title-tag">
                About Secure Code Review
              </button>
              <h1>
                Secure Code Review
                <br />
                <span>Let`s Secure Deep!</span>
              </h1>
              <p>
                XecureOne is your trusted cybersecurity partner — ideal for
                businesses seeking top-tier protection without an in-house
                security team. We specialize in safeguarding your digital
                landscape with cutting-edge solutions.{" "}
              </p>
            </div>
            <div className="btn">
              <div
                className="let-connect-btn"
                onClick={() => navigate("/contact")}
              >
                Let's Connect
              </div>
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
                  What is <span>Secure code review</span>
                </h3>
                <div className="para-content">
                  <p>
                    Secure code review is the process of examining application
                    source code to identify security flaws before deployment. It
                    helps find vulnerabilities like SQL injection, XSS, insecure
                    authentication, and poor encryption practices. Reviews can
                    be manual (done by security experts) or automated (using
                    scanning tools). The process ensures code follows secure
                    coding standards and best practices. It is often done during
                    the development lifecycle to fix issues early. The goal is
                    to prevent security breaches by ensuring the code is robust
                    and safe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sp-third-section">
            <div className="sp-circle-bg-3"></div>
            <div className="sp-circle-bg-4"></div>
            <h2>
              Benefits Of <span>Secure Code Review</span>
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
                Determining The Need For Our <span>Secure Code Review</span>
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
              <h2>Secure Code Review</h2>
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
              Why XecureOne Excels at Code Review ?
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

export default Transition(SecurecodeReview);
