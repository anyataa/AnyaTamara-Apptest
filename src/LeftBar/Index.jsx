import React from "react";
import {
  FaBook,
  FaCode,
  FaHome,
  FaMobile,
  FaPlus,
  FaSmile,
} from "react-icons/fa";
import { Link, useRouteMatch } from "react-router-dom";

export const LeftBar = () => {
  const { path } = useRouteMatch();
  const goToGitHub = () => {
    window.location.href = "https://github.com/anyataa/AnyaTamara-Apptest";
  };

  return (
    <div className="left">
      <div className="left-top">
        <Link style={{ textDecoration: "none" }} to="/">
          <div className={path == "/" ? "item-wrapper active" : "item-wrapper"}>
            <FaHome className="label-size" />
            <p className="label label-size">Home</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contactList">
          <div
            className={
              path == "/contactList" ? "item-wrapper active" : "item-wrapper"
            }
          >
            <FaBook className="label-size" />
            <p className="label label-size">Contact List</p>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/contactList/addContact">
          <div
            className={
              path == "/contactList/addContact"
                ? "item-wrapper active"
                : "item-wrapper"
            }
          >
            <FaPlus className="label-size" />
            <p className="label label-size">Add Contact</p>
          </div>
        </Link>
        {/* <Link style={{ textDecoration: "none" }} to="/phoneView">
          <div
            className={
              path == "/retrieval" ? "item-wrapper active" : "item-wrapper"
            }
          >
            <FaMobile className="label-size" />
            <p className="label label-size">Phone View</p>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/profil">
          <div
            className={
              path == "/profil" ? "item-wrapper active" : "item-wrapper"
            }
          >
            <FaSmile className="label-size" />
            <p className="label label-size">UI Design</p>
          </div> */}
        {/* </Link> */}
      </div>
      <div className="item-wrapper">
        <FaCode className="label-size" />
        <p onClick={(e) => goToGitHub()} className="label">
          Source Code
        </p>
      </div>
    </div>
  );
};
