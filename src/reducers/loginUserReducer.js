import Immutable from 'immutable';
import * as types from '../config/ActionTypes'

let initState = {
    passwordModalVisible: false,
    that: null
}

export const loginUserReducer = (state = initState, action) => {
    let it = Immutable.fromJS(state);
    switch (action.type) {
        case types.SET_PASSWORDMODAL_VISIBLE:
            it = it.set('passwordModalVisible', Immutable.fromJS(action.payload));
            if (!!state.that) {
                state.that.setFieldsValue();
            }
            break;
        default:
            break;
    }
    return it.toJS();
}