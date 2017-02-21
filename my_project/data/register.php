<?php
    /**
    *接收客户端提交的登录信息，进行验证
    *返回数据格式JSON：
    *{"code": 1000, "msg":"注册信息验证正确"}
    *{"code": 1001, "msg":"SQL语句错误"}
    *{"code": 1002, "msg":"用户名或密码错误"}
    */
    header('Content-Type: application/json;charset=UTF-8');
    $uname=$_REQUEST['uname'];
    $upwd=$_REQUEST['upwd'];
    $uemail=$_REQUEST['uemail'];
    $upage=$_REQUEST['upage'];
    $uage=$_REQUEST['uage'];
    $ubirthday=$_REQUEST['ubirthday'];
    if( !$uname && !$upwd && !$uemail && !$uage && !$ubirthday){
    	echo 'err';
    	return; //没有 姓名年龄密码邮箱生日自行退出
    }
    $conn = mysqli_connect('127.0.0.1', 'root', '', 'bookshop', 3306);
    $sql="SET NAMES UTF8";
    mysqli_query($conn,$sql);
    $sql = "INSERT INTO book_user VALUES(NULL,'$uname','$upwd','$uemail','$upage','$uage','$ubirthday')";
    $result=mysqli_query($conn,$sql);

     $output = ['code'=>0, 'msg'=>null];
        if($result===false){
        	$output['code'] = 1001;
        	$output['msg'] = 'SQL语句错误';
        }else {
        		$output['code'] = 1002;
        		$output['msg'] = '注册成功';
        }

  echo json_encode($output);