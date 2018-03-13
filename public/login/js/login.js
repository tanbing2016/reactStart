$(function(){

	$('#submitBtn').click(function(){
		var userName = $('#userName').val();
	    var passWord = $('#passWord').val();

	    if(!userName){
	    	alert('请输入用户名')
	    	return;
	    }else if(!passWord){
	    	alert('请输入密码')
	    	return;
	    }

	    $.post('/login/login.htm', {
	    	username:userName,
	    	password:passWord
	    }, function(data, textStatus, xhr) {
	    	if(data.code == 0){
	    		window.open('http://localhost:3000','_self');
	    	}else{
	    		alert(data.errmsg);
	    	}
	    });
	})
})