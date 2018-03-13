import request from '../utils/request';
import * as cont from '../config/constant'

export function getLmenus(dispatch) {
    return function (dispatch) {
        // request(cont.usernemu, {}).then((data) => {
        //     if(data.code === 0){
        //         let menus1=data.list;
        //         menus1.forEach((item,i)=>{
        //             item.key=i;
        //         })
        //         dispatch(getLmenusSuccess(menus1));
        //     }
        // })
        let menus = [
            {creator:0,ctime:"2018-01-16 15:31",icon:"api",id:1,level:1,lft:1,menutype:"manger",ordering:0,permission:0,pid:0,rgt:2,target:"",title:"商品管理", url:"",valid:true,},
                {creator:0,ctime:"2018-01-16 15:31",icon:"",id:2,level:2,lft:1,menutype:"manger",ordering:0,permission:0,pid:0,rgt:2,target:"",title:"商品列表", url:"./goods/goodsList.js",valid:true,},
        ];
        dispatch(getLmenusSuccess(menus));
    }
}

function getLmenusSuccess(menus) {
    let Arr = [];
    let initLevel = 0;  //第一个元素的level
    menus.forEach(function (data, index) {
        if (index === 0) {
            initLevel = data.level;
        }
        let obj = {
            ...data,
            children: []
        }
        if (data.level === initLevel) {
            Arr.push(obj);
        } else {
            let j = initLevel + 1;
            let children = Arr[Arr.length - 1].children;
            while (j < data.level) {
                children = children[children.length - 1].children;
                j++;
            }
            children.push(obj);
        }
    });
    return ({
        type: 'get_left_menu',
        payload: {
            menus: Arr,
        }
    });
}