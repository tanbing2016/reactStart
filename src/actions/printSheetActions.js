export function print(values){
    return {
        type:'print_sheet_start',
        payload:{
            datas:values,
        }
    }
}



export function closePrint(){
    return {
        type:'print_sheet_close',
    }
}