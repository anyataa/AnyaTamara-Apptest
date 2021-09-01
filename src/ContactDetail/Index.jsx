import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { onUpdateContact } from "../actions";
import { API } from "../Util/constant";
import ImageInput from "./ImageInput";
import { InputBox } from "./InputBox";

export const ContactDetail = (props) => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);

  useEffect(() => {
    getContactById();
  }, []);
  const getContactById = () => {
    axios
      .get(`${API}/contact/${props.match.params.id}`)
      .then((res) => {
        if (res.data.message.includes("Get")) {
          console.log(res.data.data.id);
          console.log(contact);
          dispatch(
            onUpdateContact({
              ...contact,
              id: res.data.data.id,
              firstName: res.data.data.firstName,
              lastName: res.data.data.lastName,
              photo: res.data.data.photo,
            })
          );
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div>
      <div className="personal-information-top-container">
        <div className="set-to-left">
          <h1 className="col-dark-grey">Details</h1>
        </div>
        <form onSubmit={(e) => submitForm(e)} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
        </form>
      </div>

      {/* Top End */}

      <div className="bottom-personal-information-container">
        <ul>
          {/* <!-- 1 --> */}
          <li>
            <div className="card-notification">
              <div className="divide-for-manage ">
                <div>
                  <p className="col-grey">First Name</p>
                  <input
                    placeholder={contact.firstName}
                    className="col-dark-grey "
                    type="text"
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
          </li>
          {/* <!-- 2 --> */}
          <li>
            <div className="card-notification">
              <div className="divide-for-manage ">
                <div>
                  <p className="col-grey">Last Name</p>
                  <input
                    placeholder={contact.lastName}
                    className="col-dark-grey "
                    type="text"
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
          </li>
          {/* <!-- 3 --> */}
          {/* <!-- 4 --> */}
          <li>
            <div>
              <Link
                to="/profil/personalinfo/upgrade"
                style={{ textDecoration: "none" }}
              >
                <div className="card-notification-button ">
                  <h2>Submit</h2>
                </div>
              </Link>
              <Link
                to="/profil/personalinfo/upgrade"
                style={{ textDecoration: "none" }}
              >
                <div className="card-notification-button ">
                  <h2>Cancel</h2>
                </div>
              </Link>
            </div>
          </li>
        </ul>
        {/* <!-- Finish --> */}
      </div>
    </div>
  );
};
