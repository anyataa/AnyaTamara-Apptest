import React from "react";
import { FaBeer, FaStar } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="d-flex justify-content-between nav-container">
          <h2 className="label-brand">Contactify</h2>
          <div>
            <div className="profile-img">
              <input id="notif-btn" type="checkbox" hidden={true} />
              <label htmlFor="notif-btn">
                <h2 className="fa fa-bell icon-notif">
                  <FaStar className="label-brand" />
                </h2>
              </label>
              {/* <!-- Nav Bar Body --> */}
              <div className="wrapper-notification">
                <p className="detail-notif-duration">Today</p>
                <li>
                  <div className="card-notification">
                    <div className="card-notification" style={{ height: 195 }}>
                      <p className="col-grey">
                        Oopsie, You Have No Transaction History Yet For Today. .
                        .{" "}
                      </p>

                      <img />
                    </div>

                    <p className="detail-notif-duration">This Week</p>

                    <div className="notif-detail">
                      <p></p>
                      <h2></h2>
                    </div>
                  </div>
                </li>

                <div className="card-notification" style={{ height: 195 }}>
                  <p className="col-grey">
                    Oopsie, You Have No Transaction History Yet For This Week. .
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
