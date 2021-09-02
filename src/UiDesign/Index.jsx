import React from "react";
import design from "./../Styles/Images/Uidesign.png";

export const UiDesign = () => {
  return (
    <div style={{}} className="overflow-auto right container">
      <img src="https://i.ibb.co/0Y2whyR/Uidesign.png"></img>
      <h1 className="col-secondary">Behind the Design</h1>
      <p className="col-dark-grey">
        Contactify tries to give the user feeling of wisdom, connected, and
        growth feeling. hence during the design phase{" "}
        <span className="col-secondary" style={{ fontWeight: "bold" }}>
          purplish blue
        </span>
        and{" "}
        <span className="col-green bg-secondary" style={{ fontWeight: "bold" }}>
          &nbsp;&nbsp;light green &nbsp;&nbsp;
        </span>{" "}
        were chosen. The green color represents the meaning of growth and
        harmony. While purple bluish represents wisdom and trust.
      </p>
    </div>
  );
};
