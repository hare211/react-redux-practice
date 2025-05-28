import { FETCH_INFO_LIST } from "../actions/types";

// Map, VO -> {}, List -> []

const infoState = {
    info_data: {}
}

export default function reducer(state = infoState, action) {
    switch (action.type) {
        case FETCH_INFO_LIST:
            return {
                ...state,
                info_data: action.payload
            }
        default:
            return state;
    }
}