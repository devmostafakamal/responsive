import React from "react";
import "./Campus.css";
export default function Campus() {
  return (
    <div className="campus">
      <div className="gallery">
        <img src="/assets/edusity_assets/gallery-1.png" alt="" />
        <img src="/assets/edusity_assets/gallery-2.png" alt="" />
        <img src="/assets/edusity_assets/gallery-3.png" alt="" />
        <img src="/assets/edusity_assets/gallery-4.png" alt="" />
      </div>
      <button className="btn dark-btn">
        See more here{" "}
        <img src="/assets/edusity_assets/white-arrow.png" alt="" />
      </button>
    </div>
  );
}
