import { combineReducers } from "redux";
import contactList from "./contactListReducer";
import contact from "./contactReducer";

export default combineReducers({
  contactList,
  contact,
});
