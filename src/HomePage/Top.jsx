import React from "react";
import { FaArrowUp, FaPlus, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

export const TopHome = () => {
  return (
    <div className="profile-top-container set-margin-for-dash bg-primary">
      <div className="margin-profile-container">
        <div className="balance-detail">
          <div className="row-balance">
            <h3 className="col-secondary"> Meet Friends, No Farewell</h3>
            <h1 className="col-secondary">
              Chat, Hangout , <br /> Connected
            </h1>
          </div>
          <div className="row-balance"></div>
          <div className="row-balance">
            <div style={{ boxSizing: "border-box", marginTop: "-2rem" }}>
              <video
                src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FGLT_HomePage_2mb.mp4?v=1612813389862"
                playsinline=""
                loop="true"
                width="560"
                height="215"
                preload="auto"
                autoplay="true"
                class="css-wmv7lc"
              >
                {" "}
                Credits : Glitch.com and Sorry, your browser doesn't support
                embedded videos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
