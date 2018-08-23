<?php
/**
 * @Author: Marte
 * @Date:   2018-08-21 21:24:42
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-23 09:07:25
 */


// 向数据库提取数据
// 引入connect.php
include 'connect.php';


$sql = "select * from list";

// 执行sql语句
$result = $conn->query($sql);

$row = $result->fetch_all(MYSQLI_ASSOC);

$result -> close();

echo json_encode($row,JSON_UNESCAPED_UNICODE);

$conn->close();








?>