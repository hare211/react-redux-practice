import { combineReducers } from 'redux'

// combineReducers: reduce 여러 개를 모아서 한 번에 저장
import mainReducers from './mainReducer'
export default combineReducers({
    mains: mainReducers,
})