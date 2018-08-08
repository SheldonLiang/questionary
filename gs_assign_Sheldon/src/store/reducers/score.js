import * as actionTypes from '../actions/actions';

const initialState = {
    score: 0,
    currentId: 0,
    scores: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT:
            state.scores.push(action.sco)
            return {
                ...state,
                score: state.score + action.sco,
                currentId: state.currentId + 1,
                scores: state.scores
            }
        case actionTypes.BACK:
            return {
                ...state,
                currentId: state.currentId - 1,
                score: state.score - state.scores.pop()
            }
    }
    return state;
};

export default reducer;