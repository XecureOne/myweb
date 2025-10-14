import React from "react";
import { useState, useEffect } from "react";
import "../Styles/ContactPageFinal.css";
import { gsap } from "gsap";
// import axios from "axios";
import API from "../Admin/api/api";
import { VscArrowCircleUp } from "react-icons/vsc";
import GetSecured from "../Components/GetSecured";
import Footer from "../Components/Footer";
import Transition from "./Transition";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

function ContactPageFinal() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    companyType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/message/post", formData);

      if (res.status === 200) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          location: "",
          companyType: "",
          message: "",
        });
      } else if (res.status === 207) {
        toast.error("Failed to Submit try after some times");
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error(
        "Something went wrong: " +
          (err.response?.data?.error || "unknown error")
      );
    } finally {
      setLoading(false);
    }
  };
  //  landing page aimation
  useEffect(() => {
    let ctxs = gsap.context(() => {
      const tla = gsap.timeline();

      tla.to(".about-page-fixed", {
        opacity: 0,
        duration: 0.5,
        ease: "ease",
        display: "none",
      });
    });
    return () => ctxs.revert();
  }, []);

  return (
    <div>
      <div className="content-contact">
        <div className="about-page-fixed"></div>
        <div className="contactpage-overall-container">
          <div className="cp-first-section ap-first-section">
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
              <button className="about-title-tag">Contact Us</button>
              <h1>
                Let`s Secure<br></br>
                <span>Your Future, Together.</span>
              </h1>
              <p>
                We value your feedback and are always open to hearing from you.
                Whether you have a question, a suggestion, or just want to say
                hello, we'd love to hear from you.
              </p>
            </div>
            <div className="btn">
              {/* <div className="let-connect-btn">Let`s Connect</div> */}
              <div
                className="our-service-btn"
                onClick={() => {
                  navigate("/", {
                    state: { scrollTo: "explore-services-section" },
                  });
                }}
              >
                Our Services
              </div>
            </div>
          </div>

          <div className="cp-second-section">
            <div className="c-circle-bg-3"></div>
            <div className="c-circle-bg-4"></div>

            <div className="heading">
              <h2>Get in Touch</h2>
              <p>
                We are here to help you with any questions or concerns you may
                have. Please fill out the form below, and we will get back to
                you as soon as possible.
              </p>
            </div>
            <div className="form-content">
              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <label>
                    <p>Name:</p>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    <p>Email:</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <div className="contact-row">
                    <label>
                      <p>Where are you from?</p>
                      <input
                        type="text"
                        name="location"
                        placeholder="Your location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      <p>What’s the type of your company?</p>
                      <input
                        type="text"
                        name="companyType"
                        placeholder="Company type"
                        value={formData.companyType}
                        onChange={handleChange}
                      />
                    </label>
                  </div>

                  <label>
                    <p>Message:</p>
                    <textarea
                      name="message"
                      placeholder="Type your message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Now"}
                  </button>
                </form>
              </div>
              <div className="contact-right-container">
                <div className="contact-right">
                  <div
                    className="right-boxs right-box1"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/xecureone",
                        "_blank"
                      )
                    }
                  >
                    <div className="boxs-inside">
                      <div className="box1-over-div-bg over-div-bg"></div>
                      <div className="boxs-profile">
                        <p>Linkedin</p>
                      </div>
                      <div className="boxs-up-arrow">
                        <VscArrowCircleUp className="boxs-up-arrowicon" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="right-boxs right-box2"
                    onClick={() =>
                      window.open("https://wa.me/917994695366", "_blank")
                    }
                  >
                    <div className="boxs-inside">
                      <div className="box1-over-div-bg over-div-bg"></div>
                      <div className="boxs-profile">
                        <p>Whatsapp</p>
                      </div>
                      <div className="boxs-up-arrow">
                        <VscArrowCircleUp className="boxs-up-arrowicon" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="right-boxs right-box3"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/xecureone?igsh=MXV3ZDVpNHIydGdzbA==",
                        "_blank"
                      )
                    }
                  >
                    <div className="boxs-inside">
                      <div className="box1-over-div-bg over-div-bg"></div>
                      <div className="boxs-profile">
                        <p>Instagram</p>
                      </div>
                      <div className="boxs-up-arrow">
                        <VscArrowCircleUp className="boxs-up-arrowicon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cp-third-section">
            <GetSecured />
          </div>
        </div>
        <div className="cp-fourth-section">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Transition(ContactPageFinal);
