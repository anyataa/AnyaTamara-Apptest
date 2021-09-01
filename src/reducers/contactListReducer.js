const INITIAL_STATE = [
  {
    id: 0,
    firstName: "",
    lastName: "",
    age: "",
    photo: "",
  },
];

const CONTACT_MODEL = {
  id: 0,
  firstName: "",
  lastName: "",
  age: "",
  photo: "",
};

var Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET":
      // INITIAL_STATE = action.payload;
      return action.payload;
    case "UPDATE":
      return INITIAL_STATE.concat(action.payload);
    default:
      return state;
  }
};

export default Reducer;
