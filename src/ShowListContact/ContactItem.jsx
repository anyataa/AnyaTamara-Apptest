import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { onGetAction } from "../actions/contactListAction";
import { useEffect, useState } from "react";
import { API } from "../Util/constant";

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
        console.log(res);
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

  return (
    <div className="right container">
      <ul class="list-group">
        {errorMessage !== "" ? (
          <h1>Sorry, failed to fetch contact list</h1>
        ) : (
          contactList.map((item) => {
            return (
              <li key={item.id} className="list-group-item">
                <div className="list-div">
                  <h2>{item.firstName + " " + item.lastName}</h2>
                  <h3>{item.age}</h3>
                  <p>{item.id}</p>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};
