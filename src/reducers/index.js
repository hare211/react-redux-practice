import { combineReducers } from 'redux'

// combineReducers: reduce 여러 개를 모아서 한 번에 저장
import mainReducers from './mainReducer'
import foodReducers from './foodReducer'
import youtubeReducer from "./youtubeReducer";
import infoReducers from './infoReducer'

export default combineReducers({
    mains: mainReducers,
    foods: foodReducers,
    youtubes: youtubeReducer,
    infos: infoReducers,
})