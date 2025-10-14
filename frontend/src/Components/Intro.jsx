// src/Components/Intro.jsx
import React, { useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/blacklogo.png";

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const network = navigator.connection?.effectiveType || "4g";
    let duration = 1; // Default for fast network
    if (network === "3g") duration = 2;
    if (network === "2g" || network === "slow-2g") duration = 3;

    const tl = gsap.timeline({
      onComplete: onFinish,
    });
     tl.fromTo(
        ".intro-text .preloader .circle-logo-intro",
        {
            opacity: 0,
            scale:0.9,
        },
        {
          scale:1,
          opacity: 1,
          duration: 1.5,
        },
        0.5
      )
      .fromTo(
        ".intro-text .preloader .title",
        {
            opacity: 0,
            scale:0.94,
        },
        {
          scale:1,
          opacity: 1,
          duration: 2,
        },
        0.9
      )
      .fromTo(
          ".intro-text .preloader .outro-title",
          {
              opacity: 0,
              // scale:0.98
              
          },
          {
            // scale:1,
            opacity: 1,
            duration: 0.5,
          },1.1
          
        )
      .fromTo(".intro-text .title .heading1 span", 
        {color:"#fff" },
        { color:"#8d8dda",  duration:0.5},
         1.5)

     
      .to(".intro-text", { opacity: 0, scale: 0.5, duration:1 }, "+=1.5");

    return () => tl.kill();
  }, [onFinish]);

  return (
    <div className="intro-text">
       <div className="preloader">
           <div className="circle-logo-intro">
               <img src={logo}></img>
           </div>
           <div className="title">
              <div className="intro-title">
                  <h1 className="heading1">Xecure<span>One</span></h1>
                </div>
              </div>
       </div>
    </div>
  );
};

export default Intro;
