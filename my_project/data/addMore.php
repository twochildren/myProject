<?php 
header('Content-Type:application/json;charset=UTF-8');

@$item=@$_REQUEST['item'];
@$type=@$_REQUEST['type'];
if(!$item){
	$item=0;
}
if(!$type){
	$type='new';
}
//$sql="SELECT * FROM book_comment ";
$conn=mysqli_connect('127.0.0.1','root','','bookshop',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);

$arr=[];
if($type=='new'){
	$sql="SELECT COUNT(cdate) FROM book_comment";
	$result=mysqli_query($conn,$sql);
	$count=mysqli_fetch_assoc($result);
	if($item<intval($count['COUNT(cdate)'])){
		$sql="SELECT * FROM book_comment ORDER BY cdate LIMIT $item,5";
		$result=mysqli_query($conn,$sql);
		if($result){
			while(($row=mysqli_fetch_assoc($result))!==NULL){
				$arr[]=$row;
			}
			echo json_encode($arr);
		}else{
			echo "sql语句有误".$sql;
		}
	}else{
		echo "[]";
	}
}else if($type=='hot'){
	$sql="SELECT COUNT(uheart) FROM book_comment";
	$result=mysqli_query($conn,$sql);
	$count=mysqli_fetch_assoc($result);
	if($item<intval($count['COUNT(uheart)'])){
		$sql="SELECT * FROM book_comment ORDER BY uheart LIMIT $item,5";
		$result=mysqli_query($conn,$sql);
		if($result){
			while(($row=mysqli_fetch_assoc($result))!==NULL){
				$arr[]=$row;
			}
			echo json_encode($arr);	
		}else{
			echo "sql语句有误".$sql;
		}
	}else{
		echo "[]";
	}
}


