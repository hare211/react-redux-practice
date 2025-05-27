import { FETCH_FOOD_LIST, FETCH_FOOD_FIND, FETCH_FOOD_DETAIL } from "./types";
import axios from "axios";


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