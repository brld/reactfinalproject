import {combineReducers} from 'redux'

import {UPDATE_SETTINGS} from './actions'

const settingsReducer = (state = "legal_name", action) => { // NickServ
    if (action.type === UPDATE_SETTINGS) return action.payload
    return state
}

export default settingsReducer