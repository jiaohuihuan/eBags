<?php
    // 引入connect.php
    include 'connect.php';

    /*
        接口功能：验证电子邮箱是否存在
        所需参数：
            * email
     */
    
    $email = isset($_GET['email']) ? $_GET['email'] : null; 


    // 查找数据库中是否存在同电子邮箱用户
    $sql = "select * from users where email='$email'";

    // 执行sql语句
    $result = $conn->query($sql);


    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }

?>