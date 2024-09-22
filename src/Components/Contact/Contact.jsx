import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const formRef = useRef();
  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q0imdop", "template_b4olfex", formRef.current, {
        publicKey: "yPze5tu9-_8xJ9Vav",
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          handleShowMessage();
          formRef.current.reset();
        } else {
          setSuccess(false);
          handleShowMessage();
        }
      });
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message{" "}
          <img src="/assets/edusity_assets/msg-icon.png" alt="" />
        </h3>
        <p>kdsmdjnczjacx ajldalkxzcl</p>
        <ul>
          <li>
            <img src="/assets/edusity_assets/mail-icon.png" alt="" />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src="/assets/edusity_assets/phone-icon.png" alt="" />
            +389572002
          </li>
          <li>
            <img src="/assets/edusity_assets/location-icon.png" alt="" />
            Cambridge, United State
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={sendMail} ref={formRef}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            row="6"
            placeholder="Enter your massage"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now{" "}
            <img src="/assets/edusity_assets/white-arrow.png" alt="" />
          </button>
        </form>
        <span></span>
      </div>
    </div>
  );
}
