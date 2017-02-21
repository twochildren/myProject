/**
 * Created by Administrator on 2016/10/2.
 */
var username = document.getElementById("username");
var usernameTip = document.getElementById("usernameTip");
username.onfocus = function(){
    usernameTip.className = "col-md-5 show control-default";
    usernameTip.firstChild.nodeValue = "请输入8至16位的英文或数字."
}
username.onblur = function(){
    if(username.validity.valid){
        usernameTip.className = "col-md-5 show control-success";
        usernameTip.firstChild.nodeValue = "用户名正确."
    }else if(username.validity.valueMissing){
        usernameTip.className = "col-md-5 show control-error";
        usernameTip.firstChild.nodeValue = "用户名不能为空."
    }else if(username.validity.patternMismatch){
        usernameTip.className = "col-md-5 show control-error";
        usernameTip.firstChild.nodeValue = "用户名输入有误."
    }
}
var password = document.getElementById("password");
var passwordTip = document.getElementById("passwordTip");
password.onfocus = function(){
    passwordTip.className = "col-md-5 show control-default";
    passwordTip.firstChild.nodeValue = "请输入6至12位的数字."
}
password.onblur = function(){
    if(password.validity.valid){
        passwordTip.className = "col-md-5 show control-success";
        passwordTip.firstChild.nodeValue = "密码正确."
    }else if(password.validity.valueMissing){
        passwordTip.className = "col-md-5 show control-error";
        passwordTip.firstChild.nodeValue = "密码不能为空."
    }else if(password.validity.patternMismatch){
        passwordTip.className = "col-md-5 show control-error";
        passwordTip.firstChild.nodeValue = "密码输入有误."
    }
}
var email = document.getElementById("email");
var emailTip = document.getElementById("emailTip");
email.onfocus = function(){
    emailTip.className = "col-md-5 show control-default";
    emailTip.firstChild.nodeValue = "请输入你的电子邮件地址."
}
email.onblur = function(){
    if(email.validity.valid){
        emailTip.className = "col-md-5 show control-success";
        emailTip.firstChild.nodeValue = "电子邮件正确."
    }else if(email.validity.valueMissing){
        emailTip.className = "col-md-5 show control-error";
        emailTip.firstChild.nodeValue = "电子邮件不能为空."
    }else if(email.validity.typeMismatch){
        emailTip.className = "col-md-5 show control-error";
        emailTip.firstChild.nodeValue = "电子邮件输入有误."
    }
}
var home = document.getElementById("home");
var homeTip = document.getElementById("homeTip");
home.onfocus = function(){
    homeTip.className = "col-md-5 show control-default";
    homeTip.firstChild.nodeValue = "请输入你的个人主页(该项可忽略)."
}
home.onblur = function(){
    if(home.validity.valid){
        homeTip.className = "col-md-5 show control-success";
        homeTip.firstChild.nodeValue = "个人主页正确."
    }else if(home.validity.typeMismatch){
        homeTip.className = "col-md-5 show control-error";
        homeTip.firstChild.nodeValue = "个人主页输入有误."
    }
}
var age = document.getElementById("age");
var ageTip = document.getElementById("ageTip");
age.onfocus = function(){
    ageTip.className = "col-md-5 show control-default";
    ageTip.firstChild.nodeValue = "请输入你的年龄."
}
age.onblur = function(){
    if(age.validity.valid){
        ageTip.className = "col-md-5 show control-success";
        ageTip.firstChild.nodeValue = "年龄正确."
    }else if(age.validity.valueMissing){
        ageTip.className = "col-md-5 show control-error";
        ageTip.firstChild.nodeValue = "年龄不能为空."
    }else if(age.validity.rangeUnderflow){
        ageTip.className = "col-md-5 show control-error";
        ageTip.firstChild.nodeValue = "年龄太小啦."
    }else if(age.validity.rangeOverflow){
        ageTip.className = "col-md-5 show control-error";
        ageTip.firstChild.nodeValue = "年龄太大啦."
    }
}
var birth = document.getElementById("birth");
var birthTip = document.getElementById("birthTip");
birth.onfocus = function(){
    birthTip.className = "col-md-5 show control-default";
    birthTip.firstChild.nodeValue = "请选择你的出生日期."
}
birth.onblur = function(){
    birthTip.className = "col-md-5 hide";
}
/*将页面数据返给PHP存入数据库*/
console.log("aa");
$('#btn-register').click(function(){
    //把用户的输入序列化为k=v字符串
    console.log("aas");

    var data = $('#form-register').serialize();
    console.log(data);
    var name =$('#username').val();
    var pwd =$('#password').val();
    //$.ajax  $.post
    $.post('data/register.php', data, function(obj){
        console.log('开始处理登录验证结果');
        // console.log(arguments);
        console.log(obj.code);
        if(obj.code===1002){ //验证成功
            window.open("http://localhost:80/my_project/rsuccess.html?uname="+name+"&");
        }else {
            alert('注册失败');
        }
    });
});