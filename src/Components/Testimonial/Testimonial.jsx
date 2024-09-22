import React, { useRef } from "react";
import "./Testimonial.css";
export default function Testimonial() {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonial">
      <img
        src="/assets/edusity_assets/next-icon.png"
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src="/assets/edusity_assets/back-icon.png"
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="/assets/edusity_assets/user-1.png" alt="" />
                <div>
                  <h2>Sohel Rana 1</h2>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>ipioidaxkouweguooawdholcdbzouwohohiwdi</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="/assets/edusity_assets/user-2.png" alt="" />
                <div>
                  <h2>skjshsm 2</h2>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>ipioidaxkouweguooawdholcdbzouwohohiwdi</p>
            </div>
          </li>{" "}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="/assets/edusity_assets/user-3.png" alt="" />
                <div>
                  <h2>skjshsm 3</h2>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>ipioidaxkouweguooawdholcdbzouwohohiwdi</p>
            </div>
          </li>{" "}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="/assets/edusity_assets/user-1.png" alt="" />
                <div>
                  <h2>skjshsm 4</h2>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>ipioidaxkouweguooawdholcdbzouwohohiwdi</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
