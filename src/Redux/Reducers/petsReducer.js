const pets = (state = [], action) => {
    switch (action.type) {
        case 'SET_PETS':
            let pets = action.payload.data;
            const petObjects = pets.map(([id, name, breed, color, is_checked_in, owners_id]) => ({
                id,
                name,
                breed,
                color,
                is_checked_in,
                owners_id
            }))
            return petObjects;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default pets;