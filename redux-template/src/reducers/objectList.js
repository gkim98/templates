// reducer for storing a list of objects

const objectListReducerDefaultState = [];

const objectListReducer = (state=objectListReducerDefaultState, action) => {

    switch(action.type) {
        case 'ADD_OBJECT':
            return [...state, action.item]
        default:
            return state
    }
}

export default objectListReducer;