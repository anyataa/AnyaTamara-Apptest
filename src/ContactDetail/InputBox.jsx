import React from "react";

export const InputBox = (props) => {
  return (
    <div className="card-notification">
      <div className="divide-for-manage ">
        <div>
          <p className="col-grey">{props.label}</p>
          <input
            value={props.value}
            className="col-dark-grey "
            type={props.type}
            onInput={(e) => props.method(e.target.value)}
          />
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
