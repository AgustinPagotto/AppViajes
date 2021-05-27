export const ADD_TRAVEL = "ADD_TRAVEL";

export const addTravel = (title) => {
  return { type: ADD_TRAVEL, placeData: { title: title } };
};
