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
    title: "Early Threat Detection",
    img: img1,
    description: `Spot advanced, fast-moving threats across your environment before they exploit vulnerabilities—minimizing exposure.`,
  },
  {
    title: "Informed Decision-Making",
    img: img2,
    description: `Equip your security team with contextual threat data to drive precise, prioritized, and timely actions.`,
  },
  {
    title: "Customized Threat Feeds",
    img: img3,
    description: `Receive real-time, industry-specific intelligence tailored to your sector, geography, and threat profile.`,
  },
  {
    title: "Faster Incident Response",
    img: img4,
    description: `Identify and react to IOCs with speed, reducing dwell time and limiting potential breach impact.`,
  },
  {
    title: "Threat Hunting Support",
    img: img5,
    description: `Empower internal SOCs or MSSPs with enriched intel on attacker TTPs to proactively search and eliminate threats.`,
  },
  {
    title: "Improved Risk Management",
    img: img6,
    description: `Focus resources on the most probable and impactful risks using actionable intelligence insights.`,
  },
];

const needs = [
  {
    title: "Evolving Threat Landscape",
    description: `Increasingly sophisticated threat actors require constant monitoring and 
evolving defense mechanisms. 
`,
  },
  {
    title: "Data Without Context",
    description: `Lack of context in raw security data hinders accurate response. `,
  },
  {
    title: "Proactive Over Reactive",
    description: `Organizations must shift from reactive to proactive cybersecurity 
strategies.`,
  },
  {
    title: "Reducing Alert Fatigue",
    description: `High false positives lead to alert fatigue and missed real threats. `,
  },
  {
    title: "Adapting to Change",
    description: `Rapidly changing digital infrastructure and attack vectors demand 
dynamic intel. `,
  },
  {
    title: "Compliance-Driven Visibility",
    description: `Regulatory compliance increasingly mandates threat visibility and 
reporting. `,
  },
];
const steps = [
  {
    title: "Threat Landscape Assessment",
    description: ` Analyze external and internal risk 
factors unique to your sector, region, and threat exposure. `,
  },
  {
    title: "Data Collection & Aggregation",
    description: ` Aggregate IOCs, TTPs, and data from 
OSINT, dark web, honeypots, and partner feeds. `,
  },
  {
    title: "Analysis & Correlation",
    description: `Enrich and cross-reference threat data using 
machine learning and expert threat analysts. `,
  },
  {
    title: "Alerting & Integration",
    description: `Distribute relevant threat alerts and integrate 
with SIEM, SOAR, and other security platforms. `,
  },
  {
    title: "Reporting & Refinement",
    description: `Generate detailed threat briefings and 
continuously optimize feeds based on evolving threats. `,
  },
];

const reasons = [
  {
    title: "AI-Powered, Expert-Driven Insights",
    description: `Blends machine learning automation with expert analysis for deeper, 
contextual insights. `,
  },
  {
    title: "Tailored Intelligence for Your Business",
    description: `Delivers vertical-specific threat data tailored to business size, industry, 
and geography. `,
  },
  {
    title: "Seamless Security Integration",
    description: `Easily integrates with SIEMs, firewalls, EDRs, and SOAR platforms for 
automated defense. `,
  },
  {
    title: "High-Fidelity, Low-Noise Feeds",
    description: `Provides constantly updated, high-fidelity feeds with minimal false 
positives. 
`,
  },
  {
    title: "Proactive Threat Hunting Capabilities",
    description: `Enables threat hunting and proactive posture improvements, not just 
detection.`,
  },
  {
    title: "Trusted by Industry Leaders",
    description: `Trusted by global enterprises, government bodies, and MSSPs for 
precision intelligence. `,
  },
];

// gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

function ThreatIntelligence() {
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
                About Threat Intelligence
              </button>
              <h1>
                Threat Intelligence
                <br />
                <span>Actionable Insights. Proactive Defense.</span>
              </h1>
              <p>
                XecureOne delivers real-time threat intelligence to help
                organizations detect, understand, and neutralize cyber threats
                before they cause harm. We track attacker infrastructure,
                malware trends, and global threat behavior to inform proactive
                security decisions.
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
                  What is <span>Threat Intelligence?</span>
                </h3>
                <div className="para-content">
                  <p>
                    Threat intelligence is the process of collecting, analyzing,
                    and interpreting information about potential or current
                    cyber threats. It helps organizations understand who might
                    attack them, how, and why. Sources include open-source data,
                    dark web monitoring, and security research. It provides
                    actionable insights to detect, prevent, and respond to
                    attacks. It can be strategic, tactical, operational, or
                    technical. Its goal is to reduce risks and improve overall
                    cybersecurity posture
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sp-third-section">
            <div className="sp-circle-bg-3"></div>
            <div className="sp-circle-bg-4"></div>
            <h2>
              Benefits Of <span>Threat Intelligence</span>
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
                Determining The Need For Our <span>Threat Intelligence </span>
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
              <h2>Threat Intelligence</h2>
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
              Why XecureOne’s Threat Intelligence is Best ?
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

export default Transition(ThreatIntelligence);
