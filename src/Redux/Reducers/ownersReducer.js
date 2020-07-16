const owners = (state = [], action) => {
  switch (action.type) {
    case "SET_OWNERS":
      console.log(action.payload.data);
      let petOwners = action.payload.data;

      const ownerObjects = petOwners.map(([key, firstName, lastName]) => ({
        key,
        firstName,
        lastName,
      }));

      console.log(ownerObjects);
      return ownerObjects;
    default:
      return state;
  }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default owners;
