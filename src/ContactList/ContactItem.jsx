import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { onGetAction } from "../actions/contactListAction";
import { useEffect, useState } from "react";
import { API } from "../Util/constant";
import { Link } from "react-router-dom";
import ImageInput from "../ContactDetail/ImageInput";

export const ContactItem = (contact) => {
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contactList);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getContact();
  }, []);

  const getContact = () => {
    axios
      .get(`${API}/contact`)
      .then((res) => {
        res.data.message == "Get contacts"
          ? dispatch(onGetAction(res.data.data))
          : setErrorMessage(
              `Something unexpected happen with error code : ${
                res.data.message ? res.data.message : "error"
              }`
            );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderContactList = () => {
    return contactList.map((item) => {
      return (
        <Link
          key={item.id}
          to={`/contactList/${item.id}`}
          style={{ textDecoration: "none" }}
        >
          <li className="list-group-item-custom">
            <div className="list-div">
              <div className="image-fill">
                {/* <img
                  src={item.photo === "N/A" ? "null " : item.photo}
                  alt="user profile "
                /> */}
                <div
                  className="contact-avatar"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundImage:
                      item.photo.length > 4
                        ? `url("${item.photo}")`
                        : `"../Styles/Icons/person.svg"`,
                  }}
                >
                  <div type="hidden" />
                </div>
              </div>

              <div>
                <h2>{item.firstName + " " + item.lastName}</h2>
                <p>{item.age} years old</p>
              </div>
            </div>
          </li>
        </Link>
      );
    });
  };

  return (
    <div>
      <h3>Contact List</h3>
      <ul
        style={{ marginTop: "2rem", height: "65%" }}
        className="list-group  overflow-auto"
      >
        {errorMessage !== "" ? (
          <h1>Sorry, failed to fetch contact list</h1>
        ) : (
          renderContactList()
        )}
      </ul>
    </div>
  );
};
