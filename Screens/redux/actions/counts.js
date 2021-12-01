import { COUNTER_CHANGE } from '../constants';

export const changeCount = (count) => {
    return function (dispatch) {
        dispatch({
            type: COUNTER_CHANGE,
            payload: count
        })
    }
}
