
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
  { label: "Vulnerability Assessment ", key: "antivirus" },
  { label: "Penetration Testing", key: "dlp" },
  { label: "Risk Prioritization ", key: "firewall" },
  { label: "Remediation Guidance ", key: "edr" },
];

const contents = {
  antivirus: {
    title: "Vulnerability Assessment",
    subtitle: `Automatically scans systems to identify potential security weaknesses and 
misconfigurations.`,
    highlight: "What Makes Our Vulnerability Assessment ",
    highlightColor: "Effective",
    features: [
      {
        head: "Automated Scanning",
        desc: ` Automatically scans systems to detect potential security weaknesses 
and misconfigurations. `,
      },
      {
        head: "Weakness Identification",
        desc: `Identifies outdated software, weak configurations, and unpatched 
vulnerabilities.`,
      },
      {
        head: "Security Visibility",
        desc: ` Provides a comprehensive view of weaknesses across the environment.`,
      },
      {
        head: "Compliance Support",
        desc: ` Helps ensure systems meet industry security standards and 
regulations.`,
      },
      {
        head: "Proactive Risk Reduction",
        desc: ` Reduces breach likelihood through early detection and 
intervention. `,
      },
      {
        head: "Continuous Risk Tracking",
        desc: `Monitors for new and emerging threats over time. `,
      },
    ],
  },
  dlp: {
    title: "Penetration Testing",
    subtitle: `Ethical hackers simulate real attacks to exploit vulnerabilities and assess security risks.`,
    highlight: "How Our Penetration Testing ",
    highlightColor: "Measures",
    features: [
      {
        head: "Real-World Attack Simulation",
        desc: "Uses ethical hackers to simulate live attacks and test defenses.",
      },
      {
        head: "Exploit Feasibility Testing",
        desc: "Demonstrates how vulnerabilities can be exploited in practice.",
      },
      {
        head: "Resilience Measurement",
        desc: "Evaluates the organization’s ability to detect, prevent, and respond to attacks.",
      },
      {
        head: "Gap Identification Beyond Tools",
        desc: "Finds vulnerabilities automated scanners may miss.",
      },
      {
        head: "Security Awareness Enhancement",
        desc: "Improves employee and team understanding of threats.",
      },
      {
        head: "Risk-Based Investment Guidance",
        desc: "Helps direct resources toward the most critical vulnerabilities.",
      },
    ],
  },
  firewall: {
    title: "Risk Prioritization",
    subtitle: `Ranks vulnerabilities based on their impact and exploitability to focus on the most 
critical threats.`,
    highlight: "What Makes Our Risk Prioritization ",
    highlightColor: "Impactful",
    features: [
      {
        head: "Impact and Exploitability Ranking",
        desc: "Ranks vulnerabilities based on potential impact and ease of exploitation.",
      },
      {
        head: "Resource Allocation Efficiency",
        desc: "Focuses time and funds on critical issues first.",
      },
      {
        head: "Low-Impact Issue Filtering",
        desc: "Avoids wasting resources on trivial risks.",
      },
      {
        head: "Data-Backed Decision Making",
        desc: "Uses clear severity metrics for prioritization.",
      },
      {
        head: "Business-Relevant Communication",
        desc: "Communicates risks in terms business leaders understand.",
      },
      {
        head: "Alignment with Security Goals",
        desc: "Ensures remediation efforts reflect organizational priorities.",
      },
    ],
  },
  edr: {
    title: "Remediation Guidance ",
    subtitle: `Provides actionable recommendations to fix vulnerabilities and enhance overall 
security posture. `,
    highlight: "What Makes Our Remediation Guidance ",
    highlightColor: "Effective",
    features: [
      {
        head: "Actionable Fixes",
        desc: "Provides clear steps to correct vulnerabilities.",
      },
      {
        head: "Security Best Practices",
        desc: "Recommends controls to prevent recurrence.",
      },
      {
        head: "Faster Vulnerability Closure",
        desc: "Reduces exposure window by accelerating patching.",
      },
      {
        head: "Tailored Remediation Plans",
        desc: "Adjusts solutions to fit the specific environment.",
      },
      {
        head: "Root Cause Elimination",
        desc: "Addresses underlying weaknesses, not just symptoms.",
      },
      {
        head: "Continuous Posture Improvement",
        desc: "Encourages long-term security growth.",
      },
    ],
  },
};

const benefits = [
  {
    title: "Identify Hidden Vulnerabilities",
    img: img1,
    description: `Discover weaknesses in your infrastructure, applications, or configurations before attackers do.`,
  },
  {
    title: "Strengthen Security Posture",
    img: img2,
    description: `Use real-world attack simulation data to enhance your defense mechanisms, patch gaps, and harden systems.`,
  },
  {
    title: "Regulatory Compliance",
    img: img3,
    description: `Meet security audit requirements under standards like PCI-DSS, HIPAA, GDPR, and ISO by validating security controls.`,
  },
  {
    title: "Reduce Breach Risk",
    img: img4,
    description: `Simulate breaches to assess how well your team detects and responds to threats—fine-tuning your SOC or IR processes.`,
  },
  {
    title: "Executive-Level Reporting",
    img: img5,
    description: `Get detailed technical findings along with strategic recommendations presented in easy-to-understand reports for stakeholders.`,
  },
  {
    title: "Improve Incident Response Readiness",
    img: img6,
    description: `Simulate breaches to assess how well your team detects and responds to threats—fine-tuning your SOC or IR processes.`,
  },
];

const needs = [
  {
    title: ". Increasing Sophistication of Cyber Threats",
    description: `Modern attackers use advanced techniques to bypass traditional defenses. Pen 
testing mimics these tactics to expose gaps. `,
  },
  {
    title: "Complex IT Environments ",
    description: `Cloud, mobile, IoT, and hybrid networks introduce new vulnerabilities. Testing 
ensures all layers are secured.`,
  },
  {
    title: " Frequent Changes & Deployments",
    description: `Every system update, app rollout, or integration introduces potential risks. Pen 
testing validates security post-change. `,
  },
  {
    title: "Insider Threat Detection",
    description: `Tests can uncover vulnerabilities that could be exploited internally by 
employees or partners. `,
  },
  {
    title: "Compliance Requirements ",
    description: `Penetration testing is mandated or strongly recommended in many compliance 
frameworks and audits.`,
  },
  {
    title: " Third-Party Risk Exposure",
    description: `Vulnerabilities introduced through vendors or third-party services are often 
overlooked—until tested. `,
  },
  {
    title: " Business Continuity Protection ",
    description: `Pen testing helps prevent attacks that could cripple operations, ensuring 
uninterrupted service delivery. `,
  },
  {
    title: "Brand and Customer Trust",
    description: `Demonstrating security diligence through regular testing boosts customer 
confidence and protects brand reputation. `,
  },
];
const steps = [
  {
    title: " Scoping & Planning ",
    description: `We define the scope, objectives, rules of engagement, and target systems in 
alignment with your goals and risk profile. `,
  },
  {
    title: " Reconnaissance & Enumeration",
    description: `We gather intelligence on systems, domains, services, and potential entry 
points to prepare for the attack simulation. `,
  },
  {
    title: "Exploitation & Privilege Escalation",
    description: `Using safe and controlled methods, our testers attempt to exploit 
vulnerabilities and gain access—just like real attackers would. `,
  },
  {
    title: " Post-Exploitation & Lateral Movement ",
    description: `Once inside, we analyze how far a real attacker could go—accessing data, 
escalating privileges, or moving across the network. `,
  },
  {
    title: "Reporting & Remediation Support",
    description: `You receive a detailed report with identified vulnerabilities, risk ratings, 
exploitation methods, and actionable recommendations. We also support your 
teams in remediation. `,
  },
];

const reasons = [
  {
    title: " Real-World Attack Simulation ",
    description: `Our certified experts use the same tactics as real attackers to uncover the 
vulnerabilities that automated scans miss. `,
  },
  {
    title: "Custom Testing Aligned to Your Needs ",
    description: `From external web apps to internal systems, we tailor every engagement to 
your business, tech stack, and compliance needs. `,
  },
  {
    title: "Expert-Led, Tool-Assisted Approach",
    description: `We combine deep manual testing with advanced tools for a comprehensive 
and accurate assessment. `,
  },
  {
    title: " Clear, Actionable Reporting",
    description: `We deliver both technical deep dives and executive summaries—so everyone 
from IT teams to C-suite can take informed action. `,
  },
  {
    title: "Remediation Guidance & Retesting",
    description: `We don’t just walk away after finding flaws. We help your team fix them and 
retest to ensure the threat is gone. `,
  },
  {
    title: "Confidential, Trusted, and Compliant ",
    description: `We follow industry best practices and strict confidentiality protocols—ensuring 
secure testing without disrupting business operations. `,
  },
];

// gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

function PenetrationTesting() {
  const [selected, setSelected] = useState("antivirus");
  const navigate = useNavigate();

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
                About EndPoint Service
              </button>
              <h1>
                Vulnerability Assessment and Penetration Testing
                <br />
                <span>Exposing Weaknesses Before Attackers Do </span>
              </h1>
              <p>
                At XecureOne, our penetration testing services simulate
                real-world attacks to identify hidden vulnerabilities across
                your systems, networks, and applications. We help you fix flaws
                before adversaries exploit them—ensuring resilience, compliance,
                and trust.
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
                  What is{" "}
                  <span>Vulnerability Assessment and Penetration Testing</span>
                </h3>
                <div className="para-content">
                  <p>
                    Vulnerability Assessment and Penetration Testing (VAPT) is a
                    combined security approach used to identify and fix
                    weaknesses in systems, networks, and applications.
                    Vulnerability Assessment scans and lists potential security
                    flaws without exploiting them. Penetration Testing goes
                    further by simulating real-world attacks to exploit those
                    vulnerabilities. Together, they help measure both the risk
                    and impact of security gaps. VAPT can be performed
                    periodically or after major system changes. Its goal is to
                    strengthen security by finding and fixing weaknesses before
                    attackers can exploit them.
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
              Benefits Of{" "}
              <span>Vulnerability Assessment and Penetration Testing </span>
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
                <span>Vulnerability Assessment and Penetration Testing</span>
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
              <h2>Vulnerability Assessment and Penetration Testing</h2>
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

export default Transition(PenetrationTesting);

