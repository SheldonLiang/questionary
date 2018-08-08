const initialState = {
    userName: 'sheldon',
    score: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                userName: action.value
            }
        case 'SELECT':
            return {
                ...state,
                score: state.score + action.sco
            }
        case 'BACK':
            return {
                ...state,
                score: state.score - action.sco
            }
    }
    return state;
};

export default reducer;