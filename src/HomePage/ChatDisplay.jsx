import axios from "axios";
import React, { useEffect } from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { SiAirplayvideo } from "react-icons/si";
import { useDispatch } from "react-redux";
import { onGetAction } from "../actions/contactListAction";
import { API } from "../Util/constant";

export const ChatDisplay = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getContact();
  }, []);
  const getContact = () => {
    axios
      .get(`${API}/contact`)
      .then((res) => {
        res.data.message == "Get contacts"
          ? dispatch(onGetAction(res.data.data))
          : console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="profile-bottom-container"
      style={{
        position: "fixed",
        zIndex: "0",
        right: "-10vw",
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
