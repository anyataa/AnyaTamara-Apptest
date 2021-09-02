import React from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { SiAirplayvideo } from "react-icons/si";

export const ChatDisplay = () => {
  return (
    <div
      className="profile-bottom-container"
      style={{
        position: "fixed",
        right: "-12vw",
        width: "50vw",
      }}
    >
      <div
        className="left-dash-bottom-container bg-primary col-secondary"
        style={{ height: "25rem", paddingTop: "1rem" }}
      >
        <h1 style={{ marginLeft: "-3rem" }}>
          Get Connected
          <br />
        </h1>
        <div className="button-alpha" style={{ width: "85%" }}>
          <FaPhone size={25} />
          <h3>Call </h3>
        </div>
        <br />
        <div className="button-alpha" style={{ width: "85%" }}>
          <AiOutlineWechat size={40} />

          <h3>Chat </h3>
        </div>
        <br />
        <div className="button-alpha" style={{ width: "85%" }}>
          <SiAirplayvideo size={30} />
          <h3>Stream </h3>
        </div>

        <div className="chart-wrapper"></div>
      </div>
    </div>
  );
};
