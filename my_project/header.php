<?php
header('Content-Type: text/html;charset=UTF-8');
?>
<div class="navbar">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <img src="" alt="">
                </a>
            </div>
            <div class="navbar-collapse">
                <ul>
                    <li><a href="#">首页</a></li>
                    <li><a href="#">App</a></li>
                    <li><a href="#">关于</a></li>
                    <li><a href="#">加入我们</a></li>
                    <li><a href="#">我要投稿</a></li>
                </ul>
                <a class="right" href="#">关注</a>
                <a class="right" href="register.html" id="register">注册</a>
                <a class="right" href="#" id="welcome">登录</a>

                <div class="login-block" style="display:none;">
                    <ul>
                        <li><a href="#"> </a></li>
                        <li><a href="#"> </a></li>
                        <li><a href="#"> </a></li>
                    </ul>
                </div>
                <div class="search-block right">
                    <div class="search right">
                        <span class="glyphicon glyphicon-search left"></span>
                        <input class="left" type="text" placeholder="搜索作品名或者作者名..." maxlength="20" id="searchname">
                        <div>
                            <ul class="search-box">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>