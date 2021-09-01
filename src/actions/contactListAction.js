export const onGetAction = (data) => {
  return {
    type: "GET",
    payload: data,
  };
};

export const onUpdate = (data) => {
  return {
    type: "UPDATE",
    payload: data,
  };
};
