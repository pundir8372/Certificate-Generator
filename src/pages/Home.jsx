import React from "react";
import { toast } from "react-toastify";
import { useAppContext } from "../AppContext"; // Import the context
import "./Home.css";

const Home = () => {
  const { setIsDisabled } = useAppContext(); // Use context

  const handleGetStarted = () => {
    toast.info("Click on 'Generate Certificate' to proceed.");
    setIsDisabled(false); // Update context state
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the <span>Certificate Generator</span></h1>
          <p>Were you a part of the event? Generate your participation certificate here.</p>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
