import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer'
import { lmenuReducer } from './leftMenuReducer'
import { tabsReducer } from './tabsReducer'
import { loginUserReducer } from './loginUserReducer'
const rootReducer = combineReducers({
    login: loginReducer,
    lmenu: lmenuReducer,
    tabs: tabsReducer,
    loginUser: loginUserReducer,
})

export default rootReducer;