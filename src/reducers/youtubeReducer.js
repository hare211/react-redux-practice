import { FETCH_YOUTUBE_FIND } from "../actions/types";

const youtubeState = {
    movie_data: []
}

export default (state = youtubeState, action) => {
    switch (action.type) {
        case FETCH_YOUTUBE_FIND:
            return {
                ...state,
                movie_data: action.payload
            }
        default:
            return state;
    }
}