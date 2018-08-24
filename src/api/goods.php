<?php
    // 引入connect.php
    include 'connect.php';


 

    $id = isset($_GET['id']) ? $_GET['id'] : null; 
    
         


    // 查找数据库中对应的id
    $sql = "select * from list where id='$id'";

   // 执行sql语句
    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    $result -> close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $conn->close();

?>