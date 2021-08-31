import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { onGet, onGetAction } from "./actions/contactListAction";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contactList);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getContact();
  }, []);

  const getContact = () => {
    axios
      .get("https://simple-contact-crud.herokuapp.com/contact")
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

  return <div className="App">{contactList[0].id}</div>;
}

export default App;
