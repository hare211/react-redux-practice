import { FETCH_FOOD_LIST, FETCH_FOOD_DETAIL } from "../actions/types";

const foodState = {
    food_list: {},
    find_data: {},
    food_detail: {},
}
/*
    1. types.js: 구분(내부 프로토콜)
        export const FETCH_BOARD_LIST = 'FETCH_BOARD_LIST'
    2. action 함수
        export const fetchBoardList => () => async dispatch => {
            const res = await axios...
            fetch...

            dispatch({
                type: FETCH_BOARD_LIST,
                payload: res.data
            })
        }

 */
export default function (state = foodState, action) {
    switch (action.type) {
        case FETCH_FOOD_LIST:
            return {
                ...state,
                food_list: action.payload,
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail: action.payload,
            }
        default:
            return state;
    }
}

