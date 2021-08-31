const INITIAL_STATE = [
  {
    id: 0,
    firstName: "",
    lastName: "",
    age: "",
    photo: "",
  },
];

var Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET":
      return action.payload;
    default:
      return state;
  }
};

export default Reducer;
