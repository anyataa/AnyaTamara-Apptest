import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { onGetAction } from "../actions/contactListAction";
import { useEffect, useState } from "react";
import { API } from "../Util/constant";
import { Link } from "react-router-dom";

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
          <li className="list-group-item">
            <div className="list-div">
              <div className="image-fill">
                <img
                  src={item.photo === "N/A" ? "null " : item.photo}
                  alt="user profile "
                />
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
    <ul className="list-group">
      {errorMessage !== "" ? (
        <h1>Sorry, failed to fetch contact list</h1>
      ) : (
        renderContactList()
      )}
    </ul>
  );
};
