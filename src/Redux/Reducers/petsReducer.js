const pets = (state = [], action) => {
    switch (action.type) {
        case 'SET_PETS':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default pets;