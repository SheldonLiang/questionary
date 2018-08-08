import * as actionTypes from '../actions/actions';

const initialState = {
    userName: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                userName: action.value
            }
    }
    return state;
};

export default reducer;