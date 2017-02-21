/**
 * Created by Administrator on 2016/10/1.
 */

var imgs = document.querySelectorAll('.normal');
var btns = document.querySelectorAll('.button');
function change(index){
    document.querySelectorAll('.currbtn')[0].className = "button";
    btns[index].className="button currbtn";
    document.querySelectorAll('.curr')[0].className = "normal";
    imgs[index].className = "normal curr";
}
var index=0;
setInterval(function(){
    // console.log($('.banner img')[index]);
    $('.banner img').addClass('normal').removeClass('curr');
    $('.buttons a').addClass('.button').removeClass('currbtn');
    $($('.banner img')[index]).addClass('curr');
    $($('.buttons a')[index]).addClass('currbtn');
    index++;
    if(index>5){index=0;}
},1500);
