/**
 * Created by Administrator on 2016/10/7.
 */
/**1 加载头部与尾部*/
$(function () {
	$('.modal').load('modal.php');
    $('.header').load('header.php',function () {
        /*当前已有参数 改登录为用户名*/
        var url=location.search;
        if(url){
            var s=url.indexOf('=',0);
            var e=url.indexOf('&',0);
            var name=url.slice(s+1,e);
            $('#welcome').html('欢迎回来：'+name);
        }
        /*按登录弹出模态框*/
        $('.navbar-collapse a:contains("登录")').click(function(e){
            e.preventDefault();
            $('.modal').css('display','block');
        });
        $('.modal-header span.close').click(function(){
            $('.modal').css('display','none');
        });
        /***2 点击登录按钮，异步验证用户名和密码 ****/
        var loginName = null; //当前登录的用户名
        console.log('一瞬间?');
        $('#bt-login').click(function(){
            console.log('我进来了');
            //把用户的输入序列化为k=v字符串
            var data = $('#login-form').serialize();
            console.log(data);
            //$.ajax  $.post
            $.post('data/login.php', data, function(obj){
                console.log('开始处理登录验证结果');
                // console.log(arguments);
                if(obj.code===1000){ //验证成功
                    $('.modal').toggle();  //摸态框淡出
                    loginName = $('[name="uname"]').val();
                    console.log()
                    $('#welcome').html('欢迎回来：'+loginName);
                    $('#register').html('');
                }else {
                    $('.modal h3').html(obj.msg);
                }
            });
        });

    });
    $('.footer').load('footer.php');
});
$('span.zan').click(function(){
    $(this).css('color','red');
});