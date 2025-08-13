import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Whychoose.css";
import { collectMotionValues, color } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function WhyChooseUs() {
  const sectionRef = useRef();
  const headingRef = useRef();
  const subHeadingRef = useRef();
  const linesRef = useRef([]);
  return (
    <div>
      <div className="why-choose-us" ref={sectionRef}>
        <div className="card whychoose-card">
          <div className="blur-circle circle1 whychoose-circle1"></div>
          <div className="blur-circle circle2 whychoose-circle2"></div>
          <div className="blur-circle circle3 whychoose-circle3"></div>
        </div>
        <div className="whychoose-content">
          <h1 className="heading" ref={headingRef}>
            Why Choose XecureOne?
            <div className="line-style"></div>
          </h1>
          <h3 className="sub-heading" ref={subHeadingRef}>
            Our Commitment, Your Shield
          </h3>
          <div>
            <p className="para-content">
              <span>Industry-Leading Expertise:</span> Our team combines deep cybersecurity
              knowledge with innovative technology to deliver solutions that
              proactively protect your business against evolving threats.
            </p>
            <p className="para-content">
              <span>Strategic Advantage:</span> We transform cybersecurity challenges into
              growth opportunities by aligning robust security measures with
              your business goals, empowering you to operate confidently in the
              digital landscape.
            </p>
            <p className="para-content">
              <span>Trusted Partnership:</span> At XecureOne, integrity, transparency, and
              excellence guide everything we do—ensuring your critical assets
              and data remain secure today and in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
