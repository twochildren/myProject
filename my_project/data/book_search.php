<?php
header('Content-Type:text/html;charset=UTF-8');
$k=$_REQUEST['k'];

$conn=mysqli_connect('127.0.0.1','root','','bookshop',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM book_product WHERE pname LIKE '%$k%' OR pauthor LIKE '%$k%'";
$result=mysqli_query($conn,$sql);
if($result){
    $html="";
    while(($row=mysqli_fetch_assoc($result))!==NULL){
        $html.="<li><a href='#'>$row[pname]</a></li>";
    }
    echo $html;
}else{
    echo "<li><a href='#'>SQL语法错误：$sql</a></li>";
}