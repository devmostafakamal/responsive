import React from "react";
import "./Program.css";
export default function Program() {
  return (
    <div className="programs">
      <div className="program">
        <img src="/assets/edusity_assets/program-1.png" alt="" />
        <div className="caption">
          <img src="/assets/edusity_assets/program-icon-1.png" alt="" />
          <p>Gradution Degree</p>
        </div>
      </div>
      <div className="program">
        <img src="/assets/edusity_assets/program-2.png" alt="" />
        <div className="caption">
          <img src="/assets/edusity_assets/program-icon-2.png" alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src="/assets/edusity_assets/program-3.png" alt="" />
        <div className="caption">
          <img src="/assets/edusity_assets/program-icon-3.png" alt="" />
          <p> Post Gradution </p>
        </div>
      </div>
    </div>
  );
}
