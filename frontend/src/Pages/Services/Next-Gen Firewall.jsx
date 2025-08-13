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
  { label: "Advanced Traffic Filtering ", key: "antivirus" },
  { label: "Intrusion Prevention System (IPS) ", key: "pm" },
  { label: "Application Awareness ", key: "firewall" },
  { label: "Integrated Threat Intelligence", key: "edr" },
];

const contents = {
  antivirus: {
    title: "Advanced Traffic Filtering ",
    subtitle: `Blocks unauthorized access by inspecting network traffic deeply beyond traditional 
firewall rules. `,
    highlight: "What Makes Our Antivirus & Antimalware ",
    highlightColor: "Protection Unbeatable",
    features: [
      {
        head: "Deep Packet Inspection",
        desc: "Inspects traffic beyond basic firewall rules to identify advanced threats.",
      },
      {
        head: "Hidden Threat Blocking",
        desc: "Stops malware, suspicious payloads, and malicious content before reaching critical systems.",
      },
      {
        head: "Traffic Load Optimization",
        desc: "Prevents congestion by filtering resource-heavy or unnecessary traffic.",
      },
      {
        head: "Compliance-Oriented Access Control",
        desc: "Manages access to sensitive or regulated resources.",
      },
      {
        head: "Granular Rule Enforcement",
        desc: "Enforces user, application, and location-specific access policies.",
      },
      {
        head: "Bandwidth Allocation Control",
        desc: "Prioritizes bandwidth for business-critical activities.",
      },
    ],
  },
  pm: {
    title: "Intrusion Prevention System (IPS) ",
    subtitle: `Detects and stops known and unknown threats within network traffic in real time.`,
    highlight: "How Our DLP Keeps Data ",
    highlightColor: "Secure",
    features: [
      {
        head: "Real-Time Threat Interception",
        desc: "Detects and blocks known and unknown attacks instantly.",
      },
      {
        head: "Attack Containment",
        desc: "Prevents threats from spreading within the network.",
      },
      {
        head: "Accurate Detection",
        desc: "Reduces false positives so teams can focus on real issues.",
      },
      {
        head: "Network Threat Visibility",
        desc: "Provides actionable intelligence on suspicious activity.",
      },
      {
        head: "Compliance Enforcement",
        desc: "Assists with meeting security standards like PCI-DSS through strict policy enforcement.",
      },
      {
        head: "Automated Blocking Actions",
        desc: "Handles simple threats automatically to reduce analyst workload.",
      },
    ],
  },
  firewall: {
    title: "Application Awareness ",
    subtitle: `Identifies and controls applications regardless of port, protocol, or evasive tactics. `,
    highlight: "Why Our Network Security ",
    highlightColor: "Excels",
    features: [
      {
        head: "App Detection Beyond Ports",
        desc: "Identifies apps regardless of port, protocol, or evasion methods.",
      },
      {
        head: "Critical App Prioritization",
        desc: "Ensures vital applications get sufficient bandwidth.",
      },
      {
        head: "Malicious App Management",
        desc: "Blocks harmful or unauthorized software.",
      },
      {
        head: "Usage Visibility",
        desc: "Tracks which apps are used, by whom, and when.",
      },
      {
        head: "Context-Based Control",
        desc: "Adjusts policies by user, role, device, or location.",
      },
      {
        head: "Cost-Efficient Resource Use",
        desc: "Allocates resources based on actual needs and usage.",
      },
    ],
  },
  edr: {
    title: "Integrated Threat Intelligence",
    subtitle: `Leverages real-time data from global threat feeds to prevent sophisticated 
cyberattacks. `,
    highlight: "What Makes Our EDR ",
    highlightColor: "Elite",
    features: [
      {
        head: "Live Global Threat Feeds",
        desc: "Uses up-to-date intelligence to stop sophisticated cyberattacks.",
      },
      {
        head: "Preemptive Security Updates",
        desc: "Strengthens defense posture before threats strike.",
      },
      {
        head: "Accelerated Incident Handling",
        desc: "Gives context for faster response to attacks.",
      },
      {
        head: "Comprehensive Risk Insight",
        desc: "Reveals hidden and emerging security risks.",
      },
      {
        head: "Targeted Security Investments",
        desc: "Guides spending toward high-priority risks.",
      },
      {
        head: "Cross-Tool Intelligence Sharing",
        desc: "Shares threat data automatically across all security systems.",
      },
    ],
  },
};

const benefits = [
  {
    title: "Threat Prevention",
    img: img1,
    description: `Block malware, ransomware, and advanced cyber threats before they reach your devices.
Protect your business from both known and emerging attacks.
Stay ahead of cybercriminals with proactive defense mechanisms.`,
  },
  {
    title: "Data Protection",
    img: img2,
    description: `Safeguard sensitive business data across all endpoints, both onsite and remote.
Prevent unauthorized access and data leaks with strong encryption.
Maintain customer trust by keeping confidential information secure.`,
  },
  {
    title: "Centralized Management",
    img: img3,
    description: `Monitor and manage all endpoint devices from a single, intuitive dashboard.
Easily deploy updates and enforce security policies across your organization.
Reduce IT workload with automated alerts and streamlined controls.`,
  },
  {
    title: "Regulatory Compliance",
    img: img4,
    description: `Meet industry standards and legal requirements with comprehensive security controls.
Generate detailed reports to simplify audits and compliance checks.
Reduce the risk of costly fines and reputational damage.`,
  },
  {
    title: "Reduced Downtime",
    img: img5,
    description: `Quickly detect and respond to threats, minimizing business disruption.
Automated incident response helps isolate and remediate compromised devices.
Keep your operations running smoothly and efficiently.`,
  },
  {
    title: "Scalable Security",
    img: img6,
    description: `Easily expand protection as your business grows and adds new devices.
Adapt to changing security needs without major infrastructure changes.
Ensure every endpoint is covered, no matter where your team works.`,
  },
];

const needs = [
  {
    title: "Remote Work Security",
    description:
      "Are your employees working remotely accessing company data from various locations? Our endpoint security solutions ensure that remote access is secure and in adherence to your organization's regulations, safeguarding against threats in remote environments.",
  },
  {
    title: "Mobile Device Protection",
    description:
      "Are employees using tablets or smartphones for work tasks effectively and efficiently in today's environment? We shield these mobile devices against unauthorized malware access, ensuring that your business data remains secure even on personal devices.",
  },
  {
    title: "BYOD Policy Enforcement",
    description:
      "Does your organization enable employees to utilize personal devices for work? Our expert team aids in enforcing security protocols on these devices, like encryption and remote wipe capabilities, to safeguard sensitive confidential data effectively.",
  },
  {
    title: "Cyber Threat Defense",
    description:
      "Are you worried about malware, phishing attacks, or ransomware targeting your organization? We fight back against the threat hard. With robust antivirus software and insightful detection tools, we spot, analyze, and tackle threats swiftly and efficiently.",
  },
  {
    title: "Compliance and Data Privacy",
    description:
      "Is your organization conditional to data protection laws and industry regulations? Our expertise assists you to adhere to these critical requirements by deploying robust encryption, comprehensive security policies, and strict access controls to effectively shield confidential information.",
  },
  {
    title: "Patch Management",
    description:
      "Are your devices updated with the latest security patches? Our meticulous patch management procedures ensure risks are fixed promptly to reduce cyber-attacks. By prioritizing timely updates, we safeguard your data and enhance overall system resilience against emerging threats.",
  },
  {
    title: "Threat Detection and Response",
    description:
      "Do you have real-time visibility into endpoint activities to identify and respond to security incidents effectively? Our continuous monitoring and incident response capabilities are the perfect answer to the impact of data breaches, ensuring proactive threat management and comprehensive protection.",
  },
  {
    title: "Device Encryption",
    description:
      "Are you concerned about the loss or theft of devices containing sensitive information? Our advanced endpoint security solutions effectively protect critical data on all devices, ensuring that even if lost or stolen, the data remains cryptographically inaccessible to unauthorized users.",
  },
];
const steps = [
  {
    title: "Inventory and Discovery",
    description:
      "Begin by conducting an inventory of all endpoints (devices) connected to your network, including computers, laptops, mobile devices, servers, and IoT devices. Discover and catalog important information about each endpoint, such as hardware specifications, operating systems, installed software, and network configurations.",
  },
  {
    title: "Security Configuration and Compliance",
    description:
      "Implement standardized security configurations across all endpoints to ensure compliance with organizational policies and industry regulations. Configure firewalls, antivirus software, encryption settings, and intrusion detection/prevention systems (IDS/IPS) to protect against cyber threats and unauthorized access.",
  },
  {
    title: "Patch Management and Software Updates",
    description:
      "Establish a robust patch management process to regularly update endpoint software, operating systems, and applications. Deploy patches and updates promptly to address security vulnerabilities and enhance endpoint security posture.",
  },
  {
    title: "Endpoint Monitoring and Incident Response",
    description:
      "Continuously monitor endpoints for security events, suspicious activities, and potential threats. Set up real-time alerts and automated incident response mechanisms to quickly contain, investigate, and remediate security incidents, minimizing their impact on your organization.",
  },
  {
    title: "Reporting and Continuous Improvement",
    description:
      "Generate detailed reports on endpoint security status, compliance, and incidents. Use these insights to assess the effectiveness of your endpoint management strategy, identify areas for improvement, and implement ongoing enhancements to strengthen your security posture.",
  },
];

const reasons = [
  {
    title: "Expertise and Experience",
    description:
      "Our team is composed of seasoned cybersecurity professionals with years of experience in endpoint protection.",
  },
  {
    title: "Comprehensive Protection",
    description:
      "We provide end-to-end security coverage for all your devices—desktops, laptops, mobile phones, and servers.",
  },
  {
    title: "Tailored to Your Needs",
    description:
      "We customize our services to fit your infrastructure, compliance needs, and workflow.",
  },
  {
    title: "24/7 Support and Monitoring",
    description:
      "Our dedicated support team is available around the clock to monitor your systems and respond to incidents.",
  },
  {
    title: "Proactive Threat Management",
    description:
      "We proactively hunt for vulnerabilities and suspicious activities to keep you ahead of cybercriminals.",
  },
  {
    title: "Easy Integration and Management",
    description:
      "Manage all your endpoints from a single, intuitive dashboard, reducing complexity and IT workload.",
  },
];

// gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

function NextGenFirewall() {
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
                About Next-Gen Firewall
              </button>
              <h1>
                Next-Gen Firewall
                <br />
                <span>
                  Intelligent Perimeter Protection for a Connected World
                </span>
              </h1>
              <p>
                Traditional firewalls are no longer sufficient to combat modern
                threats. XecureOne’s Next Generation Firewall (NGFW) solutions
                provide application-layer filtering, deep traffic inspection,
                threat intelligence and user-aware controls to secure your
                network edge against advanced threats. Our NGFW service blends
                visibility, control, and protection into a unified, adaptive
                defense.
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
                  What is <span> Next-Gen Firewall?</span>
                </h3>
                <div className="para-content">
                  <p>
                    A Next-Generation Firewall (NGFW) is an advanced type of
                    firewall that goes beyond traditional network filtering. It
                    combines packet filtering with deep packet inspection to
                    analyze traffic in detail. NGFWs can identify and block
                    threats like malware, intrusions, and application-based
                    attacks. They often include features like intrusion
                    prevention systems (IPS), SSL inspection, and application
                    control. NGFWs work at both the network and application
                    layers for better security. Their goal is to provide more
                    intelligent, real-time protection against modern cyber
                    threats.
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
              Benefits Of <span>  Next-Gen Firewall</span>
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
                <span>  Next-Gen Firewall</span>
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
              <p>5-Step Process for Impleting </p>
              <h2>  Next-Gen Firewall</h2>
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
            <h2 className="why-us-title">Why Our Service is Best ?</h2>
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

export default Transition(NextGenFirewall);