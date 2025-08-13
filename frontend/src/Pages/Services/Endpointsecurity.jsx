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

const tabs = [
  { label: "Antivirus and Anti-malware Protection", key: "antivirus" },
  { label: "Patch Management", key: "pm" },
  { label: "Firewall and Network Control ", key: "firewall" },
  { label: "Endpoint Detection and Response (EDR)", key: "edr" },
];

const contents = {
  antivirus: {
    title: "Advanced Antivirus & Anti-malware Protection",
    subtitle: `Scans for and removes malicious software to prevent infections and protect your 
devices. `,
    highlight: "What Makes Our Antivirus & Antimalware ",
    highlightColor: "Protection Unbeatable",
    features: [
      {
        head: "Comprehensive Threat Detection",
        desc: `Detects and removes viruses, ransomware, spyware, and 
other malicious software before they harm devices. `,
      },
      {
        head: "Real-Time Protection ",
        desc: `Provides real-time protection, continuously scanning for new threats 
as they arise. `,
      },
      {
        head: "Financial & Data Loss Prevention",
        desc: `Reduces risk of financial and data losses caused by 
malware attacks.`,
      },
      {
        head: "Anti-Phishing Defense",
        desc: `Protects against phishing attempts by identifying fraudulent sites or 
links.`,
      },
      {
        head: "Downtime Reduction",
        desc: ` Minimizes system downtime by preventing infections that can 
disrupt operations.`,
      },
      {
        head: "User Confidence Boost",
        desc: ` Enhances user confidence knowing devices are actively protected 
from evolving threats. `,
      },
    ],
  },
  pm: {
    title: "Patch Management",
    subtitle:
      "Safeguard sensitive company information with our robust DLP solutions, designed to monitor, detect, and block data exfiltration, leaks, and misuse. Protect intellectual property and meet regulatory compliance demands.",
    highlight: "How Our DLP Keeps Data ",
    highlightColor: "Secure",
    features: [
      {
        head: "Vulnerability Closure",
        desc: `Proactively addresses vulnerabilities by promptly applying security 
patches, significantly reducing the risk of cyberattacks and exposure to known exploits. `,
      },
      {
        head: "Secure Updates",
        desc: `– Ensures software and operating systems remain updated, eliminating 
weaknesses that attackers could leverage, while monitoring for accidental leaks during 
updates.`,
      },
      {
        head: "Compliance Assurance",
        desc: `Strengthens regulatory compliance—patched systems are more 
likely to meet industry security standards while keeping sensitive data secure. `,
      },
      {
        head: "Downtime Prevention",
        desc: `Minimizes operational disruptions by reducing system downtime 
caused by security incidents.`,
      },
      {
        head: "Stakeholder Confidence",
        desc: `Boosts confidence among stakeholders and users by 
demonstrating a robust approach to security hygiene. `,
      },
      {
        head: "Continuous Protection",
        desc: `Fosters continuous improvement—regular patching keeps defenses 
current against evolving threats while ensuring information integrity.`,
      },
    ],
  },
  firewall: {
    title: "Firewall and Network Control",
    subtitle: `Monitors and filters network traffic to block unauthorized access and secure 
communications. `,
    highlight: "Why Our Network Security ",
    highlightColor: "Excels",
    features: [
      {
        head: " Unauthorized Access Blocking",
        desc: ` Blocks unauthorized access to internal networks, ensuring 
only permitted traffic gets through.`,
      },
      {
        head: "Traffic Filtering",
        desc: ` Filters incoming and outgoing data, reducing risk of malicious 
communication or data exfiltration. `,
      },
      {
        head: " Network Attack Prevention",
        desc: `Prevents network-based attacks such as Denial-of-Service 
(DoS), port scanning, and spoofing. `,
      },
      {
        head: "Custom Policy Enforcement ",
        desc: ` Allows administrators to enforce granular policies tailored to 
organizational needs.`,
      },
      {
        head: "Continuous Network Monitoring",
        desc: `Enables monitoring of network activity to identify and 
respond to suspicious behavior quickly. `,
      },
      {
        head: "Network Segmentation ",
        desc: `Segments networks to limit lateral movement of threats if a breach 
does occur. `,
      },
    ],
  },
  edr: {
    title: "Endpoint Detection and Response (EDR)",
    subtitle:
      "Continuous monitoring, analytics, and adaptive defenses guard every endpoint from emerging threats, with the power to remediate incidents fast.",
    highlight: "What Makes Our EDR ",
    highlightColor: "Elite",
    features: [
      {
        head: "Continuous Endpoint Monitoring",
        desc: `Provides continuous monitoring of devices to quickly 
identify suspicious or abnormal activity. `,
      },
      {
        head: "Rapid Incident Response",
        desc: `Enables swift, real-time incident response, helping to contain and 
address potential breaches. `,
      },
      {
        head: "Forensic Analysis",
        desc: `Delivers detailed forensic analysis, empowering teams to understand 
root causes and strengthen defenses.`,
      },
      {
        head: "Automated Detection & Remediation ",
        desc: `Automates the detection and resolution of threats, 
reducing reliance on manual intervention.`,
      },
      {
        head: "Endpoint Security Visibility",
        desc: " Improves visibility into device health and security posture. ",
      },
      {
        head: "Proactive Threat Hunting",
        desc: `Supports proactive threat hunting to discover and address 
advanced, hidden threats. `,
      },
    ],
  },
};

const benefits = [
  {
    title: "Proactive Threat Prevention",
    img: img1,
    description: `Continuously detects and blocks malware, ransomware, and zero-day threats before they reach your devices.`,
  },
  {
    title: "End-to-End Data Protection",
    img: img2,
    description: `Secures sensitive data across all endpoints with encryption, access controls, and leak prevention mechanisms.`,
  },
  {
    title: "Centralized Visibility & Control",
    img: img3,
    description: `Provides a unified dashboard to monitor, manage, and enforce security policies across every endpoint.`,
  },
  {
    title: "Compliance & Audit Readiness",
    img: img4,
    description: `Stay compliant with industry regulations like GDPR, HIPAA, and ISO through automated logging and reporting.`,
  },
  {
    title: "Minimal Downtime & Fast Recovery",
    img: img5,
    description: `Quickly isolate affected devices, reduce operational disruption, and recover from attacks faster.`,
  },
  {
    title: "Scalable, Cloud-Ready Security",
    img: img6,
    description: `Easily expand protection as your business grows—no added infrastructure or complexity required.`,
  },
];

const needs = [
  {
    title: "Rising Cyber Threats ",
    description: `Endpoints are prime targets for ransomware, phishing, and advanced 
persistent threats. Without protection, even one compromised 
device can jeopardize the entire network.`,
  },
  {
    title: "Remote & Hybrid Workforce",
    description: `With employees working from various locations and devices, securing 
endpoints beyond the traditional network perimeter is critical. `,
  },
  {
    title: "Data Protection & Privacy",
    description: `Endpoints often hold or access sensitive business and customer data. 
Without endpoint security, data breaches and leaks become far more 
likely.`,
  },
  {
    title: " Device Diversity",
    description: `Laptops, smartphones, tablets, and IoT devices—all connect to your 
business. Each one is a potential entry point for attackers if not 
secured properly.`,
  },
  {
    title: " Regulatory Compliance",
    description: `Laws like GDPR, HIPAA, and ISO 27001 mandate data protection 
measures. Endpoint security helps meet these compliance 
requirements and avoid penalties. `,
  },
  {
    title: "Insider Threats ",
    description: `Whether intentional or accidental, employee actions can lead to 
security breaches. Endpoint security detects and mitigates risky 
behaviors in real time. `,
  },
  {
    title: "Lack of Visibility ",
    description: `Without endpoint monitoring, organizations have blind spots in their 
security posture. Endpoint solutions offer centralized visibility and 
control.`,
  },
  {
    title: "Business Continuity ",
    description: `Cyberattacks on endpoints can cause operational downtime, financial 
loss, and brand damage. Strong endpoint security ensures business 
runs uninterrupted. `,
  },
];
const steps = [
  {
    title: " Device Onboarding & Risk Assessment",
    description: `All client endpoints—laptops, desktops, mobiles, and servers—are 
registered into the security platform. A risk profile is created for each 
device based on its usage, location, and access levels. `,
  },
  {
    title: "Policy Configuration & Access Control ",
    description: `Security policies are tailored to the client’s needs, defining who can 
access what data, from which devices, and under what conditions. 
This includes setting up encryption, firewall rules, and application 
restrictions. `,
  },
  {
    title: "Threat Detection & Real-Time Monitoring",
    description: `Advanced threat detection tools (like EDR and AI-based analytics) are 
deployed to monitor all endpoint activity. Suspicious behaviors, 
malware signatures, or anomalies are flagged instantly for action. `,
  },
  {
    title: "Automated Response & Isolation",
    description: `When a threat is detected, the system can automatically isolate the 
affected endpoint from the network, prevent data exfiltration, and 
initiate corrective actions—such as killing malicious processes or 
initiating scans.`,
  },
  {
    title: "Reporting, Auditing & Continuous Improvement ",
    description: `Regular reports are generated for compliance, incident tracking, and 
performance review. Insights are used to refine policies, adapt to 
new threats, and ensure continuous data protection. `,
  },
];

const reasons = [
  {
    title: " Intelligence-Driven Protection ",
    description: `At XecureOne, we go beyond basic antivirus. Our solutions leverage AI
powered analytics and global threat intelligence to detect and block threats 
before they impact your business. `,
  },
  {
    title: " Zero Trust, Zero Compromise",
    description: `We implement a strict Zero Trust framework—never assuming trust, always 
verifying identity and device integrity. This ensures airtight protection across 
your workforce, no matter where they connect from. `,
  },
  {
    title: " Personalized Security Strategies ",
    description: `Your business isn’t generic—neither is our protection. XecureOne delivers 
tailored security blueprints aligned with your workflows, compliance mandates, 
and operational risks. `,
  },
  {
    title: "24/7 Protection with Human + Machine Response",
    description: `Security doesn’t sleep—and neither do we. Our always-on SOC combines 
automated threat containment with expert intervention for immediate incident 
response. `,
  },
  {
    title: "Full Visibility. Total Control.",
    description: `From a single intuitive dashboard, monitor device health, enforce policies, and 
gain actionable insights across all endpoints—no blind spots, no complexity. `,
  },
  {
    title: "Built to Scale With You ",
    description: `Whether you're securing 50 or 5,000 devices, XecureOne grows with you. Our 
cloud-native, scalable architecture ensures seamless protection at every stage 
of your business.`,
  },
];

// gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

function EndPointSecurity() {
  const [selected, setSelected] = useState("antivirus");

  const current = contents[selected];
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
            <div>
              <button className="service-title-tag about-title-tag">
                About EndPoint Service
              </button>
              <h1>
                EndPoint Security
                <br />
                <span>Endpoint Defense That Never Sleeps</span>
              </h1>
              <p>
                XecureOne secures every endpoint—laptops, mobiles, and
                servers—with real-time threat detection and zero trust
                protection. Stay ahead of malware, ransomware, and insider
                threats with smart, always-on defense.{" "}
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
                  What is <span>endpoint security?</span>
                </h3>
                <div className="para-content">
                  <p>
                    Endpoint security is the practice of protecting devices such
                    as desktops, laptops, tablets, and mobile phones that
                    connect to a network from cyber threats. It involves
                    monitoring, detecting, and blocking malicious activities
                    that could compromise these devices and the data they
                    access. Modern endpoint security solutions use advanced
                    technologies like threat intelligence, behavioral analysis,
                    and machine learning to defend against evolving threats. By
                    securing endpoints, organizations can reduce the risk of
                    data breaches and ensure compliance with security policies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="main-bg header-tabs-section">
            {/* Tabs */}
            <div className="sp-circle-bg-2"></div>

            <div className="header-tabs">
              {tabs.map((tab) => (
                <div
                  className={`tab${
                    selected === tab.key ? " tab-selected" : ""
                  }`}
                  key={tab.key}
                  onClick={() => setSelected(tab.key)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            {/* Content */}
            <div className="content-section">
              <div className="content-sec-left">
                <h2 className="content-title">{current.title}</h2>
                <p className="content-subtitle">{current.subtitle}</p>
              </div>
              <div className="content-sec-right">
                <h3 className="features-title">
                  {current.highlight}
                  <span className="highlight">{current.highlightColor}</span>
                </h3>
                <div className="features-grid">
                  {current.features.map((f, i) => (
                    <div className="feature-card" key={i}>
                      <h4 className="feature-title">{f.head}</h4>
                      <p className="feature-desc">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="sp-third-section">
            <div className="sp-circle-bg-3"></div>
            <div className="sp-circle-bg-4"></div>
            <h2>
              Benefits Of <span>Endpoint Security</span>
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
                <span>Endpoint Management Services</span>
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
              <h2>Effective Endpoint Security</h2>
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
              Why our service is the best in the market ??{" "}
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

export default Transition(EndPointSecurity);
