const owners = (state = [], action) => {
    switch (action.type) {
        case 'SET_OWNERS':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default owners;