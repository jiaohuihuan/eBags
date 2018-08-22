<?php
    // 引入connect.php
    include 'connect.php';

    /*
        接口功能：用户注册
            * 写入数据库
        所需参数：
            * email
            * password
     */
    
    $email = isset($_POST['email']) ? $_POST['email'] : null; 
    $name = isset($_POST['name']) ? $_POST['name'] : null; 
    $age = isset($_POST['age']) ? $_POST['age'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 
    $site = isset($_POST['site']) ? $_POST['site'] : null; 
    $code = isset($_POST['code']) ? $_POST['code'] : null; 
    $city = isset($_POST['city']) ? $_POST['city'] : null; 
    $area = isset($_POST['area']) ? $_POST['area'] : null; 


    mysqli_set_charset($conn,'utf-8');
    // 添加到数据库
    $sql = "insert into users(email,name,age,password,site,code,city,area) values('$email','$name','$age','$password','$site','$code','$city','$area')";

    // 执行sql语句
    $result = $conn->query($sql);


    if($result){
        echo "success";
    }else{
        echo "fail";
    }

?>