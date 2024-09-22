import React from "react";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>we ensure better education for a better world</h1>
        <p>now, we trying to do new things that can be help you next.</p>
        <button className="btn">
          Explore more{" "}
          <img src="/assets/edusity_assets/dark-arrow.png" alt="" />
        </button>
      </div>
    </div>
  );
}
