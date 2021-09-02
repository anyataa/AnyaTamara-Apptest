import React from "react";
import { FaBeer, FaStar } from "react-icons/fa";
import { BsFillChatSquareDotsFill } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <div className="d-flex justify-content-between nav-container">
          <h2 className="label-brand col-secondary">Contactify</h2>
          <div>
            <div className="profile-img">
              <input id="notif-btn" type="checkbox" hidden={true} />
              <label htmlFor="notif-btn">
                <h2 className="fa fa-bell icon-notif label-brand">
                  click to know more &nbsp;&nbsp;&nbsp;&nbsp;
                  <BsFillChatSquareDotsFill className="label-brand" />
                </h2>
              </label>
              {/* <!-- Nav Bar Body --> */}
              <div className="wrapper-notification">
                <p className="detail-notif-duration">Did you know?</p>
                <li>
                  <div className="card-notification">
                    <p className="detail-notif-duration">
                      Based on NBC{" "}
                      <span
                        className="col-secondary"
                        style={{ fontWeight: "bold" }}
                      >
                        75% people
                      </span>{" "}
                      feeling disconnected
                    </p>

                    <div className="notif-detail">
                      <p></p>
                    </div>
                  </div>
                </li>

                <div className="card-notification" style={{ height: "250px" }}>
                  <p className="col-grey">
                    <span
                      className="col-secondary"
                      style={{ fontWeight: "bold" }}
                    >
                      Contactify
                    </span>{" "}
                    was invented in order to help and remind you to get
                    connected again with everyone around you. See you soon.
                  </p>
                  <img />
                </div>
              </div>
              {/* <!-- End Nav Body --> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
