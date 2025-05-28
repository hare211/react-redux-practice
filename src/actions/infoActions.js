import { FETCH_INFO_LIST, FETCH_INFO_DETAIL, FETCH_INFO_FIND } from "./types";
import axios from "axios";

export const fetchInfoList = (cno, page) => async dispatch => {
    try {
        const res = await axios.get('http://localhost/info/list-react', {
            params: {
                cno: cno,
                page: page,
            }
        });
        dispatch({
            type: FETCH_INFO_LIST,
            payload: res.data,
        })
    } catch (Error) {
        console.log(Error);
    }

}