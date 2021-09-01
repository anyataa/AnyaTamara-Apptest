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
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        age: action.payload.age,
        photo: action.payload.photo,
      };
    default:
      return state;
  }
};

export default Reducer;
