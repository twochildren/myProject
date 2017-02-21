/**
 * Created by Administrator on 2016/10/1.
 */
$('.content').on('mouseover','dt a>img',function(){
    console.log(this);
    $(this).removeClass('small').addClass('big');
});
$('.content').on('mouseout','dt a>img',function(){
    $(this).removeClass('big').addClass('small');
});