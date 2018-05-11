import {createStore} from 'redux'

import {updateSettings} from './actions'
import reducer from './reducer'

const store = createStore(reducer)

console.log(store.getState())

export default store