import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import swal from "sweetalert";
import { onUpdateContact } from "../actions";
import { API } from "../Util/constant";
import ImageInput from "./ImageInput";
import { InputBox } from "./InputBox";

export const ContactDetail = (props) => {
  const { path } = useRouteMatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setage] = useState(0);
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);

  useEffect(() => {
    getContactById();
    props.match.params.id !== "addContact"
      ? setPhoto(contact.photo)
      : setPhoto("N/A");
  }, []);

  const getContactById = () => {
    props.match.params.id !== "addContact"
      ? axios
          .get(`${API}/contact/${props.match.params.id}`)
          .then((res) => {
            if (res.data.message.includes("Get")) {
              setFirstName(res.data.data.firstName);
              setLastName(res.data.data.lastName);
              setage(res.data.data.age);
              dispatch(
                onUpdateContact({
                  ...contact,
                  age: res.data.data.age,
                  id: res.data.data.id,
                  firstName: res.data.data.firstName,
                  lastName: res.data.data.lastName,
                  photo: res.data.data.photo,
                })
              );
            }
          })
          .catch((error) => {
            console.log(error);
          })
      : setPhoto("N/A");
    setFirstName("");
    setLastName("");
    setage(0);
    dispatch(
      onUpdateContact({
        ...contact,
        age: 0,
        id: "0",
        firstName: "",
        lastName: "",
        photo: "",
      })
    );
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  const onDelete = () => {
    swal({
      title: "Are you sure you want to delete?",
      text: "you can not undo this action ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${API}/contact/${props.match.params.id}`)
          .then((res) => {
            if (res.data.message.includes("deleted")) {
              swal("Deleted!", {
                icon: "success",
              });
              dispatch(
                onUpdateContact({
                  ...contact,
                  id: "",
                  firstName: "",
                  lastName: "",
                  photo: "",
                  age: 0,
                })
              );
            }
          })
          .catch((error) => {
            swal({
              title: "Error",
              text: "Please try again and check your connection",
              icon: "error",
              button: "Done",
            });
            console.log(error);
          });
      } else {
        swal("Cancel the delete action");
      }
    });
  };

  const putMehod = () => {
    console.log(photo, contact.photo);
    axios
      .put(`${API}/contact/${props.match.params.id}`, {
        firstName,
        lastName,
        age,
        photo,
      })
      .then((res) => {
        if (res.data.message.includes("Contact edited")) {
          swal({
            title: "Contact Edited",
            text: `Successfuly saving ${
              res.data.data.firstName + " " + res.data.data.lastName
            }`,
            icon: "success",
            button: "Done",
          });
          dispatch(
            onUpdateContact({
              ...contact,
              age: res.data.data.age,
              id: res.data.data.id,
              firstName: res.data.data.firstName,
              lastName: res.data.data.lastName,
              photo: res.data.data.photo,
            })
          );
        }
      })
      .catch((e) => {
        swal({
          title: "Fail to Edit",
          text: `Please check your connection and retry`,
          icon: "error",
          button: "Done",
        });
        console.log(e);
      });
  };

  const postMethod = () => {
    axios
      .post(`${API}/contact`, {
        firstName,
        lastName,
        age,
        photo,
      })
      .then((res) => {
        if (res.data.message.includes("contact saved")) {
          swal({
            title: "Contact Saved",
            text: `Successfuly saving the contact`,
            icon: "success",
            button: "Done",
          });
        } else {
          swal({
            title: "Error",
            text: "Please try again and check your connection",
            icon: "error",
            button: "Done",
          });
        }
      })
      .catch((e) => {
        swal({
          title: "Error",
          text: "Please try again and check your connection",
          icon: "error",
          button: "Done",
        });
        console.log(e);
      });
  };

  const onSubmit = (e) => {
    props.match.params.id !== "addContact" ? putMehod() : postMethod();
  };

  return (
    <div>
      <div className="personal-information-top-container">
        <div className="set-to-left">
          <h1 className="col-dark-grey">
            {" "}
            {props.match.params.id !== "addContact" ? "Details" : "Add Contact"}
          </h1>
        </div>
        <form onSubmit={(e) => submitForm(e)} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <p className="center-paragraf">
            <span className="col-grey-purple"> Upload image</span>
            <br /> or
          </p>
          <input
            placeholder="Copy Image URL Here"
            className="image-url"
            type="text"
            value={photo}
            onInput={(e) => setPhoto(e.target.value)}
          />
        </form>
      </div>

      <div className="bottom-personal-information-container">
        <ul>
          <li>
            {/* <InputBox
              label="First Name"
              value={firstName}
              type={"text"}
              method={() => setFirstName()}
            /> */}
            <div className="card-notification">
              <div className="divide-for-manage ">
                <div>
                  <p className="col-grey">First Name</p>
                  <input
                    value={firstName}
                    placeholder="Example : John"
                    className="col-dark-grey "
                    type="text"
                    onInput={(e) => setFirstName(e.target.value)}
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

          <li>
            <div className="card-notification">
              <div className="divide-for-manage ">
                <div>
                  <p className="col-grey">Last Name</p>
                  <input
                    value={lastName}
                    placeholder="Example : Doe"
                    className="col-dark-grey "
                    type="text"
                    onInput={(e) => setLastName(e.target.value)}
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
          {/* <InputBox label="Age" value={age} type={"number"} /> */}
          <div className="card-notification">
            <div className="divide-for-manage ">
              <div>
                <p className="col-grey">Age</p>
                <input
                  value={age}
                  className="col-dark-grey "
                  type="number"
                  onInput={(e) => setage(e.target.value)}
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
          <li></li>
        </ul>
      </div>
      <div className="set-transfer-button-confirmation">
        {props.match.params.id !== "addContact" ? (
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            to={`/transfer/${props.match.params.id}/confirmation`}
          >
            <input
              onClick={onDelete}
              type="button"
              value="Delete"
              className="bottom-button bg-danger"
            />
          </button>
        ) : (
          <div></div>
        )}

        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          to={`/transfer/${props.match.params.id}/confirmation`}
        >
          <input
            onClick={onSubmit}
            type="button"
            value="Submit"
            className="bottom-button"
          />
        </button>
      </div>
    </div>
  );
};
