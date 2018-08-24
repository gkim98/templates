// reducer for single-value states

const optionsReducerDefaultState = {
    show1: true,
    show2: true,
    show3: true,
    show4: true 
};

const optionsReducer = (state=optionsReducerDefaultState, action) => {

    switch(action.type) {
        case 'TOGGLE1':
            let switched1 = !state.show1
            return {
                ...state,
                show1: switched1
            }
        case 'TOGGLE2':
            let switched2 = !state.show2
            return {
                ...state,
                show2: switched2
            }
        case 'TOGGLE3':
            let switched3 = !state.show3
            return {
                ...state,
                show3: switched3
            }
        case 'TOGGLE4':
            let switched4 = !state.show4
            return {
                ...state,
                show4: switched4
            }
        default:
            return state
    }
}

export default optionsReducer;