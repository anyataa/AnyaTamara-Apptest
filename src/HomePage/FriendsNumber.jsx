import React from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

export const FriendsNumber = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div
      className="profile-bottom-container"
      style={{
        position: "fixed",
        left: "31vw",
        width: "50vw",
      }}
    >
      <div
        className="left-dash-bottom-container bg-secondary col-white"
        style={{ height: "25rem", paddingTop: "4rem" }}
      >
        <h1 style={{ marginLeft: "-4rem" }}>
          You have <FaStar color="yellow"></FaStar>
          <br />
        </h1>
        <h1 style={{ marginLeft: "-14rem", fontSize: "6rem" }}>
          {contactList.length}
        </h1>
        <h1 style={{ marginLeft: "-10rem", fontSize: "2rem" }}>Friends</h1>
        <div className="chart-wrapper"></div>
      </div>
    </div>
  );
};
