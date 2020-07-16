const gardenBedReducer = (state = [], action) => {
  switch (action.type) {
    case "SET OWNERS":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default gardenBedReducer;
