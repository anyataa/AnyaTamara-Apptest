const INITIAL_STATE = {
  id: 0,
  firstName: "",
  lastName: "",
  age: "",
  photo: "",
};

var Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...INITIAL_STATE,
        id: action.payload.data.id,
        firstName: action.payload.data.firstName,
        lastName: action.payload.data.lastName,
        age: action.payload.data.age,
      };
    default:
      return state;
  }
};

export default Reducer;
