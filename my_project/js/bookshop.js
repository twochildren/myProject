/**
 * Created by Administrator on 2016/10/3.
 */
/**1 加载头部与尾部*/
$(function () {
	$('.modal').load('modal.php');
	setTimeout(function(){
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
			/******搜索功能*********/
			var sn=document.getElementById("searchname");
			sn.onkeyup=function(){
				var k=sn.value;
				if(!k){return;}
				var xhr=new XMLHttpRequest();
				xhr.onreadystatechange=function(){
					if(xhr.readyState===4){
						if(xhr.status===200){
							doResponse(xhr);
						}
					}
				}
				xhr.open('GET','data/book_search.php?k='+k,true);
				xhr.send(null);
				function doResponse(xhr){
					$('.search>div .search-box').html(xhr.responseText);
					$('.search>div').css('display','block');
				}
			}
			sn.onblur=function(){
				$('.search>div').css('display','none');
			}

		});
		$('.footer').load('footer.php');
	},500);
});
/***********导航标签页**************/
$('.affix a').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    $(id).show().siblings('div').hide();
});
/***********获取导航编号**************/
var sid=1;
    $('.affix ul').on('click','li>a',function(){
        //console.log(this);
        var a=$(this).attr('href');
        var b=a.indexOf('h',0);
        var  c=a.slice(b+1);
        sid=c;
        console.log('sid='+sid);
        $(function(){
            loadProduct(1,sid);
        })
    });

//console.log(c);
//var sid=getSid();
$(function(){
    loadProduct(1,sid);
})
console.log(sid);
/***3 产品列表页加载完成，异步请求第1页记录 ****/

//为分页条中超链接代理事件监听
$('.pagination').on('click','a', function(e){
    e.preventDefault();
    var pno = $(this).attr('href'); //目标页号
    loadProduct(pno,sid);
})
///异步分页加载商品列表
function loadProduct(pno,sid){
    //$.get  $.getJSON  $.ajax
    $.getJSON('data/product_select.php',{'pno':pno,'sid':sid},function(pager){
        //console.log('开始处理响应数据-产品列表');
        //console.log(pager);
        //1 构建产品列表的内容
        var html = '';
        $.each(pager.data, function(i,p){
            html += `
          <li>
                        <dl>
                            <dt>
                                <a href="book_detail.html?id=${p.pid}"><img src="${p.pic}" alt=""></a>
                            </dt>
                            <dd>
                                <a href="#">${p.pname}</a>
                                <p>
                                    <span class="left">${p.pauthor}</span>
                                    <span class="right">${p.pvolume}</span>
                                </p>
                            </dd>
                        </dl>
                     </li>
      `;
        });
        var sel='#xh'+sid+' ul';
        console.log('sel:'+sel);
        $(sel).html(html);
        //2 构建分页条中的内容
        var pagerHtml = '';
        if(pager.pno-2>0){
            pagerHtml += `<li><a href="${pager.pno-2}">${pager.pno-2}</a></li> `;
        }
        if(pager.pno-1>0){
            pagerHtml += `<li><a href="${pager.pno-1}">${pager.pno-1}</a></li> `;
        }
        pagerHtml += `<li class="active"><a href="#">${pager.pno}</a></li> `;
        if(pager.pno+1<=pager.pageCount){
            pagerHtml += `<li><a href="${pager.pno+1}">${pager.pno+1}</a></li> `;
        }
        if(pager.pno+2<=pager.pageCount){
            pagerHtml += `<li><a href="${pager.pno+2}">${pager.pno+2}</a></li> `;
        }

        $('.pagination').html(pagerHtml);
    })
}

var user_name=$('#welcome').html();
console.log("用户名为："+user_name);



