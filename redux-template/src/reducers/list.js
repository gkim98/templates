// reducer for storing a list

const listReducerDefaultState = [];

const listReducer = (state=listReducerDefaultState, action) => {

    switch(action.type) {
        case 'ADD':
            return [...state, action.item]
        case 'REMOVE':
            return state.filter((item) => {
                return item !== action.item;
            })
        default:
            return state
    }
}

export default listReducer;