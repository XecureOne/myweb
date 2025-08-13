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
    title: "Inoculates Workforce Against Cyber Threats",
    img: img1,
    description: `Trains your entire staff to detect and respond to phishing, malware, and social engineering.`,
  },
  {
    title: "Supports a Culture of Accountability",
    img: img2,
    description: `Encourages responsible behaviors like proper password hygiene, secure file sharing, and incident reporting.`,
  },
  {
    title: "Bridges Knowledge Gaps Across Departments",
    img: img3,
    description: `From front desk to C-suite, each department receives relevant and role-based awareness.`,
  },
  {
    title: "Compliance Simplification",
    img: img4,
    description: `Streamlines ISO, GDPR, HIPAA, SOC 2 training requirements through tracked, certified modules.`,
  },
  {
    title: "Simulated Cyber Attacks",
    img: img5,
    description: `Realistic phishing simulations, ransomware drills, and device loss scenarios sharpen instincts.`,
  },
  {
    title: "Protects Remote Work Environments",
    img: img6,
    description: `Reinforces mobile device management, VPN usage, and remote-access protocols.`,
  },

];

const needs = [
  {
    title: "Attackers Target Humans First ",
    description: `Phishing, vishing, pretexting, and baiting remain top threat vectors. `,
  },
  {
    title: " Security Tools Alone Aren't Enough",
    description: `Even with firewalls and SIEMs, a user clicking a malicious link can breach the 
network. 
`,
  },
  {
    title: "Hybrid Work is Here to Stay ",
    description: `BYOD and work-from-anywhere policies introduce new risks.`,
  },
  {
    title: "Insider Threats Are Rising ",
    description: `Both malicious insiders and negligent employees cause significant data leaks.`,
  },
  {
    title: "Board-Level Expectations",
    description: `CISOs and compliance officers must show measurable improvements in awareness 
metrics. `,
  },
  {
    title: "Growing Cyber Insurance Requirements",
    description: `Many insurers now require ongoing training as a policy condition.`,
  },
  {
    title: "Rising Regulatory Pressure",
    description: `Security awareness is now a standard clause in industry frameworks.`,
  },
  {
    title: "Fast-Paced Threat Evolution ",
    description: `New malware families, APTs, and scams require continual updates.`,
  },
];
const steps = [
  {
    title: "Needs Analysis and Policy Review",
    description: `Understand your business model, threat landscape, and risk profile. `,
  },
  {
    title: " Customized Content Development",
    description: `Industry-relevant case studies, quizzes, simulations, and best practices.`,
  },
  {
    title: "Flexible Training Delivery",
    description: `Delivered via LMS, instructor-led sessions, or virtual classrooms.`,
  },
  {
    title: "Performance Metrics and Adaptive Testing ",
    description: `Gauge learning outcomes using pre/post-tests and scenario-based exercises. `,
  },
  {
    title: "Continuous Improvement and Reporting ",
    description: `Update modules, refine simulations, and share executive dashboards for 
transparency.`,
  },
];

const reasons = [
  {
    title: "Built by Hackers, Approved by CISOs",
    description: `Content created by former red teamers and validated by compliance leaders.`,
  },
  {
    title: " Behavioral Reinforcement ",
    description: `Training isn't just informational; it's habit-forming. `,
  },
  {
    title: "Modular Curriculum ",
    description: `Easily customizable modules based on roles, seniority, and risk levels. `,
  },
  {
    title: "Gamified Learning Paths",
    description: `Boost engagement with points, badges, leaderboards, and real rewards.`,
  },
  {
    title: " Multi-Device Access ",
    description: `Training that works seamlessly across desktops, tablets, and smartphones.`,
  },
  {
    title: "Built-In Compliance Mapping ",
    description: `Automatically aligns training records with audit checklists. `,
  },
];

// gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

function CybersecurityTraining() {
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
            <div>
              <button className="service-title-tag about-title-tag">
                About Cybersecurity Training
              </button>

              <h1>
                Cybersecurity Training
                <br />
                <span>Let`s Train Deep!</span>
              </h1>
              <p>
                XecureOne is your trusted cybersecurity partner — ideal for
                businesses seeking top-tier protection without an in-house
                security team. We specialize in safeguarding your digital
                landscape with cutting-edge solutions.{" "}
              </p>
            </div>
            <div className="btn">
              <div className="let-connect-btn"  onClick={() => navigate("/contact")}>Let's Connect</div>
            </div>
          </div>

          <div className="sp-third-section">
            <div className="sp-circle-bg-3"></div>
            <div className="sp-circle-bg-4"></div>
            <h2>
              Benefits Of <span>Xecureone Training</span>
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
                <span>Cyber Security Training</span>
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
              <h2>Cyber Security Training</h2>
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
              Why Choose XecureOne for Training ?
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

export default Transition(CybersecurityTraining);
