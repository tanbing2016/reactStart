import Immutable from 'immutable';

let initState = {isLogging: false, login:null,}   
export function loginReducer(state = initState, action){
    let fromjs = Immutable.fromJS(state);
    switch (action.type){
        case 'get_login_success':{
            fromjs=fromjs.set('login',Immutable.fromJS(action.payload.login))
            return fromjs.toJS();
        }
        default:
            break;
    }
    return state;
}