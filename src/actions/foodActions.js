import { FETCH_FOOD_LIST, FETCH_FOOD_FIND, FETCH_FOOD_DETAIL } from "./types";
import axios from "axios";

/*
    1. 구분자 생성: types.js
        export const FETCH_MAIN_DATA = 'FETCH_MAIN_DATA'
    2. 데이터 처리 함수: foodActions.js
        export const fetchFoodList = (no) => async dispatch => {
            axios / fetch...
        }
        -> reducer 로 전송
        dispatch({
            type: types 에 등록된 상수,
            payload: res.data
        })
    3. reducer 에서 처리
        = 저장할 변수 설정
        const foodState = {
            food_list: {},
            find_list: {},
            food_detail: {}
        }
        dispatch 에서 호출
        export default function(state = foodState, action) {

        }
    4. store 에 저장
        -> 모든 데이터 첨부 reducer: rootReducer
    5. store 에 있는 데이터를 읽어서 화면에 출력
        useSelector() -> react 에서 출력

        Dispatch  Dispatch   Dispatch
    React -> Action -> Reducer -> Store
 */
export const fetchFoodList = (page) => async dispatch => {
    try {
        const res = await axios.get('http://localhost/food/list-react', {
            params: {
                page: page,
            }
        });
        dispatch({
            type: FETCH_FOOD_LIST,
            payload: res.data,
        })
    } catch (Error) {
        console.error('err: ', Error);
    }

}

export const fetchFoodDetail = (fno) => async dispatch => {
    try {
        const res = await axios.get('http://localhost/food/detail-react', {
            params: {
                fno: fno,
            }
        });
        dispatch({
            type: FETCH_FOOD_DETAIL,
            payload: res.data,
        })
    } catch (Error) {
        console.error('err: ', Error);
    }
}