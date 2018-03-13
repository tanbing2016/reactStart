window.I={

}
$(function(){
	
	
	$('#login').click(function(){
		login();	
	});
});
function isValidGoods(){
	 var isValid = false;
	 var gf=$('#myform')
	gf.validate({
	    rules:{
            "username":{
                required:true
            },
            "password":{
                required:true
            },
            "certify":"required"
        },
	    messages:{
	        "username":{
	            required:"用户名不能为空"
	        },
	        "password":{
	            required:"密码不能为空"
	        },
            "certify":"请输入验证码"
	    },
	     errorPlacement : function (err, element) {
	     	var p = element.parents(".form-group").eq(0);
            var d = p.children(".text-error").eq(0);
            d.css({"color":"#D9534F","marginLeft":"25%"});
            err.appendTo(d);
        }
	   
	});
	 isValid =gf.valid() ;	
	 return isValid;
 }
function login(){
	 if (!isValidGoods()) {
        return;
    }
	 var obj={};
        obj.username=$('#username').val();
        obj.password=$('#password').val();
        obj.valicode=$('#certify').val();
        console.log('进来了');
        // $.post('/syslogin/blogin.htm?tttran='+Math.random(), obj, function(data, textStatus, xhr) {
            
        //     if(data.code>0){
        //         alert(data.errmsg);
        //         return;
        //     }else{
        //         window.open("index.jsf","_self")
        //         return;
        //     }
        // },'json');
}
