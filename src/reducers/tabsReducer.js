import Immutable from 'immutable';
import _ from 'lodash/array'
const initialState = {
    tabsList: [],
    activeKey: '',
}
export function tabsReducer(state = initialState, action) {
    let fromjs = Immutable.fromJS(state);
    switch (action.type) {
        case 'set_tabs_success': {
            fromjs = fromjs.set('tabsList', Immutable.fromJS(action.payload.tabsList)).set('activeKey', Immutable.fromJS(action.payload.activeKey));
            break;
        }
        case 'del_tabs_success': {
            fromjs = fromjs.set('tabsList', Immutable.fromJS(action.payload.tabsList));
            break;
        }
        case 'ch_active_success': {
            fromjs = fromjs.set('activeKey', Immutable.fromJS(action.payload.activeKey));
            break;
        }
        case 'CLOSE_TABS_ITEM': {
            let indx = _.findIndex(state.tabsList, { id: action.payload });
            if (indx !== -1) {
                state.tabsList.splice(indx, 1);
                fromjs = fromjs.set('tabsList', Immutable.fromJS(state.tabsList));
                if (state.activeKey === `${action.payload}`) {
                    fromjs = fromjs.set('activeKey', !!state.tabsList[indx] ? `${state.tabsList[indx].id}` : (!!state.tabsList[indx - 1] ? `${state.tabsList[indx - 1].id}` : ''));
                }
            }
            break;
        }
        case 'CLOSE_TABS_RIGHT': {
            let indx = _.findIndex(state.tabsList, { id: action.payload });
            if (indx !== -1) {
                let arr = state.tabsList.splice(indx + 1);
                state.tabsList.length = indx + 1;
                arr.forEach((item) => {
                    if (!!item.closable) {
                        state.tabsList.push(item);
                    }
                })
                fromjs = fromjs.set('tabsList', Immutable.fromJS(state.tabsList));
                fromjs = fromjs.set('activeKey', `${action.payload}`);
            }
            break;
        }
        case 'CLOSE_TABS_LEFT': {
            let indx = _.findIndex(state.tabsList, { id: action.payload });
            if (indx !== -1) {
                let arr = state.tabsList.splice(indx);
                state.tabsList.forEach((item) => {
                    if (!!item.closable) {
                        arr.unshift(item);
                    }
                })
                fromjs = fromjs.set('tabsList', Immutable.fromJS(arr));
                fromjs = fromjs.set('activeKey', `${action.payload}`);
            }
            break;
        }
        case 'CLOSE_TABS_OTHER': {
            let indx = _.findIndex(state.tabsList, { id: action.payload });
            if (indx !== -1) {
                let arr = [];
                let right = state.tabsList.splice(indx + 1);
                right.forEach((item) => {
                    if (!!item.closable) {
                        arr.push(item);
                    }
                })
                arr.unshift(state.tabsList[indx]);
                state.tabsList.pop();
                state.tabsList.forEach((item) => {
                    if (!!item.closable) {
                        arr.unshift(item);
                    }
                })
                fromjs = fromjs.set('tabsList', Immutable.fromJS(arr));
                fromjs = fromjs.set('activeKey', `${action.payload}`);
            }
            break;
        }
        case 'CLOSE_TABS_ALL': {
            let arr = [];
            state.tabsList.forEach((item) => {
                if (!!item.closable) {
                    arr.push(item);
                }
            })
            fromjs = fromjs.set('tabsList', Immutable.fromJS(arr));
            fromjs = fromjs.set('activeKey', !!arr.length ? `${arr[arr.length - 1].id}` : '');
            break;
        }
        case 'TOGGLE_TABS_BLOCK': {
            let indx = _.findIndex(state.tabsList, { id: action.payload });
            if (indx !== -1) {
                state.tabsList[indx].closable = !state.tabsList[indx].closable;
                fromjs = fromjs.set('tabsList', Immutable.fromJS(state.tabsList));
            }
            break;
        }
        default:
            break;
    }
    return fromjs.toJS();
}