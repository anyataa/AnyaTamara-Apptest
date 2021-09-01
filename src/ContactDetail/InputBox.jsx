import React from "react";

export const InputBox = (label, successMessage, placeHolder, type) => {
  return (
    <div className="card-notification">
      <div className="divide-for-manage ">
        <div>
          <p className="col-grey">{label}</p>
          <input placeholder="yes" className="col-dark-grey " type="text" />
        </div>
        <p
          style={{
            fontSize: "18px",
            textDecoration: "none",
            paddingLeft: "0vw",
            color: "#6379F4",
            cursor: "default",
          }}
          className="col-secondary"
        ></p>
      </div>
    </div>
  );
};
