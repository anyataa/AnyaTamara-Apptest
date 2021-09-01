import React from "react";
import {
  FaBorderAll,
  FaLongArrowAltUp,
  FaPlus,
  FaServicestack,
  FaUserAlt,
  FaWallet,
} from "react-icons/fa";
import { Link, useRouteMatch } from "react-router-dom";

export const LeftBar = () => {
  const { path } = useRouteMatch();

  return (
    <div className="left">
      <div className="left-top">
        <Link style={{ textDecoration: "none" }} to="/dashboard">
          <div
            className={
              path == "/dashboard" ? "item-wrapper active" : "item-wrapper"
            }
          >
            <FaBorderAll className="label-size" />
            <p className="label label-size">Dashboard</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/transfer">
          <div
            className={
              path == "/transfer" ? "item-wrapper active" : "item-wrapper"
            }
          >
            <FaLongArrowAltUp className="label-size" />
            <p className="label label-size">Contact List</p>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/billing">
          <div
            className={
              path == "/billing" ? "item-wrapper active" : "item-wrapper"
            }
          >
            <FaServicestack className="label-size" />
            <p className="label label-size">Add Contact</p>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/topup">
          <div
            className={
              path == "/topup" ? "item-wrapper active" : "item-wrapper"
            }
          >
            <FaPlus className="label-size" />
            <p className="label label-size">Top Up</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/retrieval">
          <div
            className={
              path == "/retrieval" ? "item-wrapper active" : "item-wrapper"
            }
          >
            <FaWallet className="label-size" />
            <p className="label label-size">Retrieval</p>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/profil">
          <div
            className={
              path == "/profil" ? "item-wrapper active" : "item-wrapper"
            }
          >
            <FaUserAlt className="label-size" />
            <p className="label label-size">Profile</p>
          </div>
        </Link>
      </div>
      <div className="item-wrapper">
        <img src="../assets/images/log-out.svg" alt="" />
        <p className="label">Logout</p>
      </div>
    </div>
  );
};
