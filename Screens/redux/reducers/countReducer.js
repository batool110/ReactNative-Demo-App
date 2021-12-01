import { COUNTER_CHANGE } from '../constants';

const initialState = {
    count: 0
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state, // state
                count: action.payload // payload is the count value
            };
        default:
            return state;
    }
}

export default countReducer;