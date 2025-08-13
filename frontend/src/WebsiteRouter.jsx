import React, { useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPageFinal from "./Pages/ContactPageFinal";

import PenTesting from "./Pages/Services/Penetration Testing";
import Endpointsecurity from "./Pages/Services/Endpointsecurity";
import NextGenerationFirewall from "./Pages/Services/Next-Gen Firewall";
import Emailsecurity from "./Pages/Services/Email Security Proactive";
import MalwareAnalysis from "./Pages/Services/Malware Analysis";
import CyberLegalSupport from "./Pages/Services/Cyberlegal Support";
import CyberSecurityTraining from "./Pages/Services/CyberSecurity Training";
import SecureCodeReview from "./Pages/Services/Secure Code Review";
import ThreatIntelligence from "./Pages/Services/Threat Intelligence";

import Header from "./Components/Header";
import Intro from "./Components/Intro";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-datepicker/dist/react-datepicker.css";
import ScrollToTop from "./ScrollToTop";

function WebsiteRouter() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div>
      <div className="head">
        <Header />
      </div>
      <ScrollToTop/>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPageFinal />} />
          <Route path="/PenTesting" element={<PenTesting />} />
          <Route path="/EndpointSecurity" element={<Endpointsecurity />} />
          <Route
            path="/NextGenerationFirewall"
            element={<NextGenerationFirewall />}
          />
          <Route path="/EmailSecurity" element={<Emailsecurity />} />
          <Route path="/MalwareAnalysis" element={<MalwareAnalysis />} />
          <Route path="/CyberLegalSupport" element={<CyberLegalSupport />} />
          <Route
            path="/CyberSecurityTraining"
            element={<CyberSecurityTraining />}
          />
          <Route path="/SecureCodeReview" element={<SecureCodeReview />} />
          <Route path="/ThreatIntelligence" element={<ThreatIntelligence />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default WebsiteRouter;
