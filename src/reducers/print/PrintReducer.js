import Immutable from 'immutable';
let initialState = {
    printFlag:false,
    datas:[],  //{title:'',headers:[{label:'',value:''},{},{},{},{},{},......],columns:[],datasource:[],footers:[{},{},{},...]},{},{},{},{}
};

export function printReducer(state = initialState, action){
    let fromjs  = Immutable.fromJS(state);
    switch(action.type){
        case 'print_sheet_start':{
            console.log('print_sheet_start...............................................');
            fromjs=fromjs.set('printFlag',true).set('datas',Immutable.fromJS(action.payload.datas));
            return fromjs.toJS();
        }
        case 'print_sheet_close':{
            console.log('print_sheet_close...............................................');
            fromjs=fromjs.set('printFlag',false).set('datas',Immutable.fromJS([]))
            return fromjs.toJS();
        }
    }

    return state;
}