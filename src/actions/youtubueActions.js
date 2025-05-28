import { FETCH_YOUTUBE_FIND } from "./types";
import axios from "axios";

export const fetchYouTubeFind = (fd) => async dispatch => {
    try {
        /*
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=28&q=${fd}&type=video&key=AIzaSyAKfUkyoYQHmwZBktKyJ8hxxDnom1aZuUY`,
        )
        const result = await res.json()
        const action = {
            type: FETCH_YOUTUBE_FIND,
            payload: result.items,
        }
        dispatch(action);

         */
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${fd}&type=video&key=AIzaSyAKfUkyoYQHmwZBktKyJ8hxxDnom1aZuUY`)
        const action = {
            type: FETCH_YOUTUBE_FIND,
            payload: res.data.items,
        }
        dispatch(action);
    } catch (Error) {
        console.error(Error);
    }
}
