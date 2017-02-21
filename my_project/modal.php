<?php
header('Content-Type: text/html;charset=UTF-8');
?>
 <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <span> <img src="" alt=""></span>
                    <h3>登录络绎账号</h3>
                    <span class="close">x</span>
                </div>
                <div class="modal-body">
                    <form id="login-form" method="post" action="data/login.php">
                        <div class="form-group form-group-itemu">
                            <span class="glyphicon glyphicon-search"></span>
                            <input type="text" name="uname" id="user" placeholder="请输入用户名">
                        </div>
                        <div class="form-group form-group-itemu">
                            <span class="glyphicon glyphicon-search"></span>
                            <input type="password" name="upwd" id="password" placeholder="请输入密码">
                        </div>
                        <div class="form-group">
                            <input type="checkbox" id="check" class="left">
                            <label for="check" class="left">下次自动登录</label>
                            <a class="right" href="#">登录遇到问题</a>
                        </div>
                        <div class="form-group">
                            <input type="button" value="登录" class="submit" id="bt-login">
                        </div>
                    </form>
                    <span class="right"> <a href="#">立即注册</a></span>
                </div>
                <div class="modal-footer">
                    <span>可以使用以下方式登录</span>
                    <div class="left">
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>