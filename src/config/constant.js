import { Modal } from 'antd';
//其他参数
//菜单类型
export const MENUTYPE = ['平台管理端','商户管理端'];
export const MENUTYPEALIAS = ['管理员菜单', '商户管理菜单'];
export const MAX_MENU_LEVEL = 2;
export const ip = 'http://123.56.82.143:8888/';//图片IP
//资源类型
export const RESOURCETYPE = ['url资源', '其他资源']
//分页参数
export const defaultPageSize = 30;  //默认的每页条数
export const pageSizeOptions = ['10', '30', '50']  //指定每页可以显示多少条
export const maxPageSize = 1000;  //最大每页条目数


export const imageIp = 'http://0.0.0.0:2333/';//图片IP
export const imageuploadservlet = '/file/upload/up.htm';//上传图片
//内置页面
export const menu = { id: '_01', title: '菜单编辑', url: './System/MenuEdit' }
export const companyModule = { id: '_02', title: '模块配置', url: './System/CompanyModule' }

//接口列表
//登录
export const login = '/login/login.htm';//登录
export const logininfo = '/login/logininfo.htm';//获取登录用户信息
export const logout = '/login/logout.htm';//退出
export const usernemu = '/login/getUserMenu.htm';//登录用户的菜单
export const changePassword = '/login/changePassword.htm';//修改登录用户的密码

//系统
//资源模块
export const getModule = '/module/getList.htm'  //获取资源模块列表
export const addModule = '/module/add.htm'  //新增资源模块
export const updateModule = '/module/update.htm'  //更新资源模块
export const delModule = '/module/del.htm'  //删除资源模块
//操作
export const getOperation = '/operation/getList.htm'  //获取操作列表
export const addOperation = '/operation/add.htm'  //新增操作
export const updateOperation = '/operation/update.htm'  //更新操作
export const delOperation = '/operation/del.htm'  //删除操作
//系统资源
export const getResource = '/resource/getList.htm'  //获取系统资源列表
export const addResource = '/resource/add.htm'  //新增系统资源
export const updateResource = '/resource/update.htm'  //更新系统资源
export const delResource = '/resource/del.htm'  //删除系统资源
//平台配置
export const getPlatformConfig = '/platformConfig/getList.htm'  //获取平台配置列表
export const addPlatformConfig = '/platformConfig/add.htm'  //新增平台配置
export const updatePlatformConfig = '/platformConfig/update.htm'  //更新平台配置
export const delPlatformConfig = '/platformConfig/del.htm'  //删除平台配置
//系统管理员
export const getSystemer = '/systemer/getList.htm'  //获取系统管理员列表
export const addSystemer = '/systemer/add.htm'  //新增系统管理员
export const updateSystemer = '/systemer/update.htm'  //更新系统管理员
export const delSystemer = '/systemer/del.htm'  //删除系统管理员
export const changeSystemerStatus = '/systemer/changeStatus.htm'  //启用、禁用系统管理员

//燃气公司
export const getCompany = '/company/getList.htm'  //获取燃气公司列表
export const addCompany = '/company/add.htm'  //新增燃气公司
export const updateCompany = '/company/update.htm'  //更新燃气公司
export const delCompany = '/company/del.htm'  //删除燃气公司
export const changeCompanyStatus = '/company/changeStatus.htm'  //启用、禁用燃气公司
export const addCompanyuser = '/company/addCompanyAdminUser.htm'  //添加燃气公司管理员账户
export const getCompanyModule = '/company/getCompanyModule.htm'  //获取燃气公司已启用的模块
export const saveCompanyModule = '/company/saveCompanyModule.htm'  //保存燃气公司已启用的模块

//菜单
export const getMenu = '/menu/getList.htm'  //获取菜单列表
export const addMenu = '/menu/add.htm'  //新增菜单
export const updateMenu = '/menu/update.htm'  //更新菜单
export const delMenu = '/menu/del.htm'  //删除菜单
export const upMenu = '/menu/up.htm'  //上移菜单
export const downMenu = '/menu/down.htm'  //下移菜单
export const resetParentMenu = '/menu/resetParent.htm'  //更改菜单父节点

//角色
export const selectListRole = '/role/selectList.htm'  //角色列表
export const addRole = '/role/addRole.htm'  //新建角色
export const updateRole = '/role/updateRole.htm'  // 修改角色信息
export const deleteRole = '/role/deleteRole.htm'  // 删除角色
export const selectTreeList = '/menu/selectTreeList.htm'  // 树型目录列表
export const saveRoleMenu = '/menu/payMenuForRole.htm'  // 保存角色菜单
export const getModuleByRole = '/role/getModuleByRole.htm'  // 获取角色模块
export const addRoleModule = '/role/addRoleModule.htm'  // 添加
export const decRoleModule = '/role/decRoleModule.htm'  // 删除

// 品牌
export const buildBrand = '/brand/savebrand.htm'; //新建品牌
export const updateBrand = '/brand/updatebrand.htm';//编辑品牌
export const getBrand = '/brand/getbrand.htm';//获取品牌
export const getallBrand = '/brand/getbrandlist.htm';//获取品牌列表
export const delBrand = '/brand/deletebrand.htm';//删除品牌

//品牌分类
export const selectListGoodsType = '/goodstype/selectList.htm';//模糊查询分类
export const savegoodstypebrand = '/goodstypebrand/savegoodstypebrand.htm';//增加分类
export const deletegoodstypebrand = '/goodstypebrand/deletegoodstypebrand.htm';//删除分类
export const selectListGoodstypebrand = '/goodstypebrand/selectList.htm';//分类列表

//分类
export const savegoodstype = '/goodstype/savegoodstype.htm';  //新建商品分类
export const updategoodstype = '/goodstype/updategoodstype.htm';  // 修改商品分类
export const deletegoodstype = '/goodstype/deletegoodstype.htm';  //删除商品分类
export const getgoodstypelist = '/goodstype/getgoodstypelist.htm';  // 获取分类列表
export const upgoodstype = '/goodstype/upgoodstype.htm';  // 分类上移
export const downgoodstype = '/goodstype/downgoodstype.htm';  // 分类下移
export const insertQuantity = '/quantity/insertQuantity.htm';  // 增加特征量类型
export const updateQuantity = '/quantity/updateQuantity.htm';  //  修改特征量类型
export const selectPageListType = '/quantity/selectPageList.htm';  // 特征量类型列表
export const deleteQuantity = '/quantity/deleteQuantity.htm';  // 删除特征量类型
export const insertQuantityenum = '/quantityenum/insertQuantityenum.htm';  // 增加特征量
export const updateQuantityenum = '/quantityenum/updateQuantityenum.htm';  //  修改特征量
export const selectListValue = '/quantityenum/selectList.htm';  // 特征量列表
export const deleteQuantityenum = '/quantityenum/deleteQuantityenum.htm';  // 删除特征量
//分类商品证件类型
export const goodspaperdefList = '/goodspaperdef/selectList.htm';  // 分类商品证件类型列表
export const saveGoodspaperdef = '/goodspaperdef/save.htm';  // 增加分类商品证件类型
export const updateGoodspaperdef = '/goodspaperdef/update.htm';  // 修改分类商品证件类型
export const deleteGoodspaperdef = '/goodspaperdef/delete.htm';  // 删除分类商品证件类型


// 商户管理--商户类型管理
export const addMerchantType = '/merchantType/add.htm'; //新增类型
export const updateMerchantType = '/merchantType/update.htm';//修改类型
export const merchantTypeList = '/merchantType/selectList.htm';//查询类型列表
export const deleteMerchantType = '/merchantType/delete.htm';//删除类型

export const selectListForMoudel = '/merchantModule/selectListForManage.htm';//商户开通模块
export const updateForMoudel = '/merchantModule/update.htm';//修改商户模块时间
export const addForMoudel = '/merchantModule/add.htm';//修改商户模块时间
// 区域管理
export const updatedistrict = '/district/updatedistrict.htm';//修改行政区
export const getdistrictlist = '/district/getdistrictlist.htm';//获取行政区列表
export const getpdistrictlist = '/district/getpdistrictlist.htm';//获取同级行政区列表
export const savedistrict = '/district/savedistrict.htm';//保存行政区
export const deletedistrict = '/district/deletedistrict.htm';//删除区域
//结算方式管理
export const getbalanceDefinelist = '/balanceDefine/getbalanceDefinelist.htm';//获取结算类型列表
export const savebalanceDefine = '/balanceDefine/savebalanceDefine.htm';//新建结算类型
export const updatebalanceDefine = '/balanceDefine/updatebalanceDefine.htm';//修改结算类型
export const getbalanceDefine = '/balanceDefine/getbalanceDefine.htm';//获取单个结算类型
export const deletebalanceDefine = '/balanceDefine/deletebalanceDefine.htm';//删除单个结算类型
// 客户等级管理
export const getcustomerLevellist = '/customerLevel/getcustomerLevellist.htm';//获取全部客户等级
export const savecustomerLevel = '/customerLevel/savecustomerLevel.htm';//新建客户等级
export const updatecustomerLevel = '/customerLevel/updatecustomerLevel.htm';//x修改客户等级
export const getcustomerLevel = '/customerLevel/getcustomerLevel.htm';//获取单个客户等级
export const deletetcustomerLevel = '/customerLevel/deletecustomerLevel.htm';//删除客户等级


//单位
export const saveunits = '/units/saveunits.htm';  // 增加单位
export const updateunits = '/units/updateunits.htm';  //  修改单位
export const getunitslist = '/units/getunitslist.htm';  // 单位列表
export const deleteunits = '/units/deleteunits.htm';  // 删除单位

//  商品
//export const insertGoods = '/goods/insertGoods.htm';  //  增加商品
export const selectPageListGoods = '/goods/selectPageList.htm';  //  商品列表
// export const getGoodsDetail = '/goods/getGoodsDetail.htm';  //  获取单个商品
// export const updateGoods = '/goods/updateGoods.htm';  //  修改商品
export const deleteGoods = '/goods/deleteGoods.htm';  //  删除商品
// export const insertGoodsContent = '/goodscontent/insertGoodsContent.htm';  //  添加商品图文详情
// export const deleteGoodsContent = '/goodscontent/deleteGoodsContent.htm';  //  删除商品图文详情
// export const selectListGoodsContent = '/goodscontent/selectList.htm';  //  获取商品图文详情
// export const selectListGoodsImage = '/goodsimage/selectList.htm';  //  获取商品轮播图详情
// export const insertGoodsImage = '/goodsimage/insertGoodsImage.htm';  //  添加商品轮播图详情
// export const deleteGoodsImage = '/goodsimage/deleteGoodsImage.htm';  //  删除商品轮播图详情
export const addGoodsUnit = '/goods/addGoodsUnit.htm';  //  增加商品单位
export const updateGoodsUnit = '/goods/updateGoodsUnit.htm';  //  修改商品单位
export const deleteGoodsUnit = '/goods/deleteGoodsUnit.htm';  //  删除商品单位
export const selectGoodsUnitsList = '/goods/selectGoodsUnitsList.htm';  //  商品单位列表
export const saveBrandAndBindingGoodsType = '/brand/saveBrandAndBindingGoodsType.htm';  //  添加品牌
export const changeGoodsValid = '/goods/changeGoodsValid.htm';  //  修改商品状态

export const getAllQuantity = '/goods/getAllQuantityByGoodsType.htm';  //  获取所属分类下所有的特征量、特征值（包括上级分类，不包括子分类）
export const addGoodsValue = '/goods/addGoodsValue.htm';  //  设置商品特征量特征值
export const delGoodsValue = '/goods/delGoodsValue.htm';  //  取消商品特征量特征值
export const mergeSku = '/goods/mergeSku.htm';  //  组合sku

export const getGoodsDetail = '/goods/getGoodsDetail.htm';  //  商品详情
export const insertGoods = '/goods/insertGoods.htm';  //  添加商品
export const updateGoods = '/goods/updateGoods.htm';  //  修改商品

// export const getSkuLis = '/goods/getSkuLis.htm';  //  获取商品的skuList
// export const setBarcode = '/goodsSku/setBarcode.htm';  //  设置sku的barcode

//轮播图
export const districtList = '/district/selectList.htm';  //  设置sku的barcode
export const goodsList = '/goods/selectList.htm';  //  商品列表(不分页)
export const addBanner = '/banner/addBanner.htm';  //  添加轮播图
export const bannerList = '/banner/selectPageList.htm';  //  轮播图列表
export const updateBanner = '/banner/updateBanner.htm';  //  修改轮播图
export const deleteBanner = '/banner/deleteBanner.htm';  //   删除轮播图

//商户
export const addMerchant = '/merchant/addMerchant.htm';  //  添加商户
export const updateMerchant = '/merchant/updateMerchant.htm';  //   修改商户
export const merchantList = '/merchant/selectPageList.htm';  //   获取商户分页列表
export const delMerchant = '/merchant/delMerchant.htm';  //   删除商户
export const changeState = '/merchant/changeState.htm';  //   修改商户状态

export const userList = '/user/selectPageList.htm';  //  用户分页列表
export const adduser = '/user/adduser.htm';  //   添加用户
export const updateuser = '/user/updateuser.htm';  //   修改用户
export const deleteuser = '/user/deleteuser.htm';  //   删除用户

export const selectPageList = '/merchantApply/selectPageList.htm';// 商户待审核列表
export const checked = '/merchantApply/checked.htm';// 商户审核

export const merchantRoleList = '/merchantRole/selectList.htm';  //   商户下角色列表

export function copy(obj){
    let obj1={};
    for(let key in obj){
        obj1[key]=obj[key]
    }
    return obj1;
}
export function reg(value){
    let regEn = /[`~!@#$^&_+<>?:"{},\;'[\]]/img,
    regCn = /[！#￥：；“”‘、，|《。》？、【】[\]]/img;
    if(regEn.test(value) || regCn.test(value)) {
        var tempStr='';
        value.replace(regEn,function(){
            tempStr+=arguments[0];
        })
        value.replace(regCn,function(){
            tempStr+=arguments[0];
        })
        Modal.error({
            title: '名称不能包含特殊字符 '+ tempStr,
          });
        return value;
    }
    return value;
}

export function Trim(str,is_global){ 
    // return str.replace(/(^\s*)|(\s*$)/g, ""); 
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g,"");
        if(is_global.toLowerCase()=="g"){
            result = result.replace(/\s/g,"");
         }
        return result;
}
export function getURL(url) {
    // return 'http://' + basicUrl + ((basicPort == null || basicPort == '') ? '' : (':' + basicPort)) + url;
    return url;
}
export function getPostParams(obj) {
    let param = 'tttid=1';
    for (let key in obj) {
        param = param + '&' + key + '=' + encodeURIComponent(obj[key]);
    }
    return param;
}
export function parseURL(url){  
    var a =  document.createElement('a');  
    a.href = url;  
    return {  
    source: url,  
    protocol: a.protocol.replace(':',''),  
    host: a.hostname,  
    port: a.port,  
    query: a.search,  
    params: (function(){  
        var ret = {},  
            seg = a.search.replace(/^\?/,'').split('&'),  
            len = seg.length, i = 0, s;  
        for (;i<len;i++) {  
            if (!seg[i]) { continue; }  
            s = seg[i].split('=');  
            ret[s[0]] = s[1];  
        }  
        return ret;  
    })(),  
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],  
    hash: a.hash.replace('#',''),  
    path: a.pathname.replace(/^([^\/])/,'/$1'),  
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],  
    segments: a.pathname.replace(/^\//,'').split('/')  
    };  
}
export function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var second=date.getSeconds();
    var hour=date.getHours();
    var min=date.getMinutes();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (second >= 0 && second <= 9) {
        second = "0" + second;
    }
    if (min >= 0 && min <= 9) {
        min = "0" + min;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + hour + seperator2 + min
            + seperator2 + second;
    return currentdate;
}
export function formatTime(template,str){
    template=template||"{0}年{1}月{2}日 {3}时{4}分{5}秒"
    if(!str){
        return "";
    }
    var ary=str.match(/\d+/g);
    template=template.replace(/\{(\d+)\}/g,function(){
        var index=arguments[1],
            result=ary[index];
        result=result||"00";
        result.length<2 ? result="0"+result:null;
        return result;
    })
    return template
}
