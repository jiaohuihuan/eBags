<?php
    // 引入connect.php
    include 'connect.php';

    /*
        接口功能：验证电子邮箱是否存在
        所需参数：
            * email
     */
    
    $email = isset($_POST['email']) ? $_POST['email'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 



    // 查找数据库中是否存在同电子邮箱用户
    $sql = "select * from users where email='$email' and password='$password'";

    // 执行sql语句
    $result = $conn->query($sql);


    if($result->num_rows>0){
        echo "yes";
    }else{
        echo "no";
    }

?>