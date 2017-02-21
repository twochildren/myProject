<?php 
header('Content-Type: application/json;charset=UTF-8');

$type=$_REQUEST['type'];
if(!$type){
	$type='new';
}

$conn=mysqli_connect('127.0.0.1','root','','bookshop',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);

$arr=[];
if($type=='new'){
	$sql="SELECT * FROM book_comment ORDER BY cdate";
	$result=mysqli_query($conn,$sql);

	if($result){
		while(($row=mysqli_fetch_assoc($result))!==NULL){
			$arr[]=$row;
		}
		echo json_encode($arr);	
	}else{
		echo "sql语句有误".$sql;
	}
}else if($type=='hot'){
	$sql="SELECT * FROM book_comment ORDER BY uheart";
	$result=mysqli_query($conn,$sql);

	if($result){
		while(($row=mysqli_fetch_assoc($result))!==NULL){
			$arr[]=$row;
		}
		echo json_encode($arr);	
	}else{
		echo "sql语句有误".$sql;
	}
}


