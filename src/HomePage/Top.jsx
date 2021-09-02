import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onGetAction } from "../actions/contactListAction";
import { API } from "../Util/constant";

export const TopHome = () => {
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
    <div className="profile-top-container set-margin-for-dash bg-primary">
      <div className="margin-profile-container">
        <div className="balance-detail">
          <div className="row-balance">
            <h3 className="col-secondary">
              {" "}
              Meet Friends, <br /> No Farewell
            </h3>
            <h1 className="col-secondary">
              Chat
              <br /> Hangout <br /> Connected
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
              <p style={{ marginLeft: "10rem" }}>
                {" "}
                Video Credits : www.Glitch.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
