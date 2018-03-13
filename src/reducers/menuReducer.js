import Immutable from 'immutable';
import * as types from '../config/ActionTypes'

let initState = {
    item: {}
}

export const menuReducer = (state = initState, action) => {
    let it = Immutable.fromJS(state);
    switch (action.type) {
        case types.SET_MENU_ITEM:
            it = it.set('item', Immutable.fromJS(action.payload));
            break;
        default:
            break;
    }
    return it.toJS();
}