import { delay, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

// 액션생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });
// 초깃값
const initialState = 0;

export function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
}
export function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}
export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const reducer = handleActions(
    {
        [INCREASE]: (state, action) => {
            return state + 1;
        },
        [DECREASE]: (state, action) => {
            return state - 1;
        },
    },
    initialState
);

export default reducer;
